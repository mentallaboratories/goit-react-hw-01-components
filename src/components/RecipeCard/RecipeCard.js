import {Component} from 'react';
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
import { ImageModal } from 'components/ImageModal/ImageModal';
import { RecipeForm } from 'components/RecipeForm/RecipeForm';


export class RecipeCard extends Component {
    state = {
        selectedImg: null,
    };

    setSelectedImg = () =>{
        this.setState({selectedImg: this.props.item.image});
    };

    closeModal = () =>{
        this.setState({selectedImg: null});
    };

    render(){
        const {selectedImg} = this.state
        const {
            item:{id, image, name, time, servings, calories, difficulty},
        onDelete,
    } = this.props;
    
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
                        <button aria-label="Zoom" onClick={this.setSelectedImg}>
                            <BiZoomIn/> 
                        </button>
                    </Actions>
                </Meta>

                <RecipeForm>
                    
                </RecipeForm>

                <ImageModal
                    isOpen={selectedImg !== null}
                    onClose={this.closeModal}
                    image={selectedImg}
                />
            </div>
        );
    }
} 

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