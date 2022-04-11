import React from 'react';
function H1(props){
 let theme='text-6xl';
  if(props.secondry){
    theme='text-3xl'
  }
  
  return (
    <h1 className={'font-bold ' +theme}>{props.children}</h1>
  );
}
export default H1;