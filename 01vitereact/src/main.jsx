import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return (
    <div>
      <h1>My APP from function</h1>
    </div>
  )
}
// const ReactElement = { // ye jo format tha to humne khud ka render banaya tha so jo react ka render banaya hoga vo bhi kuch format expect karta hoga
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children: 'click me to visit google.com'
// }
const AnotherElement = (
  <a href = "http://google.com" target='_blank'> visit google </a>
)
// React ke paas bhut se method hai vaise hi ek method h createElement
const ReactElement = React.createElement(
  'a', // first parameter is expected a tag 
  {href:'https://google.com', target:'_blank'}, // second is expected a object
  'click me to visit google ' //expect a text 
)

ReactDOM.createRoot(document.getElementById('root')).render(
 // AnotherElement
  ReactElement
)
