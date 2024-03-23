import { BurgerButton } from 'components/BurgerButton/BurgerButton';
import imageHero from '../../icons/ape_mobile.svg';
import {
  Button,
  Container,
  LogoIcon,
  TextOne,
  TextThree,
  TextTwo,
  Title,
  WrapMainContant,
} from './Hero.styled';
import logo from '../../icons/logo_mobile.svg';

export const Hero = () => {
  return (
    <Container>
      <LogoIcon src={logo} alt="logo Icon" />
      <BurgerButton />
      <WrapMainContant>
        <TextOne>diD yOu seE iT ?</TextOne>
        <Title>YACHT APES</Title>
        <TextTwo>Apes aRe eveRywhere</TextTwo>
        <img src={imageHero} alt="ape" />
        <Button>MEET APES</Button>
        {/* <Description>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </Description> */}
        <TextThree>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </TextThree>
      </WrapMainContant>
    </Container>
  );
};
