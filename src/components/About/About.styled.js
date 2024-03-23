import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 60px 72px 0 72px;
`;

export const Title = styled.h2`
  font-family: Grotesk;
  font-size: 40px;
  line-height: 40px;
  font-weight: 900;
  color: #ffffff;
`;

export const SpanTitle = styled.span`
  color: #dc3b5a;
`;

export const TextOne = styled.p`
  font-family: Messina;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #ffffff;
  text-align: right;
  margin-top: 16px;
  margin-bottom: 36px;
`;

export const TextTwo = styled.p`
  font-family: Messina;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 36px;
`;
