import React from 'react'
import styled , { css } from 'styled-components';

export const Conteiner = styled.div`
    display: flex;
    padding: 20px;
    background-color: rgb(0, 113, 8);
    max-width: 500px;
    flex-wrap: wrap;
    border-radius:8px;
    algin-items:flex-start; 
    min-height: 300px;
    ${(props) => {
        if(props.declarationName != undefined && props.declarationValue != undefined)
        {
          return css`
          ${props.declarationName} :${props.declarationValue} ;
        `;
        }
    }
   
  }
  

`;
export const Item = styled.div`
    
    padding: 20px;
    border-radius: 8px;
    background-color: ${props => props.inputColor || "#282c34"};
    padding-top:${props => props.inputHeight|| "20px"};
    ${(props) => {
      if(props.declarationName != undefined && props.declarationValue != undefined)
      {
        return css`
        ${props.declarationName} :${props.declarationValue} ;
      `;
      }
  }
 
}

`;
function Flexbox({declarationName, declarationValue, nOfItems}) {
 let items = [];
 
 for (let i = 0; i < (nOfItems || 5); i++) {
   if(i % 2 == 0)
    items.push(<Item key={i} > text {i}</Item>);
   else
  { 
    let height;
    if (i<4){
      height = (30*i) + "px";
    }
    else
    { 
      height="20px";
    }
    items.push(<Item key={i} inputColor="#023497" inputHeight={height}> text {i}</Item>);
  }
 }

  
    return (
    <Conteiner declarationName = {declarationName} declarationValue={declarationValue}>
      {items}
    </Conteiner>
    );
  }
  export default Flexbox;