import React, { useState } from 'react'
import styled , { css } from 'styled-components';

const Button = styled.button`
  margin:5px
`;

function DecValue({value,setter}) {
  
    return (
    <Button onClick={()=> setter(value)}>{value}</Button>
    );
  }
  export default DecValue;