import React from 'react'
import Helmet from 'react-helmet'
import Page from '../../../components/LayoutComponents/Page/index'
import Dashboard from './Dashboard/index'

class DashboardPage extends React.Component {
  static defaultProps = {
    pathName: 'Dashboard',
    roles: ['agent', 'administrator'],
  }

  render() {
    const props = this.props
    return (
      <Page {...props}>
        <Helmet title="Dashboard" />
        <Dashboard />
      </Page>
    )
  }
}

export default DashboardPage
