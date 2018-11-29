import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import LoginAlpha from './Login/index'

class LoginPage extends React.Component {
  static defaultProps = {
    pathName: 'Login Alpha',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Login Alpha" />
        <LoginAlpha />
      </Page>
    )
  }
}

export default LoginPage
