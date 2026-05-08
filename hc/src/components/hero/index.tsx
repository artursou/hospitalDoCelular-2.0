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
                        <img src="/icon-experience.svg" alt="Experiência" width="28" height="28" />
                    </IconCircle>
                    <InfoItem>+27 Anos de Experiência</InfoItem>
                </InfoGroup>
                <InfoGroup>
                    <IconCircle>
                        <img src="/icon-enterprise.svg" alt="Empresas e Governo" width="28" height="28" />
                    </IconCircle>
                    <InfoItem>Atendimento a Empresas e Governo</InfoItem>
                </InfoGroup>
                <InfoGroup>
                    <IconCircle>
                        <img src="/icon-warranty.svg" alt="Garantia" width="28" height="28" />
                    </IconCircle>
                    <InfoItem>Garantia em Peças e Serviços</InfoItem>
                </InfoGroup>
            </InfoBar>
        </Container>
    );
}