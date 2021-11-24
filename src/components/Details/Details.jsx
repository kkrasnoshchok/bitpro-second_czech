import React, { useState, useEffect, useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "./Details.css";
import LoadingPage from "../reusable/LoadingPage/LoadingPage";
import { IoIosArrowForward } from "react-icons/io";
import img from "../../assets/planshet.png";

import doge from "../../assets/dogecoin.png";
import net2 from "../../assets/net2.png";

function Details(props) {
  const [loading, setLoading] = useState(false);
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("conclusion");
  };

  // hook useEffect для лоадера
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="details">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="detailsPage">
          {/* <div className="pageBG pageBG_1">
            <img src={doge} alt="" />
          </div> */}
          <div className="pageBG pageBG_2">
            <img src={doge} alt="" />
          </div>
          <div className="pageBG pageBG_net2">
            <img src={net2} alt="" />
          </div>
          {/* <div className="pageBG pageBG_3">
            <img src={doge} alt="" />
          </div>
          <div className="pageBG pageBG_4">
            <img src={doge} alt="" />
          </div> */}
          <main className="detailsMain main">
            <div className="detailsImg img">
              <img src={img} alt="planshet" srcset="" />
            </div>
            <div className="detailsDescription description">
              <p>
                <span>
                  <strong>после регистрации на платформе - </strong>
                  вы получаете доступ ко всем инструментам.
                </span>
                <span>
                  так же к вам будет
                  <strong> прикреплен ваш трейдер,</strong> который ответит на
                  все вопросы и введет вас в мир торговли.
                </span>
              </p>
              <p>
                <strong>
                  он будет сопровождать вас 24/7 и лично контролировать ваш
                  портфель.
                </strong>
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

export default Details;
