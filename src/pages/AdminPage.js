import React, { Component } from 'react';
import classnames from 'classnames';
import Logo from '../components/common/Logo';


class AdminPage extends Component {
    render() {
        const sidebar_data = [
            {
                key: 'colors',
                iconClassName: 'icon-drop',
                text: 'Colors'
            },
            {
                key: 'typography',
                iconClassName: 'icon-pencil',
                text: 'Typography'
            },
            {
                key: 'base',
                iconClassName: 'icon-puzzle',
                text: 'Base'
            },
            {
                key: 'buttons',
                iconClassName: 'icon-cursor',
                text: 'Buttons'
            },
            {
                key: 'charts',
                iconClassName: 'icon-pie-chart',
                text: 'Charts'
            },
            {
                key: 'editors',
                iconClassName: 'fa fa-code',
                text: 'Editors'
            },
            {
                key: 'forms',
                iconClassName: 'icon-note',
                text: 'Forms'
            },
            {
                key: 'google-maps',
                iconClassName: 'icon-map',
                text: 'Google Maps'
            },
            {
                key: 'icons',
                iconClassName: 'icon-star',
                text: 'Icons'
            },
            {
                key: 'notifications',
                iconClassName: 'icon-bell',
                text: 'Notifications'
            },
            {
                key: 'plugins',
                iconClassName: 'icon-energy',
                text: 'Plugins'
            },
            {
                key: 'tables',
                iconClassName: 'icon-list',
                text: 'Tables'
            },
            {
                key: 'widgets',
                iconClassName: 'icon-calculator',
                text: 'Widgets'
            },
            {
                key: 'pages',
                iconClassName: 'icon-star',
                text: 'Pages'
            },
            {
                key: 'apps',
                iconClassName: 'icon-layers',
                text: 'Apps'
            }
        ];

        return (
            <div className='admin-page'>
                <nav className='navbar-area'>
                    <div className='navbar-logo-area'>
                        <Logo />
                        <div className='navbar-toggle'>
                            <i className='icon-menu'></i>
                        </div>
                    </div>
                    <div className='navbar-main-area'>
                        <div className='navbar-left'>
                            <ul className='navbar-list'>
                                <li className='navbar-list-item'>
                                    <a href='#' className='navbar-list-item-link'>
                                        <i className='navbar-list-item-icon icon-graph'></i>
                                        <span className='navbar-list-item-text'>Dashboard</span>
                                    </a>
                                </li>
                                <li className='navbar-list-item'>
                                    <a href='#' className='navbar-list-item-link'>
                                        <i className='navbar-list-item-icon icon-user'></i>
                                        <span className='navbar-list-item-text'>Users</span>
                                    </a>
                                </li>
                                <li className='navbar-list-item'>
                                    <a href='#' className='navbar-list-item-link'>
                                        <i className='navbar-list-item-icon icon-settings'></i>
                                        <span className='navbar-list-item-text'>Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='navbar-right'>
                            <ul className='navbar-list'>
                                <li className='navbar-list-item'>
                                    <a href='#' className='navbar-list-item-link'>
                                        <i className='icon-speech'></i>
                                    </a>
                                </li>
                                <li className='navbar-list-item'>
                                    <a href='#' className='navbar-list-item-link'>
                                        <i className='icon-bell'></i>
                                        <span className='badge badge-danger'>1</span>
                                    </a>
                                </li>
                                <li className='navbar-list-item'>
                                    <a href='#' className='navbar-list-item-link'>
                                        <i className='icon-list'></i>
                                        <span className='badge badge-warning'>5</span>
                                    </a>
                                </li>
                                <li className='navbar-list-item'>
                                    <a href='#' className='navbar-list-item-link'>
                                        <i className='icon-envelope-letter'></i>
                                        <span className='badge badge-info'>10</span>
                                    </a>
                                </li>
                                <li className='navbar-list-item'>
                                    <div className='navbar-toggle'>
                                        <a className='navbar-list-item-link img-user-link'>
                                            <img src={require('../assets/images/user.jpg')} className='img-user' />
                                        </a>
                                    </div>
                                </li>
                                <li className='navbar-list-item'>
                                    <div className='navbar-toggle'>
                                        <a className='navbar-list-item-link'>
                                            <i className='icon-menu'></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <aside className='admin-sidebar-area'>
                    <ul className='admin-sidebar-list scrollbar'>
                        <li className='admin-sidebar-title'>
                            Theme
                        </li>
                        {
                            sidebar_data && sidebar_data.map(item =>
                                <li className='admin-sidebar-list-item' key={item.key}>
                                    <a href={item.key}>
                                        <span className={classnames('admin-sidebar-list-item-icon', item.iconClassName)}></span>
                                        <span className='admin-sidebar-list-item-text'>{item.text}</span>    
                                    </a>
                                </li>    
                            ) 
                        }
                    </ul>
                    <div className='admin-sidebar-minimizer'>
                        <i className='icon-arrow-left'></i>
                    </div>
                </aside>
                <main className='main-content-area'>
                    <div className='breadcrumb-area'>
                        <ul className='breadcrumb'>
                            <li className='breadcrumb-item'>
                                <a href='#'>Home</a>
                            </li>
                            <li className='breadcrumb-item'>
                                <a href='#'>Admin</a>
                            </li>
                            <li className='breadcrumb-item'>
                                <a href='#'>Dasboard</a>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        )
    }
}


export default AdminPage;