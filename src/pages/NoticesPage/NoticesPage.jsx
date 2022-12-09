
import Loading from "components/Loading/Loading";
import NoticesCategoriesNav from "components/Notices/NoticesCategoryNav/NoticesCategoryNav";
import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { SearchForm } from "components/SearchForm/SearchForm";
import { AuthLink, AuthLinkContainer, Category, Container, Nav, Title } from "./NoticesPage.styled";
import {
    AddPet,
    AddPetBlock,
    Icon, LinkAddPet
} from './ButtonAddNotice.styled';
import { ReactComponent as AddIcon } from 'icons/addPet.svg';
import Modal from 'components/Modal/Modal';
import ModalAddNotice from 'components/Notices/ModalAddNotice/ModalAddNotice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {  useLocation } from "react-router-dom";
import {
 useGetNoticesSearchMutation,
  useGetAllNoticesMutation,
} from 'redux/auth/authOperations';

const NoticesPage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState("sell");
  const [count, setCount] = useState(0);
  const [notices, setNotices] = useState([]);
  // const [error, setError] = useState(false);
  const [dell, setDell] = useState(false);
  const location = useLocation();
  const [getAllNotices] = useGetAllNoticesMutation();
  const [getSearch] = useGetNoticesSearchMutation();
  const user = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    switch (location.pathname) {
      case '/notices/sell':
        setQuery('sell');
        break;
      case '/notices/lost-found':
        setQuery('lost-found');
        break;
      case '/notices/for-free':
        setQuery('for-free')
        break;
      case '/notices/owner':
        setQuery('find/owner')
        break;
      case '/notices/favorite':
        setQuery('find/favorite')
        break;
      default:
        return;
    }
    // setTimeout(() => {
       getAllNotices(query).then(({data}) =>
      setNotices(data.data.notices)
   )
    // }, 300)

  }, [location.pathname,  query, getAllNotices, showModal,dell])


    const handleSubmit =async formInput => {
          await getSearch(formInput).then((data) => {
            if (data.error) {
              return Notify.failure(`Not found notice ${formInput}`);
            }
      setNotices(data.data.data.notices)
          })
        }

  const deleteNot = () => {
        setDell(true);
    }
    const handleFavoriteClick = () => {
        setCount(count + 1);
    }

    const toggleModal = evt => {
        setShowModal(!showModal);
    }
     const errorAdd = () => {
  return Notify.failure('You are not authorized');
}

    return (

        <Container>
            <Title>Find your favorite pet</Title>

            <SearchForm onSubmit={handleSubmit}/>
            <Nav>

            <Category>
                <NoticesCategoriesNav />

                {user &&
                    <AuthLinkContainer className="own-block">
                        <AuthLink to="favorite">Favorite ads</AuthLink>
                        <AuthLink to="owner">My ads</AuthLink>
                    </AuthLinkContainer>
                }
            </Category>

           <AddPetBlock>
            <AddPet>Add pet</AddPet>
            {isLoggedIn?(<LinkAddPet onClick={toggleModal}>
            <Icon>
              <AddIcon width="100%" height="100%" />
            </Icon>
          </LinkAddPet>):(<LinkAddPet onClick={errorAdd}>
            <Icon>
              <AddIcon width="100%" height="100%" />
            </Icon>
          </LinkAddPet>) }

        </AddPetBlock>
            </Nav>
             {showModal && (
        <Modal onClose={toggleModal}><ModalAddNotice onClose={toggleModal}/> </Modal>
      )}
            {/* {!error
          ? ( */}
            <Suspense fallback={<Loading />}>
                    <Outlet context={{notices, handleFavoriteClick,deleteNot}} />
          </Suspense>
          {/* )
                : <StyledErr>There is no information</StyledErr>
            } */}

        </Container>
    );
};

export default NoticesPage;
