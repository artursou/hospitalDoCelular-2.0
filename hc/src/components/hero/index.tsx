import React from "react";
import { Container, Text, TextBox, ButtonContainer, InfoBar, InfoGroup, IconCircle, InfoItem } from "./styles";
import Button from "../button";

export default function Hero() {
    return (
        <Container>
            <TextBox>
                <h1>Pioneirismo e Precisão no Reparo do seu Smartphone.</h1>

                <Text>
                    Há mais de 27 anos, o Hospital do Celular é a referência em Brasília 
                    para consertos seguros, rápidos e com garantia. 
                    Da troca de tela a reparos avançados em placas.
                </Text>
            </TextBox>
                <ButtonContainer>
                    <Button title="Fazer Orçamento" onClick={() => window.open("https://api.whatsapp.com/send?phone=5561993681910", "_blank")}/>
                </ButtonContainer>
            

            <InfoBar>
                <InfoGroup>
                    <IconCircle>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                        </svg>
                    </IconCircle>
                    <InfoItem>+27 Anos de Experiência</InfoItem>
                </InfoGroup>
                <InfoGroup>
                    <IconCircle>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
                            <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                        </svg>
                    </IconCircle>
                    <InfoItem>Atendimento a Empresas e Governo</InfoItem>
                </InfoGroup>
                <InfoGroup>
                    <IconCircle>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            <path d="m9 12 2 2 4-4"/>
                        </svg>
                    </IconCircle>
                    <InfoItem>Garantia em Peças e Serviços</InfoItem>
                </InfoGroup>
            </InfoBar>
        </Container>
    );
}