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

console.log(option.value);

/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/
