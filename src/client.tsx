import React from 'react'
import ReactDOM from 'react-dom'

import "./scss/style.scss"

import  Nav  from "./blocks/navigation/navigation"
// function formatName(user: Record<string, any>) {
//     return user.firstName + ' ' + user.lastName;
//   }
//   const user = {
//     firstName: 'Марья',
//     lastName: 'Моревна'
//   };
//   const element1 = (
//     <h1>
//       Здравствуй, {formatName(user)}!
//     </h1>
//   );


const element = <Nav/>;



ReactDOM.render(element, document.getElementById('root'))
