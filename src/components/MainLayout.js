import React from 'react';
import Home from './Home';
import Details from './Details';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu, PageHeader } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import {
    HomeOutlined,
    TeamOutlined,
    DollarOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const { SubMenu } = Menu;



class MainLayout extends React.Component {
    state = {
        collapsed: true,
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <HomeOutlined />
                                <span>Home</span>
                                <Link to="/" />
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <TeamOutlined />
                                        <span>Family</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="3">
                                    <span>Details</span>
                                    <Link to="/details" />
                                </Menu.Item>
                                <Menu.Item key="4">Donations</Menu.Item>
                                <Menu.Item key="5">Documents</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <DollarOutlined />
                                        <span>Finance</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="6">Income/Expense</Menu.Item>
                                <Menu.Item key="8">Reports</Menu.Item>
                            </SubMenu>

                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <PageHeader
                            title="Halifax Syro Malabar Church"
                        />
                        <Content style={{ margin: '0 16px' }}>

                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <Switch>
                                    <Route path="/details">
                                        <Details />
                                    </Route>
                                    <Route path="/">
                                        <Home />
                                    </Route>
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>©Jobin Basani</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}



export default MainLayout;

