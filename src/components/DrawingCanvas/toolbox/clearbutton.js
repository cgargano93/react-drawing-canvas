import React from 'react';
import styled from '@emotion/styled';
import {} from '@fluentui/react';

const ClearButton = ({cref}) => {
    const CButton = styled.button`
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
    const ClearCanvas = () => {
        var canvas = cref.current;
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    return (
        <CButton onClick={ClearCanvas}><h2>Clear</h2></CButton>
    );
}
export default ClearButton;