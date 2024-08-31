import { useState } from "react";
import Buttons from "./components/buttons";
import Display from "./components/Display";
function App() {
  let calData = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  const [value, setValue] = useState("");

  const buttonClick = (buttonTxt) => {
    if(buttonTxt === '=')
    setValue(prev => eval(prev))
    else if(buttonTxt == 'C')
    setValue("")
    else
    setValue(prev => prev + buttonTxt);
  }
  return (
    <>
      <div className="container flex justify-center items-center flex-col h-screen">
        <Display value = {value}></Display>
        <div className="buttons grid grid-cols-3 gap-6 mt-5">
          <Buttons btn={calData} buttonClicked={buttonClick}></Buttons>
        </div>
      </div>
    </>
  );
}

export default App;
