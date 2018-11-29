import React from 'react'
import { connect } from 'react-redux'
import { logout } from 'ducks/app'
import { Menu, Dropdown, Avatar, Badge } from 'antd'

const mapDispatchToProps = dispatch => ({
  logout: event => {
    event.preventDefault()
    dispatch(logout())
  },
})

const mapStateToProps = (state, props) => ({
  userState: state.app.userState,
})

@connect(mapStateToProps, mapDispatchToProps)
class ProfileMenu extends React.Component {
  state = {
    count: 7,
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    const { count } = this.state
    const { userState, logout } = this.props
    const menu = (
      <Menu selectable={false}>
        <Menu.Item>
          <a href="javascript: void(0);" onClick={logout}>
            <i className="topbar__dropdownMenuIcon icmn-exit" /> Signout
          </a>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="topbar__dropdown d-inline-block">
        <Dropdown
          overlay={menu}
          trigger={['click']}
          placement="bottomRight"
          onVisibleChange={this.addCount}
        >
          <a className="ant-dropdown-link" href="/">
            <Badge count={count}>
              <Avatar className="topbar__avatar" shape="circle" size="large" icon="user" src='resources/images/avatars/user.png' />
            </Badge>
          </a>
        </Dropdown>
      </div>
    )
  }
}

export default ProfileMenu
