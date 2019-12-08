import React from "react"
import { Field, reduxForm } from 'redux-form'

import styles from "../../styles"
import { withStyles } from "@material-ui/core/styles"

import { validate } from "./validateUserAdd"
import { renderField } from "../common"

class UserAdd extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div align="center">
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <div>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
                component={renderField}
              />
            </div>
          </div>
          <div>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  validate,
  form: 'userAddForm',        // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
})(withStyles(styles)(UserAdd))