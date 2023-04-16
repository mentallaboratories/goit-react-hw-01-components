import PropTypes from 'prop-types';
import { StatisticsSection, List, ListItem, Label, Percentage, Title } from './Statistics.styled';

export const Statistics = ({title, data})=>{
    return(
        <StatisticsSection>
        <Title>{ title ? title :"Upload stats"}</Title>

        <List>
            {data.map((item ) => (
                <ListItem key = {item.id}>
                     <Label>{item.label}</Label>
                    <Percentage>{item.percentage}%</Percentage> 
                </ListItem>
            ))} 
        </List>
        </StatisticsSection>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })
    ).isRequired,
}