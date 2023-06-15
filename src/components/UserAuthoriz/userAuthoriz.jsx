import { useDispatch, useSelector } from 'react-redux';
import {LogoutBtn, Avatar, LogoutContainer} from './userAithoriz.styled'
import { logoutUser } from 'store/operations';

function UserAuthoriz() {
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const handleLogout = () => { 
    dispatch( logoutUser())
  }

  return (
    <LogoutContainer>
      <Avatar
        src={'https://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/256/Office-Girl-icon.png'}
        alt="default user"
        width="35px"
        height="35px"
      />
      <p>{userName}</p>
      <LogoutBtn type="button" onClick={handleLogout} >Log out</LogoutBtn>
    </LogoutContainer>
  );
}

export default UserAuthoriz;