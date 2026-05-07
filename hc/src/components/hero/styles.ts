import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 600px;
  background-image: url('/banner.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px; /* espaço entre o TextBox e a barra central */
`;

export const TextBox = styled.div`
  background-color: rgba(255, 255, 255, 0.72);
  padding: 40px;
  border-radius: 12px;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const InfoBar = styled.div`
  background-color: rgba(255, 255, 255, 0.88);
  padding: 20px 40px;
  border-radius: 12px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoItem = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

export const InfoImg = styled.img`

`
