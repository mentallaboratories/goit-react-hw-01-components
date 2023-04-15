import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({items})=>{
    return(
        <List>
            {items.map((item)=>(
                <li key = {item.id}><FriendListItem item = {item}/></li>
            ))}
        </List>
    );
};

FriendList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })
    ).isRequired,
}