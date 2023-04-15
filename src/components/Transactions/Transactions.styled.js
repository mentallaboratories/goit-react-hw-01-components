import styled from "styled-components";

export const Table = styled.table`
    width: 800px;
    
    margin: 0 auto;
    border-collapse: collapse;
    border-radius: 5px;

    tr{
        height: 45px;
    };

    thead tr{
        background-color: steelblue;
        color: white;
        text-transform: uppercase;
    };

    

    
`;

export const Transaction = styled.tbody`
    background-color: white;
    color: gray;
    tr:nth-child(2n){
        background-color: lightgray;
    };
    tr{
        text-align: center;
    };

    tr:nth-child(2){
        border-right: 1px solid lightgray;
        border-left: 1px solid lightgray;
    };
`;