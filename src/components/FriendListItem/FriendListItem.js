import PropTypes from 'prop-types';
import { ListItem, IsOnline } from './FriendListItem.styled';

export const FriendListItem = ({item:{avatar,name,isOnline,id}})=>{
    return(
        <ListItem>
            <IsOnline active={isOnline === true}></IsOnline>
            <img src={avatar} alt="{name} avatar" width="48" />
            <p>{name}</p>
        </ListItem>
    );
};

FriendListItem.propTypes = {
    item: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })
}