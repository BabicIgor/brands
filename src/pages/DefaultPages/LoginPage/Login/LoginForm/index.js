import React from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { REDUCER, submit } from 'ducks/login'

const FormItem = Form.Item

const mapStateToProps = (state, props) => ({
  isSubmitForm: state.app.submitForms[REDUCER],
})

@connect(mapStateToProps)
@Form.create()
class LoginFormComponent extends React.Component {

  onSubmit = (isSubmitForm: ?boolean) => event => {
    event.preventDefault()
    const { form, dispatch } = this.props
    if (!isSubmitForm) {
      form.validateFields((error, values) => {
        if (!error) {
          dispatch(submit(values))
        }
      })
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { form, isSubmitForm } = this.props

    return (
      <Form onSubmit={this.onSubmit(isSubmitForm)} className="login-form">
        <FormItem label="Email">
          {form.getFieldDecorator('username', {
            initialValue: 'admin@mediatec.org',
            rules: [
              { type: 'email', message: 'The input is not a valid e-mail address' },
              { required: true, message: 'Please input your e-mail address' },
            ],
          })(<Input size="default" />)}
        </FormItem>
        <FormItem label="Password">
          {form.getFieldDecorator('password', {
            initialValue: '123123',
            rules: [{ required: true, message: 'Please input your password' }],
          })(<Input size="default" type="password" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a
            className="login-form-forgot pull-right text-primary"
            style={{ lineHeight: '36px' }}
            href="javascript: void(0);"
          >
            Forgot password?
          </a>
        </FormItem>
        <div className="form-actions">
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign in
          </Button>
          <span className="ml-3 register-link">
            <a href="javascript: void(0);" className="text-primary utils__link--underlined">
              Register
            </a>{' '}
            if you don't have account
          </span>
        </div>
        <div className="form-group">
          <span>Use another service to Log In</span>
          <div className="mt-2">
            <a href="javascript: void(0);" className="btn btn-icon mr-2">
              <i className="icmn-facebook" />
            </a>
            <a href="javascript: void(0);" className="btn btn-icon mr-2">
              <i className="icmn-google" />
            </a>
            <a href="javascript: void(0);" className="btn btn-icon mr-2">
              <i className="icmn-windows" />
            </a>
            <a href="javascript: void(0);" className="btn btn-icon mr-2">
              <i className="icmn-twitter" />
            </a>
          </div>
        </div>
      </Form>
    )
  }
}

const LoginForm = Form.create()(LoginFormComponent)
export default LoginForm
