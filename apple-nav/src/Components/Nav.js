import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ navItem }) => {
  return (
    <NavLink activeStyle={{color: 'gray'}} to={`/${navItem.name}`}>
      <p>{navItem.name}</p>
    </NavLink>
  );
};

export default Nav;
