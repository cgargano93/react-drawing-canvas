import React from 'react';
import Notes from './components/DrawingCanvas/component';
import {Text} from '@fluentui/react/lib/Text'
import './App.css';

function App() {
  return (
    <div className="main">
      <Text variant='xLarge'>Drawing Canvas</Text>
      <Notes/>
    </div>
  );
}
export default App;