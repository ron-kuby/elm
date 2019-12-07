import React from 'react';
import './App.css';
import logo from './ELM.png'
import Heading from './components/Heading';
import Bars from './components/Bars/Bars';
import Speaker from './components/Speaker/Speaker';
import Title from './components/Title/Title'
import { ButtonWrapper } from './components/Button/Button';
import '@zendeskgarden/react-grid/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

import styled from 'styled-components';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Heading>
          <img src={logo}></img>
        </Heading>
        <Bars/>
        <Speaker/>
        <Title />
      </div>
    </ThemeProvider>
  );
}

export default App;
