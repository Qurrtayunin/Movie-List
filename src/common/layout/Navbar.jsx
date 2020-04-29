import React, { Component } from 'react';
import { Menu } from 'antd';
import '../layout/css/navbar.css';
import { Link } from 'react-router-dom';


const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
    <nav className="menuBar">
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
            <Link to="/">Home</Link> 
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/search">Search Movie</Link>
        </Menu.Item>
      </Menu>
    </nav>
    );
  }
}

export default Navbar;
