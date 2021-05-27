import React, { useState, useRef } from 'react';
import './App.css';
import Toolbox from './components/toolbox/component';
import DrawingCanvas from './components/canvas';

function App() {
  //Global Canvas References
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  //Global Pencil Config
  const [pencilColor, changeCol] = useState("black");
  const [pencilLine, changeLine] = useState("round");
  const [pencilWidth, changeWidth] = useState(5);

  // useEffect( (pencilColor,pencilLine,pencilWidth)=> {
  //   const canvas = canvasRef.current;
  //   canvas.width = window.innerWidth *2;
  //   canvas.height = window.innerHeight * 2;
  //   canvas.style.width = `${window.innerWidth}px`;
  //   canvas.style.height = `${window.innerHeight}px`;
  //   const context = canvas.getContext("2d");
  //   //Enable undo on context
  //   UndoCanvas.enableUndo(context);
  //   //**********************
  //   context.scale(2,2);
  //   context.linecap = pencilLine;
  //   context.strokeStyle = pencilColor;
  //   context.lineWidth = pencilWidth;
  //   contextRef.current = context;
  // }, []);

  const Undo = () => {
    contextRef.current.undoTag(); //For UNDO
  };
  const Redo = () => {
    contextRef.current.redoTag(); //For REDO
  }

  return (
    <div id="maindiv">
        <Toolbox cref={canvasRef} changeCol={changeCol} changeLine={changeLine} changeWidth={changeWidth} undoFunction={Undo} redoFunction={Redo}/>
        <DrawingCanvas canvasRef={canvasRef} contextRef={contextRef} pencilColor={pencilColor} pencilLine={pencilLine} pencilWidth={pencilWidth}/>
    </div>
  );
}
export default App;