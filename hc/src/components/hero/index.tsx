import React from "react";
import { Container, Row, Text, TextBox, ButtonContainer } from "./styles";
import Button from "../button";

export default function Hero() {
    return (
        <Container>
            <TextBox>
                <h1>Pioneirismo e Precisão no Reparo do seu Smartphone.</h1>
                <Text>Há mais de 27 anos, o Hospital do Celular é a referência em Brasília para consertos seguros, rápidos e com garantia. Da troca de tela a reparos avançados em placas.</Text>
                
            </TextBox>
            <ButtonContainer>
                <Button title="Fazer Orçamento" />
            </ButtonContainer>
        </Container>
    );
}