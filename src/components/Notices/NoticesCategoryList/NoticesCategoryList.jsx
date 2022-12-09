import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { NoticeCategoryItem } from "components/Notices/NoticesCategoryItem/NoticesCategoryItem";
import { response } from "api";
import { Gallery } from "./NoticesCategoryList.styled";
import { useSelector } from "react-redux";
import { useGetUserPetsQuery } from 'redux/auth/authOperations';

const NoticesCategoryList = () => {
  // const { data, getUserPets } = useGetUserPetsQuery();
    const {notices, handleFavoriteClick,deleteNot} = useOutletContext();
// const [notices, setNotices] = useState([]);


//   useEffect(() => {
//     if (!data) {
//   return
// }
// setNotices(data.data.notices);
//   }, [data]);

// console.log(data.data.notices)

    return (
        <>
            {notices.length !== 0
                ? (<Gallery>
            {notices.map(notice => <NoticeCategoryItem key={notice._id} notice={notice} onClick={handleFavoriteClick} noticeDel={deleteNot } />)}
                    </Gallery >)
                :   <p>Nothing added</p>
            }
        </>
    )
};

export default NoticesCategoryList;
