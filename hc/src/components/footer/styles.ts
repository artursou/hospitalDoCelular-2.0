import styled from 'styled-components';
import { bp } from '../../styles/breakpoints';

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 5%;

  @media (max-width: ${bp.tablet}) {
    flex-direction: column;
    gap: 32px;
    align-items: center;
    text-align: center;
  }

  @media (max-width: ${bp.mobile}) {
    padding: 24px 16px;
  }
`;

export const FooterLogo = styled.img`
  max-width: 120px;
`;

export const ContactArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContactTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  text-align: center;
`;

export const ContactRow = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: ${bp.tablet}) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (max-width: ${bp.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #333;
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  img {
    width: 36px;
    height: 36px;
    transition: opacity 0.2s ease;
  }
  &:hover img {
    opacity: 0.8;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #e0e0e0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${bp.mobile}) {
    padding: 14px 16px;
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`;

export const CopyrightText = styled.p`
  font-size: 13px;
  color: #666;
  margin: 0;
`;

export const DevelopedByLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #333;
  }
`;
