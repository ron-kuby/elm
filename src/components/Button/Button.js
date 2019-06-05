import styled from 'styled-components';

const color = 'orange'

export const ButtonWrapper = styled.button`
  color: red;
  margin: 2rem 0em;
  font-size: ${props => props.big ? "3rem" : "1rem" }
  background-color: ${color};

  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: white;
  }
`