import React, { useState, useEffect} from 'react';
import './App.css';
import initData from './data.json';
import { formatData } from './utils';
import ScoreList from './components/ScoreList';
import { DATA_INTERVAL } from './constants';

function App() {
  const [data, setData] = useState(formatData(initData));

  useEffect(() => {
    const interval = setInterval(() => {
      setData(formatData);
    }, DATA_INTERVAL);
    return function cleanup() {
      clearInterval(interval);
    };
  }, []);

  return <ScoreList data={data} />;
}

export default App;
