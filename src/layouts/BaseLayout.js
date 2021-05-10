// 基础布局组件

import React from 'react'
import { Layout, Menu} from 'antd';

// 样式
import './BaseLayout.less'

// 路由
import {
  Route,
  Switch,
} from 'react-router-dom'

import {
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';

// pages 中的组件
import Welcome from '../pages/Welcome'
import UserManage from '../pages/UserManage'

const { Header, Content, Sider,   } = Layout;

const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  
  render() {
    return (
      <Layout className='base-layout'>
        <Sider>

          <div className="logo" />

          {/* 菜单 start */}
          <Menu 
            theme="dark" 
            defaultSelectedKeys={['1']} mode="inline"
          >

            <Menu.Item key="1"
              icon={<PieChartOutlined />}
              onClick={ 
                this.handleMenuLink.bind(this, '/')
              }
            >
              Welcome
            </Menu.Item>

            <SubMenu key="sub1" 
              icon={<UserOutlined />} 
              title="用户管理"
            >

              <Menu.Item 
                key="3"
                onClick={ 
                  this.handleMenuLink.bind(this, '/user-manage')
                }  
              >用户列表</Menu.Item>

              <Menu.Item 
                key="4"
                onClick={ 
                  this.handleMenuLink
                }
              >权限设置</Menu.Item>

            </SubMenu>
            {/* 菜单 end */}

          </Menu>

        </Sider>

        <Layout>
          <Header className='header' />
          
          <Content className='content'>
            <Switch>
              <Route 
                path="/user-manage" 
                component={ UserManage }
              />

              <Route 
                path='/' 
                component={ Welcome } 
              />

            </Switch>
          </Content>

        </Layout>
      </Layout>
    );
  }

  /**
   * 菜单项点击
   */
  handleMenuLink = (path) => {
    this.props.history.push(path)
  }
}

export default SiderDemo
