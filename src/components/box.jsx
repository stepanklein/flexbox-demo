import React, { useState } from 'react'
import styled , { css } from 'styled-components';
import Flexbox from "./flexbox";
import DecValue from "./decValue"

function Box({declaration, defaultDecValue, values, nOfItems}) {
   const [declarationValue, setDeclarationValue] = useState(defaultDecValue);
   const decValues = values.map((value,index)=>{return <DecValue key={index} value={value} setter={setDeclarationValue}></DecValue>})
    return (
    <>
        <h3>{declaration}</h3>
        <p>{declarationValue}</p>
        <Flexbox declarationName={declaration} nOfItems={nOfItems} declarationValue={declarationValue}></Flexbox>
        {decValues}
    </>
    );
  }
  export default Box;