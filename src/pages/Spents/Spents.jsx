import PopUp from "../../components/PopUp/PopUp";
import "./Spents.css";
import ajolotito from "./img/ajolotitodejohnny.png";
import ajolotitoNegro from "./img/ajolititonegro.png";
import ajolotitoChiquito from "./img/ajolotitochiquito.png";
import SpenTable from "../../components/Spent-table/SpenTable";
import CustomCalendar from "../../components/calendar/Calendar";

export default function SpentsPage() {
  return (
    <div className="Spen_conteiner">
      <div className="Spen__title">
        <img className="ajolotito" src={ajolotito} />
        <h3>Control de gastos</h3>
      </div>
      <div className="spen__conteiner2">
        <div className="spen__box">
          <SpenTable className="Spen__table" />
          <img className="ajolotitonegro" src={ajolotitoNegro} />
        </div>
        <div className="spen__box2">
          <img className="ajolotitochiquito" src={ajolotitoChiquito} />
          <CustomCalendar className="Spen__calendar" />
        </div>
      </div>
    </div>
  );
}
