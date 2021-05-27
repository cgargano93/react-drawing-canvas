import React, { useState, useRef } from 'react';
import Toolbox from './toolbox/component';
import DrawingCanvas from './canvas/component';

const Notes = () => {
  //Global Canvas References
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  //Global Pencil Config
  const [pencilColor, changeCol] = useState("black");
  const [pencilLine, changeLine] = useState("round");
  const [pencilWidth, changeWidth] = useState(5);

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
export default Notes;