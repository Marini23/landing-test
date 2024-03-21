import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const WrapMainContant = styled.div`
  background-color: #dc3b5a;
  border-radius: 12px;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
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
  width: 217px;
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
