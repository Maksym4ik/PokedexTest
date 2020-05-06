import React from 'react';
import s from './App.module.scss';
import ContentBarContainer from "./conponents/ContentBar/ContentBarContainer";
import DetailedBarContainer from "./conponents/DetailedBar/DetailedBarContainer";

function App() {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <p className={s.headerTitle}>Pokedex</p>
      </div>
      <div className={s.content}>
        <ContentBarContainer />
        <DetailedBarContainer />
      </div>
    </div>
  );
}

export default App;
