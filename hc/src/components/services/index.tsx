import React from "react";
import {
    Section,
    CardsGrid,
    CardWrapper,
    Card,
    CardFront,
    CardBack,
    PlusButton,
    CardTitle,
} from "./styles";
import { ServiceCardData } from "./types";

const cards: ServiceCardData[] = [
    {
        icon: "/icon-hardware.svg",
        title: "Reparo de Hardware",
        description:
            "Troca de telas quebradas, substituição de baterias viciadas, conserto de conectores de carga, botões e reparos avançados em placas-mãe (microsolda). Utilizamos apenas peças de alta durabilidade com garantia atestada pela nossa equipe.",
    },
    {
        icon: "/icon-software.svg",
        title: "Software e Sistema",
        description: "Realizamos atualizações de sistema operacional, formatação segura, recuperação de aparelhos travados na tela inicial (loop infinito) e auxílio em backup de dados. Tudo feito com o máximo de respeito à privacidade das suas informações.",
    },
    {
        icon: "/icon-b2b.svg",
        title: "Empresas e Governo (B2B)",
        description: "Planos de manutenção exclusivos para empresas e órgãos governamentais. Oferecemos agilidade no diagnóstico, faturamento facilitado e a confiança de quem está há mais de 27 anos no mercado sendo referência em Brasília.",
    },
    {
        icon: "/icon-accessories.svg",
        title: "Acessórios e Seminovos",
        description: "Amplo catálogo de películas de proteção (vidro, gel, privacidade), capas anti-impacto, carregadores turbo e cabos originais. Além disso, compramos e vendemos smartphones seminovos, rigorosamente revisados e com garantia da loja.",
    },
];

export default function Services() {
    return (
        <Section>
            <CardsGrid>
                {cards.map((card, index) => (
                    <CardWrapper key={index}>
                        <Card>
                            <CardFront>
                                <PlusButton>+</PlusButton>
                                <img src={card.icon} alt={card.title} />
                                <CardTitle>{card.title}</CardTitle>
                            </CardFront>
                            <CardBack>
                                {card.description}
                            </CardBack>
                        </Card>
                    </CardWrapper>
                ))}
            </CardsGrid>
        </Section>
    );
}
