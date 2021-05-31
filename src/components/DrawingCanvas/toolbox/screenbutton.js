import React from 'react';
import styled from '@emotion/styled';
import html2canvas, {} from 'html2canvas';

const ScreenButton = ({cref}) => {
    const ScreenButton = styled.button`
        border: none;
        width: 160px;
        padding-right: 20px;
        padding-left: 20px;
        margin-right: 5px;
        align-items: center;
        background: grey;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    `
    const TakeScreen = () => {
        var canv = document.getElementById("draw_canv"); //QUA METTEREMO MEDIA GALLERY O COMUNQUE TUTTO IL DIV CONTENTENTE ANCHE IL CANVAS
        html2canvas(canv).then(function(screen) {
            var link = document.createElement('a');
            link.download = 'screen.png';
            link.href = screen.toDataURL();
            screen.style.display='none';
            link.click();
            //document.body.appendChild(screen);
        });
    };
    return (
        <ScreenButton onClick={TakeScreen}><h2>Screenshot</h2></ScreenButton>
    );
}
export default ScreenButton;