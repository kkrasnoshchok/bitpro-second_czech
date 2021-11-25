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
              <strong>Pár slov o našem týmu :</strong>
            </div>
            <div className="aboutDescription description">
              <p>
                <span>
                  jsme bez nadsázky{" "}
                  <strong>odborníci na svět kryptoměn.</strong>
                </span>
                <span>
                  dlouholeté obchodní zkušenosti nám umožňují dělat <strong> přesné predikce </strong> pro určité coiny.
                </span>
                <span>
                  hledáme nadějné startupy a <strong>investujeme</strong> do
                  nich a také máme{" "}
                  <strong>obrovské zkušenosti s obchodováním s futures.</strong>
                </span>
              </p>
              <p>
                <strong>naše statistiky 95% úspěšných transakcí.</strong>
              </p>
            </div>
            <div className="mainButton">
              <button onClick={setQuizState}>
                <p>Dále</p>
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
