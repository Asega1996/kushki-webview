import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CustomNavLink = styled(NavLink)`
  text-align: center;
  text-decoration:none;
  font-weight: bold;
  color: white;
  &:hover{
    text-decoration: none;
    color: white;
  }
`;


export const CustomNavLinkSidenav = styled(NavLink)`
  text-align: center;
  text-decoration:none;
  font-weight: bold;
  &:hover{
    text-decoration: none;
    color: white;
  }
`;

export const CustomHistoryLink = styled(NavLink)`
  text-align: center;
  text-decoration:none;
  font-weight: bold;
  color: #2a2e28;
  &:hover{
    text-decoration: none;
    color: #7dd333;
  }
`;