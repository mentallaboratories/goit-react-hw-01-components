import PropTypes from 'prop-types';
import { ProfileContainer, UserInfo, AvatarContainer, StatsList, Stats } from './Profile.styled';

export const Profile = ({item:{username, tag, location, avatar, stats}}) =>{
    return(
        <ProfileContainer>
            <AvatarContainer>
                <img src={avatar} alt={username} width="240"/>
            </AvatarContainer>
            <UserInfo>
                <h2>{username}</h2>
                <p>@{tag}</p>
                <p>{location}</p>
            </UserInfo>
           
            <StatsList>
                <Stats>
                    Followers <h3>{stats.followers}</h3>
                </Stats>
                <Stats>
                    Views <h3>{stats.views}</h3>
                </Stats>
                <Stats>
                    Likes <h3>{stats.likes}</h3>
                </Stats>
            </StatsList>
        </ProfileContainer>
    )
}

Profile.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
        }).isRequired,
    }).isRequired
    
}
