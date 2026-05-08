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
                            <a href="https://www.google.com/maps/dir//Hospital+do+Celular,+Asa+Norte+CLN+408,+BL+E+LJ+18+-+Asa+Norte,+Bras%C3%ADlia+-+DF,+70856-550/@-10.2006784,-48.3623836,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x935a3bca70577de7:0x19f56ef99aa5fc65!2m2!1d-47.8790549!2d-15.7598398?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">SCLN 408, Bloco E, Loja 18.</a>
                        </ContactItem>
                        <ContactItem>
                            <img src="/icon-email.svg" alt="E-mail" />
                            hospitaldocelular@uol.com.br
                        </ContactItem>
                    </ContactRow>
                </ContactArea>

                <SocialRow>
                    <SocialLink href="https://api.whatsapp.com/send?phone=5561993681910" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <img src="/icon-whatsapp.svg" alt="WhatsApp" />
                    </SocialLink>
                    <SocialLink href="https://www.instagram.com/hospitaldocelulardf/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <img src="/icon-instagram.svg" alt="Instagram" />
                    </SocialLink>
                    <SocialLink href="https://www.facebook.com/hospitaldocelulardf/?locale=pt_BR" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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
