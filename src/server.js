import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import { StaticRouter as Router } from 'react-router-dom'
import App from './components/App';
import theme from './theme';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

function renderFullPage(html, css, preloadedState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Jaws</title>
        <style id="jss-server-side">${css}</style>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <!-- Fonts to support Material Design -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <script>
        function fnLoading() {
          document.getElementById("loading").style.display = "block";
        }
        function fnLoaded() {
          document.getElementById("loading").style.display = "none";
        }
        </script>
      </head>
      <body>
        <div id="loading" align="center" style="display: none; margin-top: 50px;"><img src="/public/img/loading.gif" /></div>
        <script async src="build/bundle.js"></script>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c'
  )}
        </script>
      </body>
    </html>
  `;
}

function handleRender(req, res) {
  const store = createStore(reducers)

  const context = {};
  const sheets = new ServerStyleSheets();

  // Render the component to a string.
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Router location={req.url} context={context}>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>,
    ),
  );

  // Grab the CSS from our sheets.
  const css = sheets.toString();

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, css, preloadedState));
}

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}

const app = express();
app.use(cookieParser());
app.use(compression({ filter: shouldCompress }))

app.use('/build', express.static('build'));
app.use('/public', express.static('public'));

app.use(function (req, res) { // Redirect from Auth new Token
  handleRender(req, res);
});

const port = 80;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${port}`);
});