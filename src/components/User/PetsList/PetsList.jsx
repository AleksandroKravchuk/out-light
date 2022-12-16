import PropTypes from 'prop-types';
import remove from 'icons/remove.svg';
import { useDeleteUserPetMutation } from 'redux/auth/authOperations';
import { Item, Text, Image, DeleteBtn, DeleteSvg } from './PetsList.styled';

export const PetsList = ({ pets }) => {
  const [deleteUserPet] = useDeleteUserPetMutation();
console.log(pets)
  return (
    <ul>
      {pets.map(({ _id, photoPet, name, birth, breed, comments }) => {
        return (
          <Item key={_id}>
            <Image src={photoPet} alt={name} />
            <DeleteBtn onClick={() => deleteUserPet(_id)}>
              <DeleteSvg src={remove} alt="removePet" />
            </DeleteBtn>
            <div>
              <Text>Name:{name}</Text>
              <Text>Date of birth:{birth}</Text>
              <Text>Breed:{breed}</Text>
              <Text>Comments:{comments}</Text>
            </div>
          </Item>
        );
      })}
    </ul>
  );
};

PetsList.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      photoPet: PropTypes.string,
      name: PropTypes.string,
      birth: PropTypes.string,
      breed: PropTypes.string,
      comments: PropTypes.string,
    })
  ),
};
