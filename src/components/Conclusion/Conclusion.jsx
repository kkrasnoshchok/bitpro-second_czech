import React, { useState, useEffect } from "react";
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
          <main className="conclusionMain main">
            <div className="conclusionDescription description">
              <p>
                <span>
                  Představili jsme vám tedy základní úvodní informace, které vám
                  poskytnou <strong>úspěšný start.</strong>
                </span>
                <span>
                  <strong>
                    pojďme si to shrnout a můžete si vytvořit účet obchodníka na
                    naší platformě :
                  </strong>
                </span>
              </p>
            </div>
            <ControlledAccordions />
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
