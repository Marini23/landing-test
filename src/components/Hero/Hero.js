import imageHero from '../../images/image_mobile.jpg';
import {
  Button,
  Container,
  TextOne,
  TextThree,
  TextTwo,
  Title,
  TitleTwo,
  TitleTwoSpan,
  WrapMainContant,
} from './Hero.styled';

export const Hero = () => {
  return (
    <Container>
      <WrapMainContant>
        <TextOne>diD yOu seE iT ?</TextOne>
        <Title>YACHT APES</Title>
        <TextTwo>Apes aRe eveRywhere</TextTwo>
        <img src={imageHero} alt="monkey" />
        <Button>MEET APES</Button>
        <TextThree>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </TextThree>
      </WrapMainContant>
      <TitleTwo>
        A STORY THAT STARTED WITH <TitleTwoSpan>ONE SIMPLE APE</TitleTwoSpan>
      </TitleTwo>
    </Container>
  );
};
