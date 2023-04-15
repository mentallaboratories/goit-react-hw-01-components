import PropTypes from 'prop-types';
import { StatisticsSection, List, ListItem, Label, Percentage } from './Statistics.styled';

export const Statistics = ({data})=>{
    return(
        <StatisticsSection>
        <h2>Upload stats</h2>

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
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })
    ).isRequired,
}