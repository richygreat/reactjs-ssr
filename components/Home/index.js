import React from "react"

import styles from "../../styles"
import { withStyles } from "@material-ui/core/styles"

class Home extends React.Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default withStyles(styles)(Home)