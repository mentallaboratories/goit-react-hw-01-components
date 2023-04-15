import styled from 'styled-components';

export const StatisticsSection = styled.section`
display: flex;
flex-direction: column;
gap: 3px;
align-items: center;
justify-content: space-between;

width: 300px;
height: 150px;

background-color: white;
color: gray;

margin: 0 auto;
border-radius: 0 0 5px 5px;

-webkit-box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);
-moz-box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);
box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);

h2{
    color: steelblue;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;