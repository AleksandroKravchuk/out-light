import { useState, useEffect } from 'react'
import {useSearchParams} from "react-router-dom";
import EllipsisText from "react-ellipsis-text";
import { SearchForm } from "components/SearchForm/SearchForm";
import {
  useGetAllNewsQuery,
  useGetSearchNewsMutation,
} from 'redux/auth/authOperations';
// import Loading from 'components/Loading/Loading';
// import Error from '../../components/error/error';
import MainContainer from 'components/commonStyles/Container.styled';
import {
  NewsPageTitle,
  NewsSet, NewsItem,
  NewsItemTitle, NewsItemContent,
  NewsItemLink, NewsItemDate,
  NewsItemRectangle, NewsItemInfo
} from './NewsPages.styled'
import Notiflix from 'notiflix';



const NewsPages = () => {
  const {data} = useGetAllNewsQuery();
  const [getSearch] = useGetSearchNewsMutation();
// const [, setQueryNews] = useState('');
const [resultQuery, setResultQuery] = useState('')
const [searchParams, setSearchParams] = useSearchParams();
// const [error, setError] = useState(null);
// const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    if (!data) {
      return
    }
    setResultQuery(data.data.news)
    // console.log(data.data.news)
    // data().then((data)=>console.log(data))
    // const newsName = searchParams.get('q');

    // if (!newsName) {
    //   setIsLoading(true);

    //         const getData = async () => {
    //             try {
    //                 const data = await response.getNews();
    //                 setResultQuery(data);
    //             }
    //             catch (error) {
    //                 setError(error.message)
    //                 console.error(error.message);
    //             } finally {
    //                 setIsLoading(false)
    //             }
    //         };
    //         getData();
    //     return ;
    // };

    // setIsLoading(true);
    // const getData = async () => {
    //     try {
    //         const data = await response.getNews(newsName);
    //         setResultQuery(data);
    //     }
    //     catch (error) {
    //         setError(error.message);
    //         console.error(error.message);
    //         setSearchParams();
    //     } finally {
    //         setIsLoading(false)
    //     }
    //     };
        // getData();
    }, [data] );

  const handleSubmit = formInput => {
    getSearch(formInput).then((data) => {
      if (data.error) {
         return Notiflix.Notify.failure(`Not found notice ${formInput}`);
      }
       setResultQuery(data.data.data.news)
    })

        // setQueryNews(searchParams.get('q'));
        // setSearchParams({ q: formInput })
  }

  return (

    <MainContainer>

        <NewsPageTitle>News</NewsPageTitle>

        <SearchForm onSubmit={handleSubmit} />

        {/* {isLoading && <Loading />} */}

        {/* {error && <Error />} */}

      <NewsSet>
        {resultQuery.length !== 0 && resultQuery.map(({_id, title, url, description, date }) =>
        (<NewsItem key={_id}>
          <NewsItemRectangle/>
          <NewsItemTitle>
            <EllipsisText text={title} length={42} />
          </NewsItemTitle>

          <NewsItemContent>
            <EllipsisText text={description} length={231} />
          </NewsItemContent>

          <NewsItemInfo>
            <NewsItemDate>{date}</NewsItemDate>
            <NewsItemLink href={url} target='_blank'>Read more</NewsItemLink>
          </NewsItemInfo>
        </NewsItem>)
        )}
      </NewsSet>

    </MainContainer>
  )

};

export default NewsPages;
