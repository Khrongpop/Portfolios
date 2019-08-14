import React from 'react';
import { Menu } from 'antd';

export default ({completeKey}) => {

    const [current,setCurrent] = React.useState('HOME')

    const handleClick = e => {
        setCurrent(e.key)
        completeKey(e.key)
    };

    return (
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
        <Menu.Item key="HOME">
          HOME
        </Menu.Item>
        <Menu.Item key="ABOUT" >
          ABOUT
        </Menu.Item>
        <Menu.Item key="PORTFOLIO" >
          PORTFOLIO
        </Menu.Item>
        <Menu.Item key="BLOG" >
          BLOG
        </Menu.Item>
        <Menu.Item key="CONTACT" >
          CONTACT 
        </Menu.Item>
      </Menu>
    )
}

