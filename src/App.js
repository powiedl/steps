import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function handlePrevious() {
    //alert("Previous clicked");
    setStep((s) => (s > 1 ? s - 1 : 1));
    //    setTime(new Date().toLocaleTimeString());
  }
  function handleNext() {
    //alert("Next clicked");
    if (step < 3) {
      //setStep(step + 1);  // eigentlich falsch - man soll nie den State aufgrund des aktuellen Wertes des States ändern
      // richtig:
      setStep((s) => s + 1);
      // setStep((s) => s + 1); // so ist es möglich auch mehrere set-Aufrufe unmittelbar hinterienander zu machen - was bei der obigen Variante nicht geht
    }
    //    setTime(new Date().toLocaleTimeString());
  }
  function handleClose() {
    setIsOpen((o) => !o);
  }

  return (
    <div>
      <button className="close" onClick={handleClose}>
        {isOpen ? "\u00d7" : "\u25cb"}
        {/* \u00d7 = &times; in HTML
        \u25cb = nicht ausgefüllter Kreis 
        Innerhalb von JSX im Javamode kann man &times; nicht verwenden bzw. wird es als String '&times;' interpretiert und damit genau so ausgegeben - und nicht in das Zeichen konvertiert, dass es codiert (eben das X) */}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
            {/* <p>{time}</p> */}
          </div>
        </div>
      )}
    </div>
  );
}
