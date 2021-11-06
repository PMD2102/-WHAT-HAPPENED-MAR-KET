import object3 from "../assets/Images/news-object-03.png";
import object2 from "../assets/Images/news-object-02.png";
import arrow from "../assets/Images/news-img-01.png";
import coin from "../assets/Images/news-object-03@2x.png";
import hot from "../assets/Images/news-object-04.png";
import lol from "../assets/Images/news-object-05.png";
import Grid from "../components/Grid";
import BrandCard from "../components/BrandCard";
import brandData from "../assets/data/brand-data";
const Happendissue = () => {
  return (
    <div className="happendissue">
      <img className="happendissue__img1" src={object3} />
      <img className="happendissue__img2" src={object2} />
      <h1 className="happendissue__title1">Happened’s issue</h1>
      <p className="happendissue__title2">
        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
        아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
        걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
      </p>
      <button className="happendissue__button">SEE MORE</button>
      <div className="happendissue__brand">
        <div class="happendissue__brand__grid"></div>
        <Grid col={5}>
          <div class="happendissue__brand__issue">
            <h1 class="happendissue__brand__issue__title">whpn issue</h1>
            <img class="happendissue__brand__issue__imgarr" src={arrow} />
            <img class="happendissue__brand__issue__imgcoin" src={coin} />
            <img class="happendissue__brand__issue__imghot" src={hot} />
            <img class="happendissue__brand__issue__imglol" src={lol} />
          </div>
          {brandData.map((item, index) => (
            <BrandCard key={index} img={item.img} title={item.title} />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Happendissue;
