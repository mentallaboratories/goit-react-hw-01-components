import PropTypes from 'prop-types';
import { AiOutlineClockCircle, AiOutlinePieChart, AiOutlineBarChart } from 'react-icons/ai';
import { BadgeList, InfoBlock, RecipeInfo, Badge } from './RecipeCard.styled';

export const RecipeCard = ({item:{image, name, time, servings, calories, difficulty},})=>{ 
    return(
        <div>
            <img src={image} alt={name} width="240"/>
            <h2>{name}</h2>
            <RecipeInfo>
                <InfoBlock>
                <AiOutlineClockCircle size='20'/>
                <span>{time} min</span>
                </InfoBlock>
                <InfoBlock>
                <AiOutlinePieChart size='20'/>
                <span>{servings} servings</span>
                </InfoBlock>
                <InfoBlock>
                <AiOutlineBarChart size='20'/>
                <span>{calories} calories</span>
                </InfoBlock>
            </RecipeInfo>

            <div>
                <h3>Difficulty</h3>
                <BadgeList>
                    <Badge active={difficulty === 'easy'} type='easy'>
                        Easy
                    </Badge>
                    <Badge active={difficulty === 'medium'} type='medium'>
                        Medium
                    </Badge>
                    <Badge active={difficulty === 'hard'} type='hard'>
                        Hard
                    </Badge>
                </BadgeList>
            </div>
        </div>
    );
};

RecipeCard.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        difficulty: PropTypes.oneOf(['easy','medium','hard'])
    }).isRequired
}