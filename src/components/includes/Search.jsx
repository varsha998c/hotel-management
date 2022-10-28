import React, { useState } from "react";
import styled from "styled-components";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { BsPeople } from "react-icons/bs";

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <Searchs>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <Title>
                Number of guests
                <BsPeople />
            </Title>
            <Input min={0} defaultValue={2} type="number" />
            <Button>Search Airbnb</Button>
        </Searchs>
    );
}

export default Search;
const Searchs = styled.div`
    position: absolute;
    top: 18%;
    left: 25%;
    z-index: 1;
    width: 55vw;
`;
const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 558px;
    padding: 10px;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 340px;
`;
const Input = styled.input`
    width: 558px;
    padding: 20px;
    position: absolute;
    left: 0;
    height: 30px;
    top: 390px;
    border: none;
    &:focus {
        outline-width: 0;
    }
`;
const Button = styled.div`
    position: absolute;
    left: 0;
    top: 430px;
    text-transform: capitalize;
    background-color: #ff7779;
    color: #fff;
    text-align: center;
    width: 558px;
    padding: 7px;
    cursor: pointer;
    &:hover {
        background-color: #fff;
        color: #ff7779;
    }
`;
