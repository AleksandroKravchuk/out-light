import { useOutletContext } from "react-router-dom";
import { NoticeCategoryItem } from "components/Notices/NoticesCategoryItem/NoticesCategoryItem";
import { Gallery } from "./NoticesCategoryList.styled";


const NoticesCategoryList = () => {
    const {notices, handleFavoriteClick,deleteNot} = useOutletContext();

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
