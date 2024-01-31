import FeedAbout from "@/components/common/FeedAbout";
import FeedNossosSabores from "@/components/common/FeedNossosSabores";
import FeedQuemFaz from "@/components/common/FeedQuemFaz";
import HeroSlider from "@/components/common/HeroSlider";

const Home: React.FC = () => {
    return (
      <main>
        <HeroSlider />
        <FeedAbout/>
        <FeedNossosSabores />
        <FeedQuemFaz />
      </main>
    );
  };
  export default Home;