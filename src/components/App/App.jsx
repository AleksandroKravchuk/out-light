import { lazy } from 'react';
import { Routes, Route} from 'react-router-dom';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import MainPage from 'components/MainPage/MainPage';
import { useSelector } from "react-redux";
import {
  useCurrentUserQuery,
} from 'redux/auth/authOperations';

const AsyncNewsPage = lazy(() => import('pages/NewsPages/NewsPages'));
const AsyncNoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const AsyncNoticesCategoryList = lazy(() =>
  import('components/Notices/NoticesCategoryList/NoticesCategoryList')
);
const AsyncRegisterPage = lazy(() => import('pages/LoginPage/RegisterPage'));
const AsyncLoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const AsyncUserPage = lazy(() => import('pages/UserPage/UserPage'));
const AsyncOurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage')
);
const NotFound = lazy(() => import('pages/NotFound/NotFound'));



const App = ({ nameI = 'User', skip = true }) => {
const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
// const isToken = useSelector(state => state.auth.token);
    const isToken = useSelector(state => state.token);
    if (isToken !== null) {
    skip = false;
  }
 useCurrentUserQuery(nameI, { skip });
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="register" element={<AsyncRegisterPage />} />
        <Route path="login" element={ <AsyncLoginPage />}/>
        <Route path="news" element={<AsyncNewsPage />} />
        <Route path="friends" element={<AsyncOurFriendsPage />} />
        {isLoggedIn ? <Route path="user" element={<AsyncUserPage />} /> : <Route path="user" element={<AsyncLoginPage />} />}
           <Route path="notices" element={<AsyncNoticesPage />}>
             <Route path="sell" element={<AsyncNoticesCategoryList />} />
             <Route path="lost-found" element={<AsyncNoticesCategoryList />} />
             <Route path="for-free" element={<AsyncNoticesCategoryList />} />
              <Route path="favorite" element={<AsyncNoticesCategoryList />} />
             <Route path="owner" element={<AsyncNoticesCategoryList />} />
        </Route>
       <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default App;
