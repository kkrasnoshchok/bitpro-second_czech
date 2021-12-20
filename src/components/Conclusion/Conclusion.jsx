import React, { useState, useEffect, useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "./Conclusion.css";
import LoadingPage from "../reusable/LoadingPage/LoadingPage";
import ControlledAccordions from "../reusable/ControlledAccordions/ControlledAccordions";

import ripple from "../../assets/ripple.png";
import net2 from "../../assets/net2.png";

function Conclusion(props) {
  const [loading, setLoading] = useState(false);

  // hook useEffect для лоадера
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="conclusion">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="conclusionPage">
          <div className="pageBG pageBG_1">
            <img src={ripple} alt="" />
          </div>
          <div className="pageBG pageBG_net2">
            <img src={net2} alt="" />
          </div>
          {/* <div className="pageBG pageBG_2">
            <img src={ripple} alt="" />
          </div>
          <div className="pageBG pageBG_3">
            <img src={ripple} alt="" />
          </div>
          <div className="pageBG pageBG_4">
            <img src={ripple} alt="" />
          </div> */}
          <main className="conclusionMain main">
            <div className="conclusionDescription description">
              <p>
                <span>
                  Představili jsme vám tedy základní úvodní informace, které vám
                  poskytnou <strong>úspěšný start.</strong>
                </span>
                <span>
                  <strong>
                  pojďme si to shrnout a můžete si vytvořit účet obchodníka na naší platformě :
                  </strong>
                </span>
              </p>
            </div>
            <ControlledAccordions />
            {/* <div className="conclusionDescription__blue description">
              <p>
                1. после регистрации{" "}
                <strong>
                  ваш персональный менеджер позвонит вам в течении 30 минут,
                </strong>
                обязательно поднимите трубку и выслушайте информацию, которую он
                предоставит.
              </p>
            </div>
            <div className="conclusionDescription__blue description">
              <p>
                {" "}
                <strong> 2. никаких рисков! </strong> пока вы не свяжетесь с
                вашим трейдером, не делайте ничего самостоятельно, вы можете
                потерять свои деньги.
              </p>
            </div>
            <div className="conclusionDescription__blue description">
              <p>
                <strong>3.криптовалюта </strong> - это еще очень молодая сфера, в которой вы можете начать с небольшой суммы и заработать внушительный капитал за счет колоссального роста или падения, мы зарабатываем даже тогда, когда рынок падает.
              </p>
            </div> */}
            <div className="mainButton conclusionButton">
              <a href="https://cashflowtop.com/go/61b9cf1e2079100024">
                <p>Registrace účtu</p>
              </a>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default Conclusion;
