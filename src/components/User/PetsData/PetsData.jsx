import { useState, useEffect } from 'react';
import { useGetUserPetsQuery } from 'redux/auth/authOperations';
import { PetsList } from 'components/User/PetsList/PetsList';
import Modal from 'components/Modal/Modal';
import ModalAddsPet from 'components/User/ModalAddsPet/ModalAddsPet';
import add from 'icons/addPet.svg';
import { Title } from 'pages/UserPage/UserPage.styled';
import { Container, AddBtn, ContainerTitle } from './PetsData.styled';

export const PetsData = () => {
  const [openModal, setOpenModal] = useState(false);
  const [pets, setPets] = useState([]);
  const { data, getUserPets } = useGetUserPetsQuery();

  useEffect(() => {
    if (!data) {
  return
}
setPets(data.data.pets);
  }, [data]);

  const handleBtnClick = () => setOpenModal(!openModal);

  return (
    <Container>
      <ContainerTitle>
        <Title>My pets:</Title>
        <Title>
          Add pet
          <AddBtn type="button" onClick={handleBtnClick}>
            <img src={add} alt="addPet" />
          </AddBtn>
        </Title>
      </ContainerTitle>
      <PetsList pets={pets} />
      {openModal && (
        <Modal onClose={handleBtnClick}>
          <ModalAddsPet onClose={handleBtnClick} />
        </Modal>
      )}
    </Container>
  );
};
