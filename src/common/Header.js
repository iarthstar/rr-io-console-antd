import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';


const Header = (props) => {
  const { children, topbar } = props;

  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => setCollapsed(!collapsed);


  return (
    <Layout>
      {css}
      <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            BUILDS
            </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            DEPLOYMENTS
            </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            PACKAGES
            </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout className="site-layout">
        <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
          {topbar}
        </Layout.Header>
        {/* <Layout.Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
      </Layout.Content> */}
        {children}
      </Layout>
    </Layout>
  );
}

const css = (
  <style jsx>{`
  .nav-btns {
    float: right;
  }
    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;
    }

    .trigger:hover {
      color: #1890ff;
    }

    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.3);
      margin: 16px;
    }

    .site-layout .site-layout-background {
      background: #fff;
    }
  `}
  </style>
);

export default Header;