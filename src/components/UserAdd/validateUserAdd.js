const validate = values => {
    const errors = {}
    
    if (!values.firstName) {
      errors.firstName = 'Required'
    }
    return errors
  }
  
  export default validate