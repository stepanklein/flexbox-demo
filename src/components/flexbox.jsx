import React from 'react'
import styled , { css } from 'styled-components';

const Conteiner = styled.div`
    display: flex;
    padding: 20px;
    background-color: rgb(0, 113, 8);
    ${(props) => {
        if(props.declarationName != undefined && props.declarationValue != undefined)
        {
          return css`
        ${props.declarationName} :${props.declarationValue} ;
        `;
        }
    }}
`;
const Item = styled.div`
    
    padding: 20px;
    border-radius: 8px;
    background-color: ${props => props.inputColor || "#282c34"};

`;
function Flexbox({declarationName, declarationValue}) {
  console.log(declarationValue);
    return (
    <Conteiner declarationName = {declarationName} declarationValue={declarationValue}>
      <Item >text</Item>
      <Item inputColor="#023497">text</Item>
      <Item >text</Item>
    </Conteiner>
    );
  }
  export default Flexbox;