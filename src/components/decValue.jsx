import React, { useState } from 'react'
import styled , { css } from 'styled-components';



function DecValue({value,setter}) {
  
    return (
    <button onClick={()=> setter(value)}>{value}</button>
    );
  }
  export default DecValue;