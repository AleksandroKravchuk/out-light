import { response } from 'api';
import Notiflix from 'notiflix';
import { useSelector } from "react-redux";
import Modal from 'components/Modal/Modal';
import { ModalNotice } from 'components/Notices/ModalNotice/ModalNotice';
import { ReactComponent as AddIcon } from 'icons/add.svg';
import { ReactComponent as RemoveIcon } from 'icons/remove.svg';
import { useState } from 'react';
import {
  AddToFavoriteBtn, Button, CardDetailInfo, CardDetailsContainer,
  CardImageContainer, CardInfoContainer, Category, NoticeCategoryItemStyled, Photo, DeleteBtn, Title
} from './NoticesCategoryItem.styled';
import { useDeleteNoticeMutation } from 'redux/auth/authOperations';
import { useEffect } from 'react';

let category = '';
let photo;

export const NoticeCategoryItem = ({ notice, onClick }) => {
 const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [showModal, setShowModal] = useState(false);
  const [deleteNotice] = useDeleteNoticeMutation();
  const userId = useSelector(state => state.auth.id);
  const { addToFavorite, removeFromFavorite } = response;
  const token = useSelector(state => state.auth.token);



  const isOwner = () => {
    if (notice.owner._id === userId) {
      return true
    }
  }
  switch (notice.category) {
    case 'sell':
      category = 'Sell';
      break;
    case 'lost-found':
      category = 'Lost/found';
      break;
    case 'in good hands':
      category = 'In good hands';
      break;
    default:
      return;
  }

  if (notice.photo) {
    // photo= notice.photo;
    photo = `https://blende2.herokuapp.com/${notice.photo}`

  } else {
    photo =
      'https://t4.ftcdn.net/jpg/03/08/68/19/360_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg';
  }

  const age = () => {
  const current = new Date();
  const date = `${current.getFullYear()}`;
  const yearBirth = notice.birth.slice(6, 10);

    const year = date - yearBirth;
    if (year <= 1) {
      return'one year'
    }
    if (year >1 && year<=2) {
      return 'two years'
    }
     if (year >2 && year<=23) {
      return'three years'
     }
     else {
       return 'more three years'
    }
}

  const handleBtnClick = async id => {
    // console.log(id)
    id = notice._id;

    if (notice.favorite?.includes(userId)) {
      // console.log('remove from favorite: ', id);
      await removeFromFavorite(id, token);

      onClick();
      return;

    } else if (!token) {
      alert('please login');
      return;
    }

    await addToFavorite(id, token);
    onClick();
    }

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const errorAdd = () => {
  return Notiflix.Notify.failure('You are not authorized');
}


    return (
        <NoticeCategoryItemStyled>
            <CardImageContainer>
                <Photo src={photo} alt={notice.comments} />
          <Category>{category}</Category>
          {isLoggedIn ? (<AddToFavoriteBtn onClick={handleBtnClick} className={notice.favorite?.includes(userId) && 'remove'}>
                  <AddIcon width="24" height="22" />
                </AddToFavoriteBtn>):(<AddToFavoriteBtn onClick={errorAdd} >
                    <AddIcon width="24" height="22"  />
                </AddToFavoriteBtn>)}
{isLoggedIn && isOwner() ? <DeleteBtn onClick={() => deleteNotice(notice._id)}><RemoveIcon width="19.5" height="21" /></DeleteBtn>:null}
                  {/* // : (<RemoveFromFavoriteBtn onClick={handleBtnClick}>
                  //         <RemoveIcon width="19.5" height="21" />
                  //     </RemoveFromFavoriteBtn>) */}

            </CardImageContainer>
            <CardInfoContainer>
                <Title>{notice.title}</Title>
                <CardDetailsContainer>
                    <li>
                        <CardDetailInfo>Breed:</CardDetailInfo>
                        <CardDetailInfo>Place:</CardDetailInfo>
                        <CardDetailInfo>Age:</CardDetailInfo>
                    </li>
                    <li>
                        <CardDetailInfo>{notice.breed}</CardDetailInfo>
                        <CardDetailInfo>{notice.location}</CardDetailInfo>
                        <CardDetailInfo>{age()}</CardDetailInfo>
                    </li>
                </CardDetailsContainer>
            </CardInfoContainer>
            <Button type="button" onClick={handleOpenModal}>Learn more</Button>
            {showModal && <Modal onClose={handleCloseModal}>
          <ModalNotice notice={notice} onClose={handleCloseModal} onAddFavoriteBtnClick={handleBtnClick} errorAdd={errorAdd} />
            </Modal>}
        </NoticeCategoryItemStyled>
    );
};
