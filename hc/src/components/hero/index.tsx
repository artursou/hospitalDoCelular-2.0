import React from "react";
import { Container, Text, TextBox, ButtonContainer, InfoBar, InfoItem, InfoImg } from "./styles";
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

                <ButtonContainer>
                    <Button title="Fazer Orçamento" />
                </ButtonContainer>
            </TextBox>

            <InfoBar>
                <InfoImg src="/info27.svg" alt="infocard" />
                <InfoItem>+27 Anos de Experiência</InfoItem>
                <InfoItem>Atendimento a Empresas e Governo</InfoItem>
                <InfoItem>Garantia em Peças e Serviços</InfoItem>
            </InfoBar>
        </Container>
    );
}