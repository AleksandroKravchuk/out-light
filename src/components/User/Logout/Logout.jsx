import logout from 'icons/logout.svg';
import {  useNavigate } from 'react-router-dom';
import { LogoutBtn } from './Logout.styled';
import { useLogOutUserMutation } from 'redux/auth/authOperations';


export const Logout = () => {
  const navigate = useNavigate();
  const [logoutUser] = useLogOutUserMutation();
 const handleClick = () => {
   logoutUser();
    navigate('/', { replace: true });
  }

  return (
    <LogoutBtn type="button" onClick={handleClick}>
      <img src={logout} alt="logout" />
      Log Out
    </LogoutBtn>
  );
};
