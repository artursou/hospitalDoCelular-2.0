import styled from 'styled-components';
import { bp } from '../../styles/breakpoints';

export const Section = styled.section`
  padding: 60px 0;
  display: flex;
  justify-content: center;

  @media (max-width: ${bp.mobile}) {
    padding: 40px 0;
  }
`;

export const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  max-width: 1200px;
  padding: 0 5%;
  box-sizing: border-box;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;

  @media (max-width: ${bp.mobile}) {
    position: absolute;
    inset: 0;
    width: auto;
    height: auto;
  }
`;

export const CardWrapper = styled.div`
  width: 260px;
  height: 260px;
  perspective: 1000px;
  cursor: pointer;
  flex-shrink: 0;

  &:hover ${Card} {
    transform: rotateY(180deg);
  }

  @media (max-width: ${bp.tablet}) {
    width: 220px;
    height: 220px;
  }

  @media (max-width: ${bp.mobile}) {
    width: calc(50% - 12px);
    aspect-ratio: 1 / 1;
    position: relative;
    flex-shrink: 1;
  }

  @media (max-width: 400px) {
    width: 100%;
    aspect-ratio: 1 / 1;
  }
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 24px;
  box-sizing: border-box;
`;

export const CardFront = styled(CardFace)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
`;

export const PlusButton = styled.span`
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 20px;
  font-weight: 300;
  color: #333;
  line-height: 1;
`;

export const CardTitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  margin: 0;
`;
