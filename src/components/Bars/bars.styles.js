import styled, { keyframes } from 'styled-components';

export const soundWaves = keyframes`
        0% {
            opacity: .35;
            height: 3px; 
        }
        100% {
            opacity: 1;       
            height: 28px;        
        }

`

export const BarsComponent = styled.div`
    height: 30px;
    width: 40px;
    position: absolute;
    left: 92vw;
    top: 23px;

    .bar{
        display: inline-block;
        background-color: #000;
        width: 3px;
        position: absolute;
        bottom: 1px;
        height: 3px;
        animation: ${ soundWaves} 0ms -800ms linear infinite alternate; 
    }

    .bar:nth-child(1)  { left: 1px; animation-duration: 474ms; }
    .bar:nth-child(2)  { left: 5px; animation-duration: 433ms; }
    .bar:nth-child(3)  { left: 9px; animation-duration: 407ms; }
    .bar:nth-child(4)  { left: 13px; animation-duration: 458ms; }
    .bar:nth-child(5)  { left: 17px; animation-duration: 400ms; }
    .bar:nth-child(6)  { left: 21px; animation-duration: 427ms; }
    .bar:nth-child(7)  { left: 25px; animation-duration: 441ms; }
    .bar:nth-child(8)  { left: 29px; animation-duration: 419ms; }
    .bar:nth-child(9)  { left: 33px; animation-duration: 487ms; }
    .bar:nth-child(10) { left: 37px; animation-duration: 442ms; }​
`

export default BarsComponent