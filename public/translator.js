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
//   let sentenceArray = textArea.value.split(" ");
//   if(option.value === 'american-to-british') {
//     for(let i = 0; i < sentenceArray.length; i++) {
//       AtoB1.map((d, j) => {
//         if(d === sentenceArray[i]) {
//           sentenceArray.splice(i, 1, americanOnly[d])
//           console.log(americanOnly[d]);
//           console.log(sentenceArray);
//         }
//       })
//     }
//   } else if(option.value === 'british-to-american') {
    
//   }
  if(option.value === 'american-to-british') {
    let str = textArea.value;
    let res;
     AtoB1.map((d, j) => {
       if(new RegExp(d, "g").test(str)) {
         res = str.replace(new RegExp(d, "g"), americanOnly[d])
       }
       else {
         res = str;
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
    console.log(res);
  }
  else if(option.value === 'british-to-american') {
    let str = textArea.value;
    let res;
     BtoA1.map((d, j) => {
       if(new RegExp(d, "g").test(str)) {
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
