import React, { useState } from 'react'
import styled , { css } from 'styled-components';
import {Conteiner, Item} from "../styles";

function FlexboxItem() {
   
  const [values,setValues] = useState([0,0,0]);
     
       return (
      <>
         <Conteiner >
           <Item  declarationName = "flex-grow" declarationValue={values[0]} > text 1</Item>
           <Item declarationName = "flex-grow" declarationValue={values[1]} inputColor="#023497" > text 2</Item>
           <Item  declarationName = "flex-grow" declarationValue={values[2]} > text 3</Item>
         </Conteiner>
         <input type="range" value={values[0]} min="0" max="10" 
       onChange={(event) => setValues([event.target.value,values[1],values[2]])} />
           <input type="range" value={values[1]} min="0" max="10" 
       onChange={(event) => setValues([values[0],event.target.value,values[2]])} />
             <input type="range" value={values[2]} min="0" max="10" 
       onChange={(event) => setValues([values[0],values[1],event.target.value])} />
      </>

       );
     }
     export default FlexboxItem;