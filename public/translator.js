import { americanOnly } from './american-only.js';
import { britishOnly } from './british-only.js';
import { americanToBritishSpelling } from './american-to-british-spelling.js';
import { americanToBritishTitles } from './american-to-british-titles.js';
import { britishToAmericanTitles } from './british-to-american-titles.js';

let textArea = document.getElementById('text-input');
let AtoB1 = Object.keys(americanOnly);
let AtoB2 = Object.keys(americanToBritishSpelling);
let AtoB3 = Object.keys(americanToBritishTitles);
let BtoA1 = Object.keys(britishOnly);
let BtoA2 = Object.keys(britishToAmericanTitles);

let option = document.getElementById('locale-select');

document.getElementById('translate-btn').addEventListener('click', (e) => {
      var element = document.getElementById("translated-sentence");
      while (element.firstChild) {
      element.removeChild(element.firstChild);
      }
  if(option.value === 'american-to-british') {
    let str = textArea.value.toLowerCase();
    let res;
     AtoB1.map((d, j) => {
       if(new RegExp(d, "g").test(str)) {
         res = str.replace(new RegExp(d, "g"), americanOnly[d])
       }
     });
    AtoB2.map((d, j) => {
       if(new RegExp(d, "g").test(str)) {
         res = str.replace(new RegExp(d, "g"), americanToBritishSpelling[d]);
       }
     })
    AtoB3.map((d, j) => {
       if(new RegExp(d, "g").test(str)) {
         res = str.replace(new RegExp(d, "g"), americanToBritishTitles[d]);
       }
     })
    if(res) {
      let text = document.createTextNode(res);
      document.getElementById("translated-sentence").appendChild(text);
    } else {
      let text = document.createTextNode("Everything looks good to me!");
      document.getElementById("translated-sentence").appendChild(text);
    }
    console.log(res);
  }
  else if(option.value === 'british-to-american') {
    let str = textArea.value;
    let res;
     BtoA1.map((d, j) => {
       if(new RegExp(d, "gi").test(str)) {
         res = str.replace(new RegExp(d, "g"), britishOnly[d]);
       }
     });
     BtoA2.map((d, j) => {
       if(new RegExp(d, "g").test(str)) {
         res = str.replace(new RegExp(d, "g"), britishToAmericanTitles[d]);
       }
     })
    console.log(res);
  }
})

/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/
