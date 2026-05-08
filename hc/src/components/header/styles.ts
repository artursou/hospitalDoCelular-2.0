import styled from 'styled-components';
import { bp } from '../../styles/breakpoints';

export const Container = styled.header`
  width: 100%;
  height: auto;
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 5%;

    @media (max-width: ${bp.mobile}) {
        padding: 0 16px;
    }
`;

export const ImgLogo = styled.img`
    max-width: 250px;

    @media (max-width: ${bp.mobile}) {
        max-width: 180px;
    }
`
