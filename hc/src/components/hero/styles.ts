import styled from 'styled-components';
import { bp } from '../../styles/breakpoints';

export const Container = styled.div`
  width: 100%;
  min-height: 600px;
  background-image: url('/banner.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 40px 20px;
  box-sizing: border-box;

  @media (max-width: ${bp.tablet}) {
    min-height: 500px;
  }

  @media (max-width: ${bp.mobile}) {
    min-height: auto;
    padding: 32px 16px;
    gap: 24px;
  }
`;

export const TextBox = styled.div`
  background-color: rgba(255, 255, 255, 0.72);
  padding: 20px;
  border-radius: 12px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${bp.tablet}) {
    width: 70%;
  }

  @media (max-width: ${bp.mobile}) {
    width: 100%;
  }
`;

export const Text = styled.p`
  font-size: 20px;

  @media (max-width: ${bp.mobile}) {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;

  @media (max-width: ${bp.tablet}) {
    width: 70%;
  }

  @media (max-width: ${bp.mobile}) {
    width: 100%;
  }
`;

export const InfoBar = styled.div`
  background-color: rgba(255, 255, 255, 0.88);
  padding: 20px;
  border-radius: 12px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${bp.tablet}) {
    width: 70%;
  }

  @media (max-width: ${bp.mobile}) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
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

  @media (max-width: ${bp.mobile}) {
    max-width: none;
  }
`;
