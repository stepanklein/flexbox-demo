import React, { useState } from 'react'
import styled , { css } from 'styled-components';
import { Data} from "../declarationData";
import Box from "./box";
import FlexboxItem from "./flexboxItem";
const Conteiner = styled.main`
    
   margin: 50px;
  
  

`;
function Main() {
  const Boxes = Data.map((cssDec, index) => {return <Box key={index} declaration={cssDec.name} defaultDecValue={cssDec.values[0]} values={cssDec.values} nOfItems={cssDec.nOfItems} />})
  
    return (
   <Conteiner>
       <h1>Flexbox</h1>
       <h2>Deklarace pro Rodičovský prvek</h2>
       {Boxes}
       <h2>Deklarace pro Potomka</h2>
       <h3>flex-grow</h3>
        <FlexboxItem></FlexboxItem>
   </Conteiner>
    );
  }
  export default Main;