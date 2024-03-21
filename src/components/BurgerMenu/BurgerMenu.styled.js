import styled from 'styled-components';

export const Container = styled.div`
  max-width: 480px;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  margin: 0 auto;
`;

export const ListMenu = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Messina';
  font-size: 24px;
  font-weight: 600px;
  line-height: 29px;
  color: #ffffff;
  margin-top: 296px;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

export const NavItem = styled.li`
  cursor: pointer;
  &:hover {
    color: #dc3b5a;
  }
`;

export const LogoIcon = styled.img`
  cursor: pointer;
  position: absolute;
  top: 70px;
  left: 16px;
`;
