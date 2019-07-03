import React from 'react';
import ReactGA from 'react-ga';
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import { MasterProfile } from './components/MasterProfile';
import { isDebugMode } from './services/Utilities';
import config from './config.json'

const App: React.FC = () => {
  ReactGA.initialize(config.gaTracking, {
    debug: isDebugMode()
  });
  ReactGA.pageview(window.location.pathname + window.location.search);

  library.add(far);
  library.add(fas);
  library.add(fab);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {isDebugMode() ? "Debug mode" : "Work in progress"}
        </p>
      </header>
      <MasterProfile userName={config.userName} />
    </div>
  );
}

export default App;
