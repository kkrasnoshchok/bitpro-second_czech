import React, { useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "./Start.css";
import { IoIosArrowForward } from "react-icons/io";

import btc from "../../assets/btc.jpg";
import graf from "../../assets/grafik.png";

export default function Start() {
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("about");
  };
  return (
    <div className="start">
      {/* <div className="pageBG pageBG_1">
        <img src={btc} alt="" />
      </div>
      <div className="pageBG pageBG_2">
        <img src={btc} alt="" />
      </div>
      <div className="pageBG pageBG_3">
        <img src={btc} alt="" />
      </div> */}
      <div className="pageBG pageBG_2">
        <img src={btc} alt="" />
      </div>
      <div className="pageBG pageBG_grafik">
              <img src={graf} alt="" />
            </div>
      <main className="startMain main">
        <div className="mainTitle title">
          <strong>добро пожаловать!</strong>
        </div>
        <div className="mainDescription description">
          <p>
            если вы хотите
            {" "}
            <strong>
               научиться зарабатывать и инвестировать в криптовалюту,
            </strong>{" "}
            то вы попали в нужное место.
          </p>
          <p>
            наше приложение даёт <strong>возможность зарабатывать</strong>{" "}
            тысячам людей со всего земного шара, если вы хотите
            <strong>умножить свой капитал</strong> в несколько раз{" "}
            <strong>всего за месяц,</strong> тогда вы попали в нужное место.
          </p>

          <p>
            сейчас мы пошагово объясним вам все принципы работы, просим вас
            очень <strong>внимательно изучить каждый шаг.</strong>
          </p>
        </div>

        <div className="mainButton">
          <button onClick={setQuizState} className="">
            <p>начать</p>
            <IoIosArrowForward className="arrowIcon" />
          </button>
        </div>
      </main>
    </div>
  );
}
