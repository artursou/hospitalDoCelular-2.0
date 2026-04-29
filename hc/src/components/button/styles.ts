import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #FC4664;
  color: white;
  padding: 14px 40px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #ff5c79; 
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0px);
  }
`;