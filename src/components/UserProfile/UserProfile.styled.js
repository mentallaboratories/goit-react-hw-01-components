import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: auto;

    background-color: rgb(243, 208, 9);
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

export const GuideContainer = styled.div`
    width: 300px;
    height: 150px;

 

    display: flex;
    flex-direction: column;
    align-items: left;
    

    svg{
        fill:white;
        width: 300px;
        height: auto;
    }

    // img{
    //     width: fit-content;
    //     height: auto;

    //     border-radius: 50%;
    //     object-fit: fill;
    // }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    h3 {
        color:rgb(32, 20, 2);  
    };
    p {
        color:rgb(122, 76, 6);
    }

`;

export const ITProcList = styled.div`
    display: flex;

    border-radius: 0 0 5px 5px;
`;

export const ITProc = styled.span`
    fill: rgb(32, 20, 2);
    :hover{
        fill: tomato;
    }

    font-size: 8px;
    line-height:1.1;
    
    width: 100px;
    height: auto;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    h4{
        display: inline-block;
        width: 50px;
        height: 50px;
        padding: 3px;
    }
    div {
        
        width: 50px;
        height: 50px;
        
        display: flex;
    
    align-items: center;
    justify-content: center;
    }

    svg {
        width: 100%;
        height: 100%;
    }

    :first-child{
        border-radius: 0 0 0 5px;
    }

    :last-child{
        border-radius: 0 0 5px 0;
    }
`;

