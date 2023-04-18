import styled from 'styled-components';

export const Actions = styled.div`
    max-width: 50px;
    height: 24px;
    display:flex;
    justify-content: space-between;
`;


export const Name = styled.h2`
    max-width: 250px;
    text-align: center;
`;

export const Image = styled.img`
    width: 250px;
    border-radius: ${p=>p.theme.radii.l}
`;

export const Meta = styled.div`
    width: 250px
`;

export const RecipeInfo = styled.div`
    display: flex;
    gap: 7px;
`;

export const InfoBlock = styled.p`
    display: flex;
    align-items: center;
    gap: 4px; 

    svg{
        color: red;
    }
`;

export const BadgeList = styled.div`
    display: flex;
    gap: 8px; 
`;

export const Badge = styled.span`
    padding: 8px 12px;
    border-radius: ${p=>p.theme.radii.m};
    border: 1px solid ${p=>p.theme.colors.accent};

    background-color: ${p => {
        if (!p.active){
            return p.theme.colors.white;
            }

    switch (p.type){
        case 'easy':
            return 'green';
        case 'medium':
            return 'yellow';
        case 'hard':
            return 'red';
        default:
            throw new Error(`Unknown badge type ${p.type}`)
    }
    }};

    color: ${p => {
    return p.active ? p.theme.colors.white : p.theme.colors.accent;
}};
  
`;



//Зміна стилю бейджа в залежності від стану "активний""не активний"

// export const Badge = styled.span`
//     padding: 8px 12px;
//     border-radius: ${p=>p.theme.radii.m};
//     border: 1px solid ${p=>p.theme.colors.accent};

//     background-color: ${p => {
//         return p.active ? p.theme.colors.accent : p.theme.colors.white;
//     }};

//     color: ${p => {
//         return p.active ? p.theme.colors.white : p.theme.colors.accent;
//     }};
// `;