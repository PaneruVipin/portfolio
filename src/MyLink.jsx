import React from 'react';
import { Link } from "react-router-dom";
function MyLink(props){
  return(
      <div>
    <Link to={props.to} onClick={props.onClick} className='text-center hover:bg-gray-400 px-4 py-2 text-md font-medium hover:text-yellow-500 rounded-md'>
      <span>{props.children}</span>
    </Link>
      </div>
    );
}
export default MyLink;