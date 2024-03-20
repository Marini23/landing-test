import styled from 'styled-components';

export const ListButton = styled.ul`
  position: absolute;
  top: 62px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.li`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  padding: 10px;
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: ${props => props.backgroundColor};
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
