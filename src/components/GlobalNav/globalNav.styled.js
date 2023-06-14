import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeContactsList = styled.ul`
  display: flex;
  justify-content: baseline;
`;

export const HomeContactsItem = styled.li`
  display: flex;
  margin-right: 35px;
  align-items: center;
`;
export const HomeContactsLink = styled(NavLink)`
  font-weight: 800;
  color: #26262b;
  border-bottom: 2px solid transparent;
  padding: 10px 15px;
  transition: all 0.3s ease-in-out;
  font-size: 20px;
  &.active {
    color: #17ae29;
    border-bottom: 1px solid #17ae29;
  }
`;
