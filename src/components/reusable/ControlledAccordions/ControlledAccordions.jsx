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
          <Typography sx={{ width: "90%", flexShrink: 0 }}>
            1. Po registraci
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            vám do 30 minut zavolá <strong>váš osobní manažer,</strong>{" "}
            nezapomeňte zvednout telefon a poslechnout si informace, které
            poskytuje.
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
            2. Žádná rizika!
          </Typography>
          {/* <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dokud svého obchodníka nekontaktujete, sami nic nedělejte, mohli
            byste o své peníze přijít.
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
            3. Kryptoměna - ?
          </Typography>
          {/* <Typography sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            - je stále velmi mladá oblast, ve které můžete začít s malou částkou
            a vydělat působivý kapitál prostřednictvím kolosálního vzestupu nebo
            poklesu, vyděláváme, i když trh klesá.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
