import React from 'react';
import 'antd/dist/antd.css';
import {Menu, Icon, Layout} from 'antd';
import { Link } from 'react-router-dom';


class Menus extends React.Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (

      <Menu
        onClick={this.handleClick}
        style={{ width: 200}}
        defaultSelectedKeys={['1']}
        mode="inline">

        <Menu.Item key="Problem" style={{height:50,fontSize:18}}>
            <Link to="/Problem"><Icon type="question-circle" />
            常见问题</Link>
        </Menu.Item>

        <Menu.Item key="Status" style={{height:50,fontSize:18}}>
            <Link to="/Damage"><Icon type="tool" />
            受损状况</Link>
        </Menu.Item>

        <Menu.Item key="Apply" style={{height:50,fontSize:18}}>
            <Link to="/Apply"><Icon type="snippets" />
            申请理赔</Link>
        </Menu.Item>

        <Menu.Item key="Progress" style={{height:50,fontSize:18}}>
            <Link to="/Progress"><Icon type="hourglass" />
            理赔进度</Link>
        </Menu.Item>

        <Menu.Item key="History" style={{height:50,fontSize:18}}>
            <Link to="/History"><Icon type="history" />
            历史理赔</Link>
        </Menu.Item> 
         
      </Menu>
    );
  }
}

export default Menus;