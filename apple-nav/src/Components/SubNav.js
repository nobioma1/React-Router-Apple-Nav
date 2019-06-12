import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dummyData } from '../dummyData';

const SubNavContainer = styled.div`
  position: absolute;
  background-color: ${props =>
    props.bg ? props.bg : 'rgba(242, 242, 242, 0.7)'};
  width: 100%;
  margin-top: 50px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15%;

  a {
    text-decoration: none;
    color: ${props => (props.bg ? 'white' : '#111111')};
    transition: 0.3s ease-in-out;
    &:hover {
      color: dodgerblue;
    }
  }

  p {
    margin: 0;
    font-size: 12px;
  }

  img {
    height: 50px;
  }
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class SubNav extends React.Component {
  state = {
    subNavItems: [],
    currentNav: null
  };

  componentDidMount() {
    this.getSubNav(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.product !== newProps.match.params.product) {
      this.getSubNav(newProps);
    }
  }

  getSubNav = props => {
    let currentNav = dummyData.find(
      navItem => navItem.name === props.match.params.product
    );
    this.setState({
      subNavItems: currentNav.subLinks,
      currentNav: currentNav.name
    });
  };

  render() {
    return (
      <SubNavContainer bg={this.state.currentNav === 'TV' ? 'black' : null}>
        {this.state.subNavItems.map((subLink, index) => (
          <Link key={`${subLink}%${index}`} to="#">
            <NavItem>
              <img src={subLink.img} alt={`${subLink.name} device icon`} />
              <p>{subLink.name}</p>
            </NavItem>
          </Link>
        ))}
      </SubNavContainer>
    );
  }
}

export default SubNav;
