import React from 'react'
import styled , { css } from 'styled-components';

export const Conteiner = styled.div`
    display: flex;
    border: solid 10px;
    border-color: rgb(0, 68, 5);
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