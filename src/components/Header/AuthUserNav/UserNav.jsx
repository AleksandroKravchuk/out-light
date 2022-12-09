import { StyledColoredLink, StyledSpan } from "./AuthUserNav.styled";
import accountIcon from 'icons/Vector.svg';
import { useSelector } from "react-redux";

const UserNav = () => {
  const photo = useSelector(state => state.auth.photo);
  const name= useSelector(state => state.auth.name);
  return (
        <StyledColoredLink to={'/user'}>
      <StyledSpan>
        {photo?<img src={photo} alt="account icon" />:<img src={accountIcon} alt="account icon" />}

      </StyledSpan>
      {name?`${name}`:"Account"}

        </StyledColoredLink>
    )
}

export default UserNav;
