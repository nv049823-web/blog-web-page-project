import EditorialChoice from '../../component/common/EditorialChoice.tsx';
import Navbar from '../../component/common/Navbar.tsx';
import PopularTag from '../../component/common/PopularTag.tsx';
import PosterSection from '../../component/common/PosterSection.tsx';
import SuggestedNews from '../../component/common/SuggestedNews.tsx';
import TopCategaries from '../../component/common/TopCategaries.tsx';
import TopRatedNews from '../../component/common/TopRatedNews.tsx';
import TrendingNews from '../../component/common/TrendingNews.tsx';

const Home = () => {
  return (
    <>
      <Navbar/>
      <PosterSection/>
      <TopCategaries/>
      <TrendingNews/>
      <EditorialChoice/>
      <SuggestedNews/>
      <TopRatedNews/>
      <PopularTag/>
    </>
  );
}

export default Home;
