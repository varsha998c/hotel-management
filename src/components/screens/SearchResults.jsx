import React from "react";
import styled from "styled-components";

function SearchResults({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return <Container>
        <Left>
            <Img src={} alt="image"/>
        </Left>
        <Right>
            <SubTitle></SubTitle>
            <Title></Title>
            <Paragraph></Paragraph>
            <Bottom>
                <Div>
                <Star src={} alt="star" />
                <Span>
                </Span>
                </Div>
            </Bottom>
        </Right>
    </Container>;
}

export default SearchResults;
const Container = styled.div``;
