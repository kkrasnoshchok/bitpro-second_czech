import React, { useState, useEffect, useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "./AboutUs.css";
import LoadingPage from "../reusable/LoadingPage/LoadingPage";
import { IoIosArrowForward } from "react-icons/io";

import ltc from "../../assets/litecoin.png";
import net from "../../assets/net.png";

function AboutUs(props) {
  const [loading, setLoading] = useState(false);
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("details");
  };

  // hook useEffect для лоадера
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="aboutUs">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="aboutUsPage">
          {/* <div className="pageBG pageBG_1">
            <img src={ltc} alt="" />
          </div>
          <div className="pageBG pageBG_2">
            <img src={ltc} alt="" />
          </div> */}
          <div className="pageBG pageBG_3">
            <img src={ltc} alt="" />
          </div>
          <div className="pageBG pageBG_net">
            <img src={net} alt="" />
          </div>
          {/* <div className="pageBG pageBG_4">
            <img src={ltc} alt="" />
          </div> */}
          <main className="aboutMain main">
            <div className="aboutTitle title">
              <strong>пару слов о нашей команде : </strong>
            </div>
            <div className="aboutDescription description">
              <p>
                <span>
                  мы без преувеличения{" "}
                  <strong>эксперты в мире криптовалют.</strong>
                </span>
                <span>
                  многолетний опыт торговли позволяет нам делать
                  <strong> точные прогнозы </strong> на те или иные монеты.
                </span>
                <span>
                  мы ищем перспективные стартапы и <strong>инвестируем</strong>{" "}
                  в них, а так же имеем{" "}
                  <strong>колоссальный опыт в торговле с фьючерсами.</strong>
                </span>
              </p>
              <p>
                <strong>наша статистика 95% успешных сделок.</strong>
              </p>
            </div>
            <div className="mainButton">
              <button onClick={setQuizState}>
                <p>далее</p>
                <IoIosArrowForward className="arrowIcon" />
              </button>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default AboutUs;
