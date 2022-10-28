import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <Container>
            <p>@2020 Airbnb clone! No rights reserved - this is a demo!</p>
            <Paragraph>Privacy . Terms .Sitemap .Company Details</Paragraph>
        </Container>
    );
}

export default Footer;
const Container = styled.div`
    border-top: 1px solid lightgray;
    padding: 20px;
    background-color: #f7f7f7;
    text-align: center;
    p {
        padding: 5px;
        font-size: 14px;
    }
`;
const Paragraph = styled.p``;
