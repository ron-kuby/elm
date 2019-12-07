import styled from 'styled-components';

export const TitleComponent = styled.div`
            position: absolute;
            max-width: 400px;
            height: auto;
            top: 20vh;
            left: 10vw;
            background-color: rgba(179, 154, 117, 0.2);
            z-index: 200;

            @media (max-width: 600px) {
              width: 40%;
              font-size: 0.5rem;
              top: 15vh;
            }
   
`

export default TitleComponent