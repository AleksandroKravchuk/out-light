// import { response } from 'api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
import { useDeleteNoticeMutation,useAddFavoriteNoticeMutation,useDeleteFavoriteNoticeMutation } from 'redux/auth/authOperations';


export const NoticeCategoryItem = ({ notice, onClick ,noticeDel}) => {
 const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [showModal, setShowModal] = useState(false);
  const [deleteNotice] = useDeleteNoticeMutation();
  const [deleteFavoriteNotice] = useDeleteFavoriteNoticeMutation();
  const [addFavoriteNotice] = useAddFavoriteNoticeMutation();
  const userId = useSelector(state => state.auth.user.data);

  const isOwner = () => {
    if (notice.owner._id === userId) {
      return true
    }
  }
let category = '';
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
  const remove = () => {
    noticeDel();
    deleteNotice(notice._id);
}
  const handleBtnClick = async id => {
    id = notice._id;
    if (notice.favorite?.includes(userId)) {
      deleteFavoriteNotice(id)
      onClick();
      return;
    } else {
    addFavoriteNotice(id)
    onClick();
    }

    }

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const errorAdd = () => {
  return Notify.warning('Please login');
}

    return (
        <NoticeCategoryItemStyled>
            <CardImageContainer>
                <Photo src={notice.photo} alt={notice.comments} />
          <Category>{category}</Category>
          {isLoggedIn ? (<AddToFavoriteBtn onClick={handleBtnClick} className={notice.favorite?.includes(userId) && 'remove'}>
                  <AddIcon width="24" height="22" />
                </AddToFavoriteBtn>):(<AddToFavoriteBtn onClick={errorAdd} >
                    <AddIcon width="24" height="22"  />
                </AddToFavoriteBtn>)}
          {isLoggedIn && isOwner() ? <DeleteBtn onClick={ remove}><RemoveIcon width="19.5" height="21" /></DeleteBtn>:null}
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
