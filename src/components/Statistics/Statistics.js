import PropTypes from 'prop-types';
import { StatisticsSection } from './Statistics.styled';

export const Statistics = ({data:{id,label,percentage}})=>{
    return(
        <StatisticsSection>
            <h2>Upload stats</h2>

<ul>
  <li>
    <span>.docx</span>
    <span>4%</span>
  </li>
  <li>
    <span>.mp3</span>
    <span>14%</span>
  </li>
  <li>
    <span>.pdf</span>
    <span>41%</span>
  </li>
  <li>
    <span>.mp4</span>
    <span>12%</span>
  </li>
</ul>
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