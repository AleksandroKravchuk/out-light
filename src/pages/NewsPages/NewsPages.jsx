import { useState, useEffect } from 'react'
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
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const NewsPages = () => {
const {data} = useGetAllNewsQuery();
const [getSearch] = useGetSearchNewsMutation();
const [resultQuery, setResultQuery] = useState('')

  useEffect(() => {
    if (!data) {
      return
    }
    setResultQuery(data.data.news)
    }, [data] );

  const handleSubmit = formInput => {
    getSearch(formInput).then((data) => {
      if (data.error) {
         return Notify.failure(`Not found notice ${formInput}`);
      }
       setResultQuery(data.data.data.news)
    })
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
