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
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  
  margin-top: 20px;
`;

export const TextBox = styled.div`
  background-color: rgba(255, 255, 255, 0.72);
  padding: 40px;
  border-radius: 12px;
  width: 40%;       /* ajustar conforme quiser */
`;


export const Text = styled.p`
  font-size: 20px;
`

export const ButtonContainer = styled.div`
  width: 40%;        
  display: flex;
  justify-content: flex-start;
  margin-top: 20px; 
`;