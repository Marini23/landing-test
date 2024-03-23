import styled from 'styled-components';
export const Container = styled.section`
  position: relative;
  /* max-width: 480px;
  min-width: 360px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const LogoIcon = styled.img`
  cursor: pointer;
  position: absolute;
  top: 70px;
  left: 16px;
`;

export const WrapMainContant = styled.div`
  background-color: #dc3b5a;
  border-radius: 12px;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  margin-top: 56px;
`;

export const Title = styled.h1`
  font-family: Grotesk;
  font-size: 44px;
  line-height: 44px;
  font-weight: 900;
  color: #1e1e1e;
`;

export const TextOne = styled.p`
  font-family: Biro;
  font-size: 16px;
  line-height: 27px;
  font-weight: 900;
  color: #1e1e1e;
`;

export const TextTwo = styled.p`
  font-family: Biro;
  font-size: 16px;
  line-height: 27px;
  font-weight: 900;
  color: #1e1e1e;
`;

export const TextThree = styled.p`
  display: flex;
  flex-wrap: wrap;
  font-family: Messina;
  font-size: 12px;
  line-height: 14px;
  color: #1e1e1e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 12px;
  width: 217px;
  height: 50px;
  font-family: Messina;
  font-size: 12px;
  line-height: 14px;
  color: #1e1e1e;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 216px;
  height: 41px;
  border-radius: 8px;
  border: none;
  padding: 0px, 70px, 12px, 70px;
  background-color: rgba(255, 255, 255, 0.1);
  font-family: Grotesk;
  font-size: 16px;
  line-height: 19px;
  font-weight: 900;
  color: #1e1e1e;
`;

export const TitleTwo = styled.h2`
  width: 217px;
  display: flex;
  flex-wrap: wrap;
  font-family: Grotesk;
  font-size: 40px;
  font-weight: 900;
  line-height: 40px;
  color: #ffffff;
  margin-top: 60px;
`;

export const TitleTwoSpan = styled.span`
  color: #dc3b5a;
`;
