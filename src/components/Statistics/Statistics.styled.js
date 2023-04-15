import styled from 'styled-components';

export const StatisticsSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;

width: 300px;
height: 160px;

background-color: white;
color: gray;

margin: 0 auto 20px auto;
border-radius: 0 0 5px 5px;

-webkit-box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);
-moz-box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);
box-shadow: 2px 6px 5px 0px rgba(70,130,180,0.75);

h2{
    color: steelblue;
    display: flex;
    align-items: center;
    justify-content: center;

    width:100%;
    height:85px;

    text-transform: uppercase;
}
`;

export const List = styled.ul`
    width = 300px;
    height = 75px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ListItem = styled.li`
    display:none;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 75px;
    height: 75px;

    background-color: ${p=>
        {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    };

    :first-child{
        border-radius: 0 0 0 5px;
    }

    :nth-child(4){
        border-radius: 0 0 5px 0;
    }

    :nth-child(-n+4){
        display:flex;
    }
`;

export const Label = styled.span`
    color: white;
`;

export const Percentage = styled.span`
    color: white;
    font-size: 25px;
    font-weight: 600;
`;