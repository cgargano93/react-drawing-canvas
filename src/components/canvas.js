import React from 'react';
import UndoCanvas from 'undo-canvas';

const DrawingCanvas = () => {
  //References
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  //States
  const [isDrawing, setIsDrawing] = useState(false);
  //Impostazioni Pennello ->Potrei pensare di usare REDUX e fare unica var di stato
  const [pencilColor, changeCol] = useState("black");
  //const [pencilLine, changeLine] = useState("round");

  useEffect((pencilColor /*, pencilLine*/)=> {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth *2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const context = canvas.getContext("2d");
    //Enable undo on context
    UndoCanvas.enableUndo(context);
    //**********************
    context.scale(2,2);
    context.linecap = "round";
    context.strokeStyle = pencilColor;
    context.lineWidth = 5;

    contextRef.current = context;
  }, []);

    const startDrawing = ({nativeEvent}) => {
        contextRef.current.putTag(); //For UNDO/REDO
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };
    
    const endDrawing = () => {
        contextRef.current.closePath();
        contextRef.current.putTag(); //For UNDO/REDO
        setIsDrawing(false);
    };
    
    const Undo = () => {
        contextRef.current.undoTag(); //For UNDO
    };
    
    const Redo = () => {
        contextRef.current.redoTag(); //For REDO
    };
    
    const Draw = ({nativeEvent}) => {
        if(!isDrawing) {
          return;
        }
        const {offsetX,offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX,offsetY);
        contextRef.current.stroke();
    };

    return(
        <canvas id="canv"
            onMouseDown = {startDrawing}
            onMouseUp = {endDrawing}
            onMouseMove = {Draw}
            ref={canvasRef}
        />
    );
}
export default DrawingCanvas;