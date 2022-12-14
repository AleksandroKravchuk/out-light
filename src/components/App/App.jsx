import { lazy } from 'react';
import { Routes, Route} from 'react-router-dom';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import MainPage from 'components/MainPage/MainPage';


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
const NotFound = lazy(() => import('pages/NotFound'));
const App = () => {




  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />


        <Route path="register" element={<AsyncRegisterPage />} />
        <Route path="login" element={ <AsyncLoginPage />}/>
        <Route path="news" element={<AsyncNewsPage />} />
        <Route path="friends" element={<AsyncOurFriendsPage />} />

       <Route path="user" element={<AsyncUserPage />} />


        <Route path="notices" element={<AsyncNoticesPage />}>
          <Route path=":path" element={<AsyncNoticesCategoryList />} />
        </Route>
      </Route>
         <Route path="*" element={<NotFound />} />










    </Routes>
  );
};

export default App;
