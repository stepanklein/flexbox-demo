import React from 'react'
import styled , { css } from 'styled-components';
import {Conteiner, Item} from "../styles";

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