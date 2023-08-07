import PropTypes from 'prop-types'; //імпортуємо типи пропсів
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List } from './FriendList.styled'; //імпортуємо стилі списку
// створюємо глобальний компонент СписокДрузів, він буде експортуватися в App на виконання
export const FriendList = ({items})=>{
    return(
        <List>
            {items.map((item)=>(
                <li key = {item.id}><FriendListItem item = {item}/></li>
            ))}
        </List>
    );
};
//прописуються типи пропсів
FriendList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })
    ).isRequired,
}