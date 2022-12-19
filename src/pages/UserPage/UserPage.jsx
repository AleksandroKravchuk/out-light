import { UserData } from 'components/User/UserData/UserData';
import { Logout } from 'components/User/Logout/Logout';
import { PetsData } from 'components/User/PetsData/PetsData';
import { useSelector } from 'react-redux';
import {
 useCurrentUserQuery,
} from 'redux/auth/authOperations';
import {
  Container,
  ContainerUser,
  Title,
  ContainerInfo,
  AboutUser,
} from './UserPage.styled';

const UserPage = ({ nameI = 'User', skip = true }) => {
  const isToken = useSelector(state => state.token);
  console.log(isToken)
    if (isToken !== null) {
    skip = false;
  }
 useCurrentUserQuery(nameI, { skip });
  return (
    <ContainerInfo>
      <AboutUser>
        <Title>My information:</Title>
        <Container>
          <ContainerUser>
            <UserData />
            <Logout />
          </ContainerUser>
        </Container>
      </AboutUser>
      <PetsData />
    </ContainerInfo>
  );
};

export default UserPage;
