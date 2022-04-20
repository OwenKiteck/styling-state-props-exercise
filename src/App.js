import McuShows from "./mcu-shows/McuShows";

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
  return (
    <div>
      <h1>FINAL REACT EXERCISE</h1>
      <McuShows dates={releaseDates}/>
    </div>
  );
}

export default App;
