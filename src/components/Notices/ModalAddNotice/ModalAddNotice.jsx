import React from 'react';
import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Male } from "../../../icons/male.svg";
import { ReactComponent as Female } from "../../../icons/female.svg";
import { ReactComponent as CloseCross } from "../../../icons/cross.svg";
import { useCreateNoticeMutation} from 'redux/auth/authOperations';
// import { ReactComponent as DefaultCross } from "../../../icons/default-cross.svg";
import { Input, Label, Form, Container, Title, P, Span, ButtonCategory, ButtonsCategoryContainer, ButtonsSubmitColor, ButtonsSubmitWhite, ButtonsSubmitContainer, ButtonsSexPet, ButtonsSexPetContainer, Textarea, InputFile, SpanSexPet, CloseButton } from "./ModalAddNotice.styled";
import styled from 'styled-components';

const MaleSvg = styled(Male)`
    @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    }
`;

const FemaleSvg = styled(Female)`
    @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    }
`;

const CloseCrossIcon = styled(CloseCross)`
width: 15px;
height: 15px;

@media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    }
`;

const ModalAddNotice = ({onClose}) => {
const token = useSelector(state => state.token);
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

  const body = {
    title,petName,birth,breed, category, comments,sex,location,price
  }
  console.log(body )
    // const handleSubmit = e => {
    //     // e.preventDefault();
    //     // if (modalState === MODAL_STATE.IDLE) {
    //     //     return setModalState(MODAL_STATE.UPLOAD_IMAGE);
    //     // }
    //     // if (modalState === MODAL_STATE.UPLOAD_IMAGE) {
    //     //     return setModalState(MODAL_STATE.DONE);
    //     // }
    // };
  const handleAddInfo = e => {
      if (title === '' ||petName === ''||birth === ''||breed === '' ) {
      return Notiflix.Notify.failure('All fields must be filled');
    }
    if (category=== '' ) {
      return Notiflix.Notify.failure(
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
    createNotice(formData)
  }
  //  const reset = () => {
  //   setTitle('');
  //    setPetName('');
  //    setBirth('');
  //    setBreed('');
  //    setCategory('');
  // };
    // useEffect(() => {
    //     // if (modalState === MODAL_STATE.DONE) {
    //     //     addPet({ name: title, petName, birth, breed, category, comments, sex, location, price, photoPet }, token)
    //     //     onClose();
    //     // }
    // }, [modalState, title, petName, birth, breed, category, comments, sex, location, price, photoPet, token, onClose]);

    // const selectFile = e => {
    //     setPhotoPet(e.target.files[0]);
    // };

    return (
        <>
            <Container>
                <CloseButton type="button" onClick={onClose}>
                    <CloseCrossIcon/>
            </CloseButton>
                    <Title>Add pet</Title>
                    <P>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</P>
            {page ? (
                <Form onSubmit={handleAddInfo}>
                <ButtonsCategoryContainer>
                    <ButtonCategory type="button" onClick={()=>setCategory('lost-found')}>lost/found</ButtonCategory>
                    <ButtonCategory type="button" onClick={()=>setCategory('In good hands')}>In good hands</ButtonCategory>
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
                            <ButtonsSexPet type="button" onClick={()=>setSex('Male')}> <MaleSvg /> <SpanSexPet>Male</SpanSexPet></ButtonsSexPet>
                            <ButtonsSexPet type="button" onClick={()=>setSex('Female')}> <FemaleSvg/> <SpanSexPet>Female</SpanSexPet></ButtonsSexPet>
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
                        <InputFile   multiple
                      id="uploadFile"
                      type="file"
                      name="photoPet"
                      onChange={handleChange}/>
                        {/* <DefaultCross width="47.33" height="47.33" /> */}
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
