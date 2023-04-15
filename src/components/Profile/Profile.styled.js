import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: center;
    justify-content: space-between;

    width: 300px;
    height: 400px;

    background-color: white;
    color: gray;

    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 5px;

    -webkit-box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);
    -moz-box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);
    box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);

    h2, h3{
        color: steelblue;
    }
`;

export const AvatarContainer = styled.div`
    width: 150px;
    height: 150px;

    margin: 12px auto;

    padding: 5px;

    border-radius: 50%;

    background-color: lightgray;

    img{
        width: fit-content;
        height: auto;

        border-radius: 50%;
        object-fit: fill;
    }
`;

export const StatsList = styled.div`
    display: flex;

    border-radius: 0 0 5px 5px;
`;

export const Stats = styled.span`
    border: 1px solid lightgray;
    background-color: powderblue;
    
    width: 100px;
    height: 100px;

    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: center;
    justify-content: center;

    :first-child{
        border-radius: 0 0 0 5px;
    }

    :last-child{
        border-radius: 0 0 5px 0;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
`;