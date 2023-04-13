import styled from 'styled-components';

const Container = styled.div`
margin: 0 auto;
padding: 0 16px;
`;

export const Layout = ({children}) => {
    return (
    <Container>
        {children}
    </Container>
    );
};