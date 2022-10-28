import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import SearchResults from "./SearchResults";

function SearchPage() {
    return (
        <>
            <Container>
                <div>
                    <p>62 stays .26 august to 30 august .2 guests</p>
                    <Title>Stays nearby</Title>
                    <Button
                        variant="outlined"
                        style={{ borderRadius: "30px", marginRight: "10px" }}
                    >
                        Cancellation Flexibility
                    </Button>
                    <Button
                        variant="outlined"
                        style={{ borderRadius: "30px", marginRight: "10px" }}
                    >
                        Type of place
                    </Button>
                    <Button
                        variant="outlined"
                        style={{ borderRadius: "30px", marginRight: "10px" }}
                    >
                        Price
                    </Button>
                    <Button
                        variant="outlined"
                        style={{ borderRadius: "30px", marginRight: "10px" }}
                    >
                        Rooms & beds
                    </Button>
                    <Button variant="outlined" style={{ borderRadius: "30px" }}>
                        More Filters
                    </Button>
                </div>
                <SearchResults />
            </Container>
        </>
    );
}

export default SearchPage;
const Container = styled.div`
    padding: 20px;
    p {
        margin-bottom: 10px;
        font-size: 16px;
    }
`;
const Title = styled.h1`
    margin-bottom: 30px;
`;
