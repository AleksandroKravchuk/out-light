import Button from 'components/Common/Button/Button';
import { Input } from 'components/Common/Input/Input';
import { ReactComponent as Cross } from 'icons/cross.svg';
import { useCreateUserPetsMutation} from 'redux/auth/authOperations';
import {
  CloseModal,
  ModalName,
  AddFileInputContainer,
  AddFileInput,
  AddFileLabelInput,
  UploadImageContainer,
  AddImageButton,
  PlusIcon,
  PetImage,
} from './ModalAddsPet.styled';
import { useState} from 'react';


const MODAL_STATE = {
  IDLE: 'idle',
  UPLOAD_IMAGE: 'uploadImage',
  DONE: 'done',
};

const AddsPet = ({ onClose }) => {
  // const token = useSelector(state => state.token);
const [createPet] = useCreateUserPetsMutation();
  // const {addPet} = response;

  const [modalState, setModalState] = useState(MODAL_STATE.IDLE);

  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [breed, setBreed] = useState('');
  const [photoPet, setPhotoPet] = useState(null);
  const [comments, setComments] = useState('');
  const [page, setPage] = useState(true);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'birth':
        setBirth(value);
        break;

      case 'breed':
        setBreed(value);
        break;

      case 'photoPet':
        setPhotoPet(e.target.files[0]);
        break;

      case 'comments':
        setComments(value);
        break;

      default:
        return;
    }
  };

          const formData = new FormData();
    formData.append('name', name);
    formData.append('birth', birth);
    formData.append('breed', breed);
    formData.append('comments', comments);
  formData.append('photoPet', photoPet);

  const handleSubmit = e => {
    e.preventDefault();
    if (page) {
      setPage(false)
    } else {
      createPet(formData);
    onClose();
    }

  };
  return (
    <>
      <CloseModal type="button" onClick={onClose}>
        <Cross width="20px" height="20px" />
      </CloseModal>

      <ModalName>Add pet</ModalName>

      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        {page? (
          <>
            <Input
              type="text"
              name="name"
              label="Name pet"
              placeholder="Type name pet"
              required
              onChange={handleChange}
            />
            <Input
              type="text"
              name="birth"
              label="Date of birth"
              placeholder="Type date of birth"
              required
              onChange={handleChange}
            />
            <Input
              type="text"
              name="breed"
              label="Breed"
              placeholder="Type breed"
              required
              onChange={handleChange}
            />
          </>
        ) :

     (
          <>
            <AddFileInputContainer>
              <AddFileLabelInput htmlFor="uploadFile">
                Add photo and some comments
              </AddFileLabelInput>
              <UploadImageContainer>
                {!photoPet ? (
                  <AddImageButton type="button">
                    <PlusIcon />
                    <AddFileInput
                      multiple
                      id="uploadFile"
                      type="file"
                      name="photoPet"
                      onChange={handleChange}
                    />
                  </AddImageButton>
                ) : null}
                {photoPet ? (
                  <PetImage src={URL.createObjectURL(photoPet)} alt={name} />
                ) : null}
              </UploadImageContainer>
            </AddFileInputContainer>

            <Input
              height="100px"
              padding="12px 14px"
              borderRadius="20px"
              as="textarea"
              name="comments"
              label="Comments"
              placeholder="Type comments"
              onChange={handleChange}
            />
          </>
        ) }
{page? <Button
          type="submit"
          content={'Next'}
          variant="primary"

        /> : <Button
          type="submit"
          content={ 'Done' }
          variant="primary"

        />}


        <Button type="button" content="Cancel" variant="inverse" />
      </form>
    </>
  );
};

export default AddsPet;
