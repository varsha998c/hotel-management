import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "../includes/Search";

function Banner() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <>
            <BannerSearch>
                {showSearch && <Search />}
                <Buttons
                    className="searchButton"
                    onClick={() => setShowSearch(!showSearch)}
                >
                    Search Dates
                </Buttons>
            </BannerSearch>
            <Container>
                <Section className="banner_info">
                    <Text>Get out and stretch your imagination</Text>
                    <Description>
                        Plan a different kind of gateway to uncover the hidden
                        gems near you.
                    </Description>
                    <Button to="/search">Explore nearby</Button>
                </Section>
            </Container>
        </>
    );
}

export default Banner;
const Container = styled.div`
    width: 100%;
    padding: 10px;
    height: 60vh;
    position: relative;
    background: url("https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg");
    background-position: center;
`;
const Section = styled.div`
    &.banner_info {
        background-color: #000;
        color: #fff;
        top: 0;
        left: 0;
        position: absolute;
        width: 350px;
        padding-top: 25vh;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 40px;
    }
`;
const Text = styled.h1`
    font-size: 22px;
    margin-bottom: 14px;
    font-family: gordita_regular;
`;
const Description = styled.h5`
    margin-bottom: 20px;
    font-family: gordita_regular;
`;
const Button = styled(Link)`
    cursor: pointer;
    background-color: #ff7779;
    color: #fff;
    font-family: gordita_medium;
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
`;
const Buttons = styled.a`
    background-color: #fff !important;
    text-transform: capitalize !important;
    color: #ff7779 !important;
    text-align: center;
    cursor: pointer;
    cursor: pointer;
`;
const BannerSearch = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0;
`;
