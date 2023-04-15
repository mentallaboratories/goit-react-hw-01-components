import PropTypes from 'prop-types';
import { StatisticsSection } from './Statistics.styled';

export const Statistics = ({data:{id,label,percentage}})=>{
    return(
        <StatisticsSection>
            <h2>Upload stats</h2>

<ul class="stat-list">
  <li class="item">
    <span class="label">.docx</span>
    <span class="percentage">4%</span>
  </li>
  <li class="item">
    <span class="label">.mp3</span>
    <span class="percentage">14%</span>
  </li>
  <li class="item">
    <span class="label">.pdf</span>
    <span class="percentage">41%</span>
  </li>
  <li class="item">
    <span class="label">.mp4</span>
    <span class="percentage">12%</span>
  </li>
</ul>
        </StatisticsSection>
    )
}

Statistics.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })
}