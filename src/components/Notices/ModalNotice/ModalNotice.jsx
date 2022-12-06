import { ReactComponent as AddIcon } from "icons/add.svg";
import { useSelector } from "react-redux";
// import { ReactComponent as RemoveIcon } from "icons/remove.svg";
import { GrClose } from 'react-icons/gr';
import { IconContext } from "react-icons";
import {
    Container, InfoContainer, Info, Key,
    Value, Description, Photo, Li, BtnAddName,
    CardImageContainer, Category, ButtonAdd, ButtonCall,
    Title, Comments, Span, ButtonGroup, CloseModal
} from './ModalNotice.styled.jsx';



export const ModalNotice = ({ notice, onClose,onAddFavoriteBtnClick,errorAdd}) => {
  let photos;
   const userId = useSelector(state => state.auth.id);
 const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const { title, name, birth, breed,
        location, sex, price,
        category, comments, owner,
    } = notice;

    if (notice.photo) {
    // photo= notice.photo;
    photos = `https://out-light.herokuapp.com/${notice.photo}`

  } else {
    photos =
      'https://t4.ftcdn.net/jpg/03/08/68/19/360_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg';
  }

    return (
        <>
            <Container>
                <CloseModal type="button" onClick={onClose}>
                    <IconContext.Provider value={{ size: '20px' }}>
                        <GrClose/>
                    </IconContext.Provider>
                </CloseModal>
                <Description>
                    <CardImageContainer>
                        <Photo src={photos} alt={name} />
                        <Category>{category}</Category>
                    </CardImageContainer>
                    <InfoContainer>
                        <Title>{title}</Title>
                        <Info>
                            <Li><Key>Name:</Key><Value>{name}</Value></Li>
                            <Li><Key>Birthday:</Key><Value>{birth}</Value></Li>
                            <Li><Key>Breed:</Key><Value>{breed}</Value></Li>
                            <Li><Key>Place:</Key><Value>{location}</Value></Li>
                            <Li><Key>The sex:</Key><Value>{sex}</Value></Li>
                            <Li><Key>Email:</Key><Value>{owner.email}</Value></Li>
                            <Li><Key>Phone:</Key><Value>{owner.phone}</Value></Li>
                            {category === 'sell' ? <Li><Key>Price:</Key><Value>{price}</Value></Li>:null}
                        </Info>
                    </InfoContainer>
                </Description>
                <Comments><Span>Comments:</Span>{comments} </Comments>
                <ButtonGroup>

            {isLoggedIn ? (<ButtonAdd type="button"className={notice.favorite?.includes(userId) && 'remove'} onClick={onAddFavoriteBtnClick}><BtnAddName
              >{notice.favorite?.includes(userId) ? 'Remove from':'Add to'} </BtnAddName><AddIcon width="24" height="22" /></ButtonAdd>)
                : (<ButtonAdd type="button" onClick={errorAdd}><BtnAddName >Add to </BtnAddName><AddIcon width="24" height="22" /></ButtonAdd>)}
                        {/* <BtnAddName>Add to</BtnAddName> <AddIcon width="24" height="22" /> */}

                    <ButtonCall href="owner.phone">Contact</ButtonCall>
                </ButtonGroup>
            </Container>
        </>
    )
};

  // {isLoggedIn ? (<AddToFavoriteBtn onClick={handleBtnClick} className={notice.favorite?.includes(userId) && 'remove'}>
  //                 <AddIcon width="24" height="22" />
  //               </AddToFavoriteBtn>):(<AddToFavoriteBtn onClick={errorAdd} >
  //                   <AddIcon width="24" height="22"  />
  //               </AddToFavoriteBtn>)}
