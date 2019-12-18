import styled, { keyframes } from "styled-components";

export const SpeakerComponent = styled.img`
  position: relative;
  width: 96vw;
  height: auto;
  top: 15vh;
`;

export const SpeakerTitle = styled.h2`
         position: absolute;
         top: 40vh;
         right: 11.7vw;
         font-family: "Spicy Rice", cursive;
         font-size: 4rem;
         line-height: 4rem;
         color: #fcf2ea;
         text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
         z-index: 100;
         opacity: 0;
         background-color: rgba(179, 154, 117, 0.2);
         animation: spinIn 0.8s ease-in 0.8s forwards;

         @keyframes spinIn {
           0% {
             opacity: 0;
             transform: rotate(0deg) scale(0);
           }

           75% {
             transform: rotate(540deg) scale(1.2);
           }

           100% {
             opacity: 1;
             transform: rotate(720deg) scale(1);
           }
         }

         @media (max-width: 600px) {
           font-size: 2rem;
           line-height: 2rem;
         }
       `;

export const SpeakerOffsetOne = styled.h2`
         position: absolute;
         top: 40.5vh;
         right: 11.5vw;
         font-family: "Spicy Rice", cursive;
         font-size: 4rem;
         line-height: 4rem;
         color: #638222;
         text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
         z-index: 90;
         opacity: 0;
         animation: spinIn 0.8s ease-in 0.8s forwards;

         @keyframes spinIn {
           0% {
             opacity: 0;
             transform: rotate(0deg) scale(0);
           }

           75% {
             transform: rotate(540deg) scale(1.2);
           }

           100% {
             opacity: 1;
             transform: rotate(720deg) scale(1);
           }
         }

         @media (max-width: 600px) {
           font-size: 2rem;
           line-height: 2rem;
         }
       `;

export const SpeakerOffsetTwo = styled.h2`
         position: absolute;
         top: 40.9vh;
         right: 11.3vw;
         font-family: "Spicy Rice", cursive;
         font-size: 4rem;
         line-height: 4rem;
         color: #6e513f;
         text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
         z-index: 80;
         opacity: 0;
         animation: spinIn 0.8s ease-in 0.8s forwards;

         @keyframes spinIn {
           0% {
             opacity: 0;
             transform: rotate(0deg) scale(0);
           }

           75% {
             transform: rotate(540deg) scale(1.2);
           }

           100% {
             opacity: 1;
             transform: rotate(720deg) scale(1);
           }
         }

         @media (max-width: 600px) {
           font-size: 2rem;
           line-height: 2rem;
         }
       `;

export const SpeakerOffsetThree = styled.h2`
         position: absolute;
         top: 41.1vh;
         right: 11.1vw;
         font-family: "Spicy Rice", cursive;
         font-size: 4rem;
         line-height: 4rem;
         color: #ffc09f;
         text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
         z-index: 70;
         opacity: 0;
         animation: spinIn 0.8s ease-in 0.8s forwards;

         @keyframes spinIn {
           0% {
             opacity: 0;
             transform: rotate(0deg) scale(0);
           }

           75% {
             transform: rotate(540deg) scale(1.2);
           }

           100% {
             opacity: 1;
             transform: rotate(720deg) scale(1);
           }
         }

         @media (max-width: 600px) {
           font-size: 2rem;
           line-height: 2rem;
         }
       `;

export const SpeakerOffsetFour = styled.h2`
         position: absolute;
         top: 41.5vh;
         right: 10.9vw;
         font-family: "Spicy Rice", cursive;
         font-size: 4rem;
         line-height: 4rem;
         color: #ffee93;
         text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
         z-index: 60;
         opacity: 0;
         animation: spinIn 0.8s ease-in 0.8s forwards;

         @keyframes spinIn {
           0% {
             opacity: 0;
             transform: rotate(0deg) scale(0);
           }

           75% {
             transform: rotate(540deg) scale(1.2);
           }

           100% {
             opacity: 1;
             transform: rotate(720deg) scale(1);
           }
         }

         @media (max-width: 600px) {
           font-size: 2rem;
           line-height: 2rem;
         }
       `;

export default SpeakerComponent;
