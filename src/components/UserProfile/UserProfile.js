import PropTypes from 'prop-types';
import icons from 'icon.svg';
import { ProfileContainer, UserInfo, GuideContainer, ITProc, ITProcList} from './UserProfile.styled';



export const UserProfile = ({item:{username, status, avatar, login, pass, email, phone, address}}) =>{
    
    const Icon = ({icon})=>(
        <div>
            <svg width='50' height='50'>
            <use href={`${icons}#icon-${icon}`}/>
        </svg>
        </div>
        
        
        )
    return(
        <ProfileContainer>
            <ITProcList>
                <ITProc>
                    <Icon icon="input"></Icon>
                    <h4>Get the information</h4> <code>'input'</code>
                </ITProc>
                <ITProc>
                    <Icon icon="processing"></Icon>
                    <h4>Prosess it</h4> <code>'run'</code>
                </ITProc>
                <ITProc>
                    <Icon icon="output"></Icon>
                    <h4>Share it</h4> <code>'output'</code>
                </ITProc>
             
                
            </ITProcList>
            <GuideContainer>

            
            <svg width='300px' height='300px'>
                <use href={`${icons}#icon-speech-bulb`}/>
            </svg>
            <svg width='100px' height='100px'>
                <use href={`${icons}#icon-avaAlice`}/>
            </svg>
        
                {/* <img src={avatar} alt={username} width="240"/> */}
            </GuideContainer>
            <UserInfo>
            
                <code>parameter: value;</code>
                <p>username: {username};</p>
                <p>login: {login};</p>
                <p>password: {pass};</p>
                <p>email: {email};</p>
                <p>phone: {phone};</p>
            </UserInfo>
           
            
        
        </ProfileContainer>
    )
}

UserProfile.propTypes = {
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
