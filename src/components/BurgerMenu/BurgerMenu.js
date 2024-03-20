import { Container, ListMenu, LogoIcon, NavItem } from './BurgerMenu.styled';

import logo from '../../icons/logo_mobile.svg';
import { Footer } from 'components/Footer/Footer';
import { BurgerButton } from 'components/BurgerButton/BurgerButton';

export const BurgerMenu = () => {
  return (
    <Container>
      <LogoIcon src={logo} alt="logo Icon" />
      <BurgerButton backgroundColor="rgba(255, 255, 255, 0.1)" />
      <ListMenu>
        <NavItem>ABOUT</NavItem>
        <NavItem>M-MAP</NavItem>
        <NavItem>FAQ</NavItem>
        <NavItem>ARTS</NavItem>
        <NavItem>MINT</NavItem>
      </ListMenu>
      <Footer />
    </Container>
  );
};
