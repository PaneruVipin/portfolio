import React from 'react';
import H1 from './H1';
import Button from './Button';
function SSCard(props){
  return(
     <div >
       <H1 secondry>{props.children}</H1>
       {props.photo && <Button><img className='w-56' src={props.photo}/></Button>}
     </div>
  );
}
export default SSCard;