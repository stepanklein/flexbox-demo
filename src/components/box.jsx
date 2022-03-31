import React, { useState } from 'react'
import styled , { css } from 'styled-components';
import Flexbox from "./flexbox";
import DecValue from "./decValue"

function Box({declaration, defaultDecValue, values}) {
   const [declarationValue, setDeclarationValue] = useState(defaultDecValue);
  
    return (
    <>
        <h2>{declaration}</h2>
        <Flexbox declarationName={declaration} declarationValue={declarationValue}></Flexbox>
        <DecValue value={"row"} setter={setDeclarationValue}></DecValue>
    </>
    );
  }
  export default Box;