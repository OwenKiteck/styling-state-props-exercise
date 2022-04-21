import McuShows from "./mcu-shows/McuShows";

import {useEffect, useState} from "react"

const mcuCharacters = [
  'Wanda Maximoff',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye',
  'Kate Bishop',
  'Moon Knight',
  'Ms. Marvel'
];

const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021',
  moonKnight: 'March 2022',
  msMarvel: 'June 2022'
};

function App() {

  const [index, setIndex] = useState(0)
  const [num, setNum] = useState(0)

  // The function (1st argument) passed into the useEffect function/hook will run every time the state value ("num" in this example) that is passed into the array (2nd argument) is updated
  useEffect(() => {
    alert(`The Next MCU Character has been displayed`)
  }, [num])

  function randomChar() {
    setIndex(Math.floor(Math.random() * mcuCharacters.length))
  }

  function nextChar() {
    if (num === mcuCharacters.length - 1){
      setNum(0)
    } else {
      setNum(num + 1)
    }
  }



  return (
    <div>
      <h1>FINAL REACT EXERCISE</h1>
      <McuShows dates={releaseDates} randomChar={randomChar} nextChar={nextChar}/>
      <h1>TRandom MCU Char: {mcuCharacters[index]}</h1>
      <h1>TRandom MCU Char: {mcuCharacters[num]}</h1>
    </div>
  );
}

export default App;
