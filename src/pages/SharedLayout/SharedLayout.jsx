import MainContainer from "components/commonStyles/Container.styled";
import Header from "components/Header/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  const firstLoad = true;
  return (
    <MainContainer>
      <Header load={firstLoad} />

      <Suspense>
        <Outlet load={firstLoad} />
      </Suspense>
    </MainContainer>
  );
};

export default SharedLayout;
