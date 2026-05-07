import React from "react";
import { Container, Row, ImgLogo } from "./styles";

export default function Login() {
    return (
        <Container>
            <Row>
                <ImgLogo src="/logo.svg" alt="Logo" />
            </Row>
        </Container>
    );
}