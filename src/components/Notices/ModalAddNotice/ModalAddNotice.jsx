import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import { ReactComponent as Male } from "../../../icons/male.svg";
import { ReactComponent as Female } from "../../../icons/female.svg";
import { ReactComponent as CloseCross } from "../../../icons/cross.svg";
import { useCreateNoticeMutation} from 'redux/auth/authOperations';
import {
  Input, Label, Form, Container, Title, P,
  Span, ButtonCategory, ButtonsCategoryContainer,
  ButtonsSubmitColor, ButtonsSubmitWhite, ButtonsSubmitContainer,
  ButtonsSexPet, ButtonsSexPetContainer,
  Textarea, SpanSexPet, CloseButton,
  AddFileInput,
  UploadImageContainer,
  AddImageButton,
  PlusIcon,
  PetImage,
  MaleSvg,
FemaleSvg,CloseCrossIcon} from "./ModalAddNotice.styled";


const ModalAddNotice = ({onClose}) => {

const [createNotice] = useCreateNoticeMutation();
    const [page, setPage] = useState(true);
    const [title, setTitle] = useState('');
    const [petName, setPetName] = useState('');
    const [birth, setBirth] = useState('');
    const [breed, setBreed] = useState('');
    const [category, setCategory] = useState('');
    const [comments, setComments] = useState('');
    const [sex, setSex] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('0');
    const [photoPet, setPhotoPet] = useState(null);

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'petName':
                setPetName(value);
                break;
            case 'birth':
                setBirth(value);
                break;
            case 'breed':
                setBreed(value);
                break;
            case 'comments':
                setComments(value);
                break;
            case 'location':
                setLocation(value);
                break;
            case 'price':
                setPrice(value);
                break;
            case 'photoPet':
                 setPhotoPet(e.target.files[0]);
                break;
            default:
                return;
        }
    };

  const handleAddInfo = e => {
     e.preventDefault();
      if (title === '' ||petName === ''||birth === ''||breed === '' ) {
      return Notify.failure('All fields must be filled');
    }
    if (category=== '' ) {
      return Notify.failure(
        'Please, select a category'
      );
    }
  setPage(false)
  }

    const formData = new FormData();
  formData.append('name', petName);
  formData.append('category', category);
  formData.append('price', price);
  formData.append('birth', birth);
  formData.append('title', title);
  formData.append('sex', sex);
  formData.append('location', location);
  formData.append('breed', breed);
  formData.append('comments', comments);
  formData.append('photoNotices', photoPet);
  const submitForm = e => {
     e.preventDefault();
      if (location === '' ||photoPet===null||comments==='' ) {
      return Notify.failure('All fields must be filled');
      }
         if (sex === '' ) {
      return Notify.failure('Please choose sex');
    }
    createNotice(formData);
    onClose();
  }

    return (
        <>
            <Container>
                <CloseButton type="button" onClick={onClose}>
                   <CloseCrossIcon><CloseCross/> </CloseCrossIcon>
            </CloseButton>
                    <Title>Add pet</Title>
                    <P>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</P>
            {page ? (
                <Form onSubmit={handleAddInfo}>
                <ButtonsCategoryContainer>
                    <ButtonCategory type="button" onClick={()=>setCategory('lost-found')}>lost/found</ButtonCategory>
                    <ButtonCategory type="button" onClick={()=>setCategory('in good hands')}>In good hands</ButtonCategory>
                    <ButtonCategory type="button" onClick={()=>setCategory('sell')}>sell</ButtonCategory>
                </ButtonsCategoryContainer>
                    <Label>Tittle of ad
                        <Span>*</Span>
                        <Input
                            type="text"
                            name="title"
                            value={title}
                            placeholder="Type name pet"
                            onChange={handleChange}
                            required
                        />
                    </Label>
                    <Label>Name pet
                        <Span>*</Span>
                        <Input
                            type="text"
                            name="petName"
                            value={petName}
                            placeholder="Type name pet"
                            onChange={handleChange}
                            required
                        />
                    </Label>
                    <Label>Date of birth
                        <Span>*</Span>
                        <Input
                            type="text"
                            name="birth"
                            value={birth}
                            placeholder="Type date of birth"
                            onChange={handleChange}
                            required
                        />
                    </Label>
                    <Label>Breed
                        <Span>*</Span>
                        <Input
                            type="text"
                            name="breed"
                            value={breed}
                            placeholder="Type breed"
                            onChange={handleChange}
                            required
                        />
                    </Label>

                    <ButtonsSubmitContainer>
                        < ButtonsSubmitColor type="button" onClick={handleAddInfo }>Next</ ButtonsSubmitColor>
                        < ButtonsSubmitWhite type="button" onClick={()=>onClose()}>Cancel</ ButtonsSubmitWhite>
                    </ButtonsSubmitContainer>
            </Form>) : (<Form>

               <Label>The sex<Span>*</Span>:
                        <ButtonsSexPetContainer>
                            <ButtonsSexPet type="button" onClick={()=>setSex('male')}> <MaleSvg><Male/></MaleSvg> <SpanSexPet>Male</SpanSexPet></ButtonsSexPet>
                            <ButtonsSexPet type="button" onClick={()=>setSex('female')}> <FemaleSvg><Female></Female></FemaleSvg> <SpanSexPet>Female</SpanSexPet></ButtonsSexPet>
                        </ButtonsSexPetContainer>
                    </Label>

                    <Label>Location<Span>*</Span>:
                        <Input
                            type="text"
                            name="location"
                            value={location}
                            placeholder="Type location"
                            onChange={handleChange}
                            required
                            />
              </Label>
              {category==="sell"&&<Label>Price<Span>*</Span>:
                        <Input
                            type="text"
                            name="price"
                            value={price}
                            // placeholder="Type date of birth"
                            onChange={handleChange}
                            required    />
                    </Label>}

              <Label>Load the pet’s image<Span>*</Span>:
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
                  <PetImage src={URL.createObjectURL(photoPet)} alt={petName} />
                ) : null}
              </UploadImageContainer>

                    </Label>
                    <Label>Comments<Span>*</Span>:
                                <Textarea
                                    name="comments"
                                    value={comments} placeholder="Type comment" onChange={handleChange}
                                    required></Textarea>
                    </Label>
                    <ButtonsSubmitContainer>
                        < ButtonsSubmitColor type="submit" onClick={submitForm}>Done</ ButtonsSubmitColor>
                        < ButtonsSubmitWhite type="button" onClick={()=>setPage(true)}>Back</ ButtonsSubmitWhite>
                            </ButtonsSubmitContainer>
                        </Form>)
                   }
            </Container>
        </>
    );
};

export default ModalAddNotice;
