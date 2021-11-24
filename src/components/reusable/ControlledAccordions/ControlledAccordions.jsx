import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./ControlledAccordions.css";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion">
      <Accordion
        expanded={expanded === "panel1"}
        // setExpanded = {setExpanded(true)}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "95%", flexShrink: 0 }}>
            1. После регистрации
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>
              ваш персональный менеджер позвонит вам в течении 30 минут,
            </strong>
            обязательно поднимите трубку и выслушайте информацию, которую он
            предоставит.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "90%", flexShrink: 0 }}>
            2. Никаких рисков!
          </Typography>
          {/* <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            пока вы не свяжетесь с вашим трейдером, не делайте ничего
            самостоятельно, вы можете потерять свои деньги.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "90%", flexShrink: 0 }}>
            3. Криптовалюта - ?
          </Typography>
          {/* <Typography sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            - это еще очень молодая сфера, в которой вы можете начать с
            небольшой суммы и заработать внушительный капитал за счет
            колоссального роста или падения, мы зарабатываем даже тогда, когда
            рынок падает.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
