import React from "react";
import {
    FooterWrapper,
    FooterTop,
    ContactArea,
    ContactTitle,
    ContactRow,
    ContactItem,
    SocialRow,
    SocialLink,
    FooterBottom,
    CopyrightText,
    DevelopedByLink,
} from "./styles";

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterTop>
                <ContactArea>
                    <ContactTitle>Fale Conosco</ContactTitle>
                    <ContactRow>
                        <ContactItem>
                            <img src="/icon-phone.svg" alt="Telefone" />
                            3340-1552
                        </ContactItem>
                        <ContactItem>
                            <img src="/icon-location.svg" alt="Endereço" />
                            <a href="#">SCLN 408, Bloco E, Loja 18.</a>
                        </ContactItem>
                        <ContactItem>
                            <img src="/icon-email.svg" alt="E-mail" />
                            hospitaldocelular@uol.com.br
                        </ContactItem>
                    </ContactRow>
                </ContactArea>

                <SocialRow>
                    <SocialLink href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <img src="/icon-whatsapp.svg" alt="WhatsApp" />
                    </SocialLink>
                    <SocialLink href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <img src="/icon-instagram.svg" alt="Instagram" />
                    </SocialLink>
                    <SocialLink href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <img src="/icon-facebook.svg" alt="Facebook" />
                    </SocialLink>
                </SocialRow>
            </FooterTop>

            <FooterBottom>
                <CopyrightText>© 2026 Hospital do Celular. Todos os direitos reservados.</CopyrightText>
                <DevelopedByLink href="#" target="_blank" rel="noopener noreferrer">
                    <img src="/icon-external-link.svg" alt="" />
                    Desenvolvido por Artur Souza Santos
                </DevelopedByLink>
            </FooterBottom>
        </FooterWrapper>
    );
}
