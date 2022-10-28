import React, { useState } from "react";
import styled from "styled-components";

function Cards() {
    const [item, setItem] = useState([
        {
            id: 1,
            src: "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",
            title: "Online Experiences",
            description:
                "Unique activities we can do together, led bt a world of hosts.",
        },
        {
            id: 2,
            src: "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",
            title: "Online Experiences",
            description:
                "Unique activities we can do together, led bt a world of hosts.",
        },
        {
            id: 3,
            src: "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",
            title: "Online Experiences",
            description:
                "Unique activities we can do together, led bt a world of hosts.",
        },
        {
            id: 4,
            src: "https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",
            title: "Online Experiences",
            description:
                "Unique activities we can do together, led bt a world of hosts.",
            price: "350/night",
        },
        {
            id: 5,
            src: "https://media.nomadicmatt.com/2018/apartment.jpg",
            title: "Online Experiences",
            description:
                "Unique activities we can do together, led bt a world of hosts.",
            price: "390/night",
        },
        {
            id: 6,
            src: "https://media.nomadicmatt.com/2018/apartment.jpg",
            title: "Online Experiences",
            description:
                "Unique activities we can do together, led bt a world of hosts.",
            price: "320/night",
        },
        {
            id: 7,
            src: "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",
            title: "Online Experiences",
            description:
                "Unique activities we can do together, led bt a world of hosts.",
        },
        {
            id: 8,
            src: "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",
            title: "Online Experiences",
            description:
                "Unique activities we can do together, led bt a world of hosts.",
        },
        {
            id: 9,
            src: "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",
            title: "Online Experiences",
            description:
                "Unique activities we can do together, led bt a world of hosts.",
        },
    ]);
    return (
        <>
            {item.map((data) => (
                <Container>
                    <ImgContainer>
                        <Image src={data.src} alt="image" />
                    </ImgContainer>
                    <CardInfo>
                        <Title>{data.title}</Title>
                        <Description>{data.description}</Description>
                        <Price>{data.price}</Price>
                    </CardInfo>
                </Container>
            ))}
        </>
    );
}

export default Cards;
const Container = styled.div`
    box-shadow: 9px 8px 13px #777;
    transition: transform 100ms ease-in;
    border-radius: 10px;
    width: 90%;
    margin: 40px auto 30px;
    cursor: pointer;
    overflow: hidden;
    &:hover {
        transform: scale(1.02);
    }
`;
const ImgContainer = styled.div`
    object-fit: fill;
    min-width: 300px;
    max-height: 350px;
    overflow: hidden;
`;
const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
`;
const CardInfo = styled.div`
    padding: 20px;
    border: 1;
`;
const Title = styled.h2`
    font-size: 18px;
    font-family: gordita_regular;
`;
const Description = styled.p`
    margin-top: 8px;
    font-size: 14px;
    font-family: gordita_regular;
`;
const Price = styled.h3``;
