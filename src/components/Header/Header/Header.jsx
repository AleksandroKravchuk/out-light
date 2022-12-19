import AuthNav from 'components/Header/AuthUserNav/AuthNav';
import UserNav from 'components/Header/AuthUserNav/UserNav';
import Logo from 'components/Header/Logo/Logo';
import { Nav } from 'components/Header/Nav/Nav'
import { useState, useEffect } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { AuthUserContainer, Button, MobileMenu, StyledHeader } from './Header.styled';

const Header = () => {

  const user = useSelector(state => state.auth.isLoggedIn)
  const [shown, setShown] = useState(false);

  const toggleUser = () => {
    setShown(!shown);
  };

  const handleLinkClick = (e) => {
    const { nodeName } = e.target;

    if (nodeName === 'A') {
      setShown(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleLinkClick);

    return () => document.removeEventListener('click', handleLinkClick);
  }, [shown])


  return (
    <>
      <StyledHeader>

        <Logo />

 <Nav set={shown} />
<AuthUserContainer className={shown && 'shown'}>
            {!user
              ? <AuthNav />
              : <UserNav />
            }
        </AuthUserContainer>

        <MobileMenu className={shown && 'shown'}>



        </MobileMenu>
          <Button onClick={toggleUser}>
            <TiThMenu size={36} />
          </Button>

      </StyledHeader>

    </>
  );

};

export default Header;
