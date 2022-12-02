import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import MainPage from 'components/MainPage/MainPage';
import { useSelector } from 'react-redux';



// import NoticesCategoryList from 'components/Notices/NoticesCategoryList/NoticesCategoryList';

// const AsyncMainPage = lazy(() => import('components/MainPage/MainPage'));
const AsyncNewsPage = lazy(() => import('pages/NewsPages/NewsPages'));
const AsyncNoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));

const AsyncNoticesCategoryList = lazy(() =>
  import('components/Notices/NoticesCategoryList/NoticesCategoryList')
);

// const AsyncSellNoticesPage = lazy(() => import('pages/NoticesPage/SellNoticesPage'));
// const AsyncLostFoundNoticesPage = lazy(() => import('pages/NoticesPage/LostFoundNoticesPage'));
// const AsyncForFreeNoticesPage = lazy(() => import('pages/NoticesPage/ForFreeNoticesPage'));
// const AsyncFavoriteNoticesPage = lazy(() => import('pages/NoticesPage/FavoriteNoticesPage'));
// const AsyncOwnNoticesPage = lazy(() => import('pages/NoticesPage/OwnNoticesPage'));
// const AsyncPrivateRoute = lazy(() => import('components/PrivateRoutes/PrivateRoutes'));
// const AsyncNoticesSearch = lazy(() => import('components/NoticesSearch/NoticesSearch'));
const AsyncRegisterPage = lazy(() => import('pages/LoginPage/RegisterPage'));
const AsyncLoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const AsyncUserPage = lazy(() => import('pages/UserPage/UserPage'));
const AsyncOurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage')
);
// const NotFound = lazy(() => import('pages/NotFound'));

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);



  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="register" element={<AsyncRegisterPage />} />
        <Route path="login" element={ <AsyncLoginPage />}/>
        <Route path="news" element={<AsyncNewsPage />} />
        <Route path="friends" element={<AsyncOurFriendsPage />} />
        <Route path="notices" element={<AsyncNoticesPage />}>
          <Route path=":path" element={<AsyncNoticesCategoryList />} />
          {/* <Route path='sell' element={<AsyncSellNoticesPage />} /> */}
          {/* <Route path='for-free' element={<NoticesCategoryList />} />
          <Route path='lost-found' element={<AsyncLostFoundNoticesPage />} /> */}
          {/* <Route path='favorite' element={<AsyncFavoriteNoticesPage />} />
          <Route path='own' element={<AsyncOwnNoticesPage />} /> */}
        </Route>
      </Route>





        <Route path="user" element={<AsyncUserPage />} />




      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
