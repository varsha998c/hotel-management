import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Cards from "../includes/Cards";

function Home() {
    return (
        <Container>
            <Section>
                <Cards />
            </Section>
        </Container>
    );
}

export default Home;
const Container = styled.div``;
const Section = styled.div`
    width: 90%;
    margin: 30px auto;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 15px;
`;
