import React from 'react'
import {Link} from 'react-router-dom'
import {
    Menu, Icon, Switch, Layout,
} from 'antd'
import {connect} from 'react-redux'
import allMenu from '../utils/menu'
import Top from './header'
import Contents from './content'
import Footer from './bottom'
import './index.less'

const {SubMenu} = Menu
const {Sider} = Layout

@connect(
    (state) => ({
        router: state.router,
    })
)
export default class Container extends React.Component {
    state = {
        theme: 'dark',
        collapsed: false,
        mode: 'inline',
    }

    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        })
    }

    toggle = () => {
        const {collapsed} = this.state
        this.setState({
            collapsed: !collapsed,
            mode: collapsed ? 'inline' : 'vertical',
        })
    }

    render() {
        const {
            collapsed, theme, mode,
        } = this.state
        const {router} = this.props
        let selectedKey = router.location.pathname.split('/')
        selectedKey = '/' + selectedKey[1] + '/' + selectedKey[2]
        let openKey = ''
        for (let menuObj of allMenu) {
            if (menuObj.children) {
                for (let menuList of menuObj.children) {
                    if ('/m/' + menuList.url === selectedKey) {
                        openKey = '/m/'+menuObj.url
                        break
                    }
                }
            }
        }
        return (
            <Layout className="containAll">
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.onCollapse}
                >
                    <p className="logo-img"><img src={require("../images/logo.png")}/></p>
                    <Menu
                        theme={theme}
                        defaultOpenKeys={[openKey]}
                        selectedKeys={[selectedKey]}
                        className="menu"
                        mode={mode}
                    >
                        {
                            allMenu.map((subMenu) => {
                                if (subMenu.children && subMenu.children.length) {
                                    return (
                                        <SubMenu key={'/m/' + subMenu.url} title={<span><Icon
                                            type={subMenu.icon}/><span>{subMenu.name}</span></span>}>
                                            {subMenu.children.map(menu => (
                                                <Menu.Item key={'/m/' + menu.url}><Link
                                                    to={`/m/${menu.url}`}>{menu.name}</Link></Menu.Item>
                                            ))}
                                        </SubMenu>
                                    )
                                }
                                return (
                                    <Menu.Item key={'/m/' + subMenu.url}>
                                        <Link to={`${subMenu.url}`}>
                                            <Icon type={subMenu.icon}/>
                                            <span className="nav-text">{subMenu.name}</span>
                                        </Link>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Top toggle={this.toggle} collapsed={collapsed}/>
                    <Contents/>
                    {/* <Footer />*/}
                </Layout>
            </Layout>
        )
    }
}
