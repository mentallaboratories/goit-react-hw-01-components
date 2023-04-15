import styled from 'styled-components';

export const ListItem = styled.div`
    padding: 5px 12px;
    width: 300px;
    height: 80px;

    display: flex;
    align-items: center;
    gap: 12px;

    background-color: white;
    border-radius: 5px;

    -webkit-box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);
    -moz-box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);
    box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);

    img{
        background-color: darkgray;
        border-radius: 5px;
        padding: 3px;

        width: 65px;
        height: 65px;

    }

    p{
        font-size: 26px;
        line-height: 1.16;
    }
`;

export const IsOnline = styled.span`
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${p => {
        return p.active ? "green" : "red";
        }};
`;