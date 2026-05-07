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
  padding: 20px;
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
  width: 40%;
`;

export const InfoBar = styled.div`
  background-color: rgba(255, 255, 255, 0.88);
  padding: 20px 20px;
  border-radius: 12px;
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconCircle = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const InfoItem = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  max-width: 120px;
`;
