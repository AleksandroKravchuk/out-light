import portrait from 'img/portrait.png';
import { Header, Image, ImageContainer, MainPageSection } from "./MainPage.styled";
import { useOutletContext } from 'react-router-dom';

const MainPage = () => {
  // const { firstLoad } = useOutletContext();

  return (

      <MainPageSection>
          <Header>Take good care of your small pets</Header>
          <ImageContainer >
        <Image
          // className={firstLoad && 'firstLoadHeader'}
              src={portrait} alt="portrait" />
          </ImageContainer>
      </MainPageSection>


    )
}

export default MainPage;
