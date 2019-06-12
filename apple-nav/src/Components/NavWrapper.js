import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dummyData } from '../dummyData';
import Nav from './Nav';
import { FaApple } from 'react-icons/fa';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

const NavWrapperContainer = styled.nav`
  width: 100%;
  position: fixed;
  background-color: rgba(45, 45, 45, 0.98);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px 10.5%;
  z-index: 999;

  a, svg {
    color: white;
    text-decoration: none;
    transition: .3s ease-in-out;
    font-size: 15px;
    &:hover {
      color: gray;
    }
  }

  svg:first-child {
    font-size: 20px;
  }
`;

class NavWrapper extends React.Component {
  state = {
    navItems: dummyData
  };

  render() {
    return (
      <NavWrapperContainer>
        <Link to="/"><FaApple /></Link>
        {this.state.navItems.map(navItem => (
          <Nav
            key={navItem.name}
            navItem={navItem}
            textColor="white"
            hoverColor="gray"
          />
        ))}
        <Link to="/">Support</Link>
        <FiSearch />
        <FiShoppingBag />
      </NavWrapperContainer>
    );
  }
}

export default NavWrapper;
