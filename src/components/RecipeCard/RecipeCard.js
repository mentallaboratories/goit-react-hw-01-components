import PropTypes from 'prop-types';
import { 
    AiOutlineClockCircle, 
    AiOutlinePieChart, 
    AiOutlineBarChart 
} from 'react-icons/ai';

import {
    BiTrashAlt, 
    BiZoomIn
} from 'react-icons/bi'
import { 
    Name,
    Image,
    Meta,
    BadgeList, 
    InfoBlock, 
    RecipeInfo, 
    Badge,
    Actions
} from './RecipeCard.styled';

export const RecipeCard = ({item:{id, image, name, time, servings, calories, difficulty},
onDelete,
})=>{ 
    return(
        <div>
            <Image src={image} alt={name} width="240"/>
            <Meta>
                <Name>{name}</Name>
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
                <Actions>
                    <button aria-label="Delete" onClick={()=>onDelete(id)}>
                        <BiTrashAlt/>
                    </button>
                    <button aria-label="Zoom">
                        <BiZoomIn/> 
                    </button>
                </Actions>
            </Meta>
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