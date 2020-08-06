import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './css/menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const menus = [
  {
    name: 'Trang chủ',
    to: '/',
    exact: true
  },
  {
    name: 'Liên hệ',
    to: '/lien-he',
    exact: true
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        return (
          <li className={match ? 'active-menu' : ''}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  render() {
    return (
      <div className="header">
        <div className="wrap">
          <div className="logo">
            <img src="./images/logo.png" alt="mo hinh gia re" />
          </div>

          <nav className="nav-element">
            <ul>
              <li>
                <a className="border-hover" href="/">
                  Trang chủ
                </a>{' '}
              </li>
              <li>
                <a className="border-hover" href="/">
                  Fanpage
                </a>{' '}
              </li>
              <li>
                <a className="border-hover" href="/">
                  shopee
                </a>{' '}
              </li>
              <li>
                <a className="border-hover" href="/">
                  Liên hệ
                </a>{' '}
              </li>
              <li>
                <input
                  className="search-input"
                  name="search"
                  placeholder="tim san pham"
                />
                <FontAwesomeIcon icon={faSearch} />
              </li>
            </ul>
          </nav>

          <div></div>
        </div>
      </div>
    );
  }

  showMenus = (menus) => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;
