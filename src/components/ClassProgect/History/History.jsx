import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import { StepConnector, styled } from "@mui/material";
// import img from "../../../assets/gabi.jpg";
import momiq from "../../../assets/momiq.jpg";
import "./History.css";
const NoLineConnector = styled(StepConnector)({
  "& .MuiStepConnector-line": {
    display: "none",
  },
});
const steps = ["1. клас", "2. клас", "3. клас", "4. клас"];
const text = [
  "Нашия клас  за първи път се е срещнал далеч 15септември 2020г.Тогава ние си търсихме с кой да се запознаем.Тогава сме били още много срамежливи.Постепенно ние започнахме да си намираме приятели а някои да правят групи.Незабелязано мина  2020г.А другата половина бързо и незабелязано.",
  "Втори клас бяхме по уверени.Тогава създавахме групи.И момчетата започваха да правят първите си щуротии.Тогава ние почти цялото време от делихме за ученето на таблицата.",
  "Ние тогава бяхме вече уверени.Тогава започнаха повечето лудурии.Започнахме да прекарваме повечето свободно на вънка в компанийки или в къщи с компщтъра или лаптопа.",
  "Четвърти клас мина незаметно но тогава ние започнахме да усъзнаваме кой искаме да бъдем.От тестове вече малките глави ни избухваха, но това не е било на празно а за перфектните оценки на матуруте.",
];
export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeText, setActiveText] = React.useState("");
  const handleStep = (step) => () => {
    setActiveStep(step);
    setActiveText(text[step]);
  };

  return (
    <Box sx={{ width: "100%" }}>
     <Stepper
  connector={<NoLineConnector />}
  nonLinear
  activeStep={activeStep}
  sx={{
    width: "100%",
    maxWidth: "900px", // за да не се разтегне твърде много
    paddingTop: "40px",
    margin: "auto", // центрира при по-големи екрани
    display: "flex",
    flexWrap: "wrap", // адаптивно при нужда
    gap: "20px",
  }}
  alternativeLabel
>
        {steps.map((element, index) => (
          <Step key={element} >
          <StepButton
  onClick={handleStep(index)}
  sx={{
    padding: 0,
    width: 70,
    height: 70,
    borderRadius: "10px",
    backgroundColor: '#DE6E35',
  
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: '#fffff',
      transform: "scale(1.05)",
    },
    '& .MuiStepIcon-root': {
      fontSize: "2rem",
      color: '#DE6E35',
      '&.Mui-active': {
        color: '#ec353a',
      },
    },
    "& .MuiStepLabel-label": {
      fontFamily: "Spectral",
      fontSize: "0.75rem",
      whiteSpace: "normal",
      textAlign: "center",
      display: "block",
      lineHeight: 1.2,
      marginTop: "6px",
    },
  }}
>
              {steps[index]}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <div className="box">
          <div><img src={momiq} width={250} className="img-text" /></div>
           
          
          {activeText}
         
           
         
        </div>
      </div>
      {/* <div className="img">
        <img src={img} width={150} />
        <img src={img} width={150} />
        <img src={img} width={150} />
        <img src={img} width={150} />
      </div> */}
    </Box>
  );
}

