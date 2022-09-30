import './app.scss';
import './app-media.scss';
import '../../style/button.scss'

import Header from '../header/Header';
import World from '../world/World';
import Achieve from '../achieve/Achieve';

function App() {
  return (
    <>
      <Header/>
      <World/>
      <Achieve/>
    </>
  );
}

export default App;
