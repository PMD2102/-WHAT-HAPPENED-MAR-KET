import React from "react";
import object1 from "../assets/Images/object-01.png";
import object2 from "../assets/Images/object-02.png";
import object3 from "../assets/Images/object-03.png";
import object4 from "../assets/Images/object-04.png";
import object5 from "../assets/Images/object-05.png";
import object6 from "../assets/Images/object-06.png";
import object7 from "../assets/Images/object-07.png";
import window from "../assets/Images/window.png";

const BrandStory = () => {
  return (
    <div className="brandstory">
      <div className="brandstory__title">
        <h1 className="brandstory__title__1">Brand Story</h1>
        <p className="brandstory__title__2">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>

        <img className="brandstory__title__img1" src={object1} />
        <img className="brandstory__title__img2" src={object2} />
        <img className="brandstory__title__img3" src={object3} />
        <img className="brandstory__body__img6" src={object6} />
        <img className="brandstory__body__img7" src={object7} />

        <img className="brandstory__body__img4" src={object4} />
        <img className="brandstory__body__img5" src={object5} />
        <div className="brandstory__body__text">
          <img className="brandstory__body__text__img" src={window} />
          <h3 className="brandstory__body__text__1">
            What Happened’s Brand story
          </h3>
          <p className="brandstory__body__text__2">
            청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
            풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
            살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
            이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
            칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
            끝에 설산에서 황금시대를 이상을 운다.
          </p>
          <button className="brandstory__body__text__button">SEE MORE</button>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;
