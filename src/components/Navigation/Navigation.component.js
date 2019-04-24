import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledMenu = styled.ul`
    list-style: none;
    display: flex;

    li {
        margin-right: 15px;
    }

    a {
        color: #fff;
        text-decoration: none;
    }
`;

const Navigation = () => (
  <nav>
    <StyledMenu>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/info">Informacje</Link>
      </li>
      <li>
        <Link to="/repos">Repozytoria</Link>
      </li>
    </StyledMenu>
  </nav>
);

export default Navigation