import './app.scss';
import './app-media.scss';
import '../../style/button.scss';
import '../../style/button-media.scss';
import '../../style/title.scss';
import '../../style/title-media.scss';

import Header from '../header/Header';
import World from '../world/World';
import Achieve from '../achieve/Achieve';
import Grow from '../grow/Grow';
import Agency from '../agency/Agency';
import Work from '../work/Work';
import Companies from '../companies/Companies';
import Client from '../client/Client';
import Help from '../help/Help';
import Network from '../network/Network';
import Employee from '../employee/Employee';

function App() {
  return (
    <>
      <Header/>
      <World/>
      <Achieve/>
      <Grow/>
      <Agency/>
      <Work/>
      <Companies/>
      <Client/>
      <Help/>
      <Network/>
      <Employee/>
    </>
  );
}

export default App;
