import React, { useState } from "react";
import styled from "styled-components";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

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
        </Searchs>
    );
}

export default Search;
const Searchs = styled.div`
    position: absolute;
    top: 18%;
    left: 25%;
    z-index: 1;
    width: 75vw;
`;
