import React, { useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "./Start.css";
import { IoIosArrowForward } from "react-icons/io";

import btc from "../../assets/btc.webp";
import graf from "../../assets/grafik.webp";

export default function Start() {
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("about");
  };
  return (
    <div className="start">
      <div className="pageBG pageBG_2">
        <img src={btc} alt="" />
      </div>
      <div className="pageBG pageBG_grafik">
        <img src={graf} alt="" />
      </div>
      <main className="startMain main">
        <div className="mainTitle title">
          <strong>Vítejte</strong>
        </div>
        <div className="mainDescription description">
          <p>
            pokud se chcete pak{" "}
            <strong>naučit vydělávat a investovat do kryptoměny,</strong> jste
            na správném místě.
          </p>
          <p>
            Naše aplikace umožňuje lidem z celého světa{" "}
            <strong>vydělávat peníze.</strong> Pokud chcete{" "}
            <strong>znásobit svůj kapitál</strong> několikrát{" "}
            <strong>za pouhý měsíc,</strong> pak jste na správném místě.
          </p>

          <p>
            Nyní vám vysvětlíme všechny principy práce krok za krokem, žádáme
            vás, <strong>abyste si každý krok pečlivě prostudovali.</strong>
          </p>
        </div>

        <div className="mainButton">
          <button onClick={setQuizState} className="">
            <p>Začít</p>
            <IoIosArrowForward className="arrowIcon" />
          </button>
        </div>
      </main>
    </div>
  );
}
