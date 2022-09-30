import './app.scss';
import './app-media.scss';
import '../../style/button.scss';
import '../../style/button-media.scss';

import Header from '../header/Header';
import World from '../world/World';
import Achieve from '../achieve/Achieve';
import Grow from '../grow/Grow';

function App() {
  return (
    <>
      <Header/>
      <World/>
      <Achieve/>
      <Grow/>
    </>
  );
}

export default App;
