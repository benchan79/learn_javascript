/* change-textMain.js */

// import { changeText, changeToFunkyColor } from './change-textModule.js';
import domFunctions from './change-textModule.js';
 
const { changeText, changeToFunkyColor } = domFunctions;

const header = document.getElementById("header");

changeText(header, "I did it!");

setInterval(()=> {
  changeToFunkyColor(header)
}, 200);
