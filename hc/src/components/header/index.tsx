import React from "react";
import { Container, Row, TextContainer, ImgLogo, Text } from "./styles";

export default function Login() {
    return (
        <Container>
            <Row>
                <ImgLogo src="/logo.svg" alt="Logo" />
                <TextContainer>
                    <Text>Home</Text>
                    <Text>Quem Somos</Text>
                    <Text>Nossos Serviços</Text>
                    <Text>Solicitar Orçamento</Text>
                    <Text>Contato</Text>
                </TextContainer>
            </Row>
        </Container>
    );
}