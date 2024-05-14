import { deepEqual } from 'node:assert/strict';
import * as cartocolor from '../dist/cartocolor.js';
import colorbrewer from 'colorbrewer';

const { Teal, Safe, cb_Greys } = cartocolor;

// Validate CARTO "Teal" palette.
deepEqual(Object.keys(Teal), ['2', '3', '4', '5', '6', '7', 'tags'], "Teal");
deepEqual(Teal['2'], ['#d1eeea','#2a5674'], 'Teal#2');
deepEqual(Teal['tags'], ['quantitative'], 'Teal#tags');

// Validate CARTO "Safe" palette.
deepEqual(Object.keys(Safe), ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', 'tags'], "Safe");
deepEqual(Safe['2'], ['#88CCEE','#CC6677', '#888888'], 'Safe#2');
deepEqual(Safe['tags'], ['qualitative', 'colorblind'], 'Safe#tags');

// Validate augmented ColorBrewer "Greys" palette.
deepEqual(Object.keys(cb_Greys), ['3', '4', '5', '6', '7', '8', '9', 'tags'], "cb_Greys");
deepEqual(cb_Greys['3'], ['#f0f0f0', '#bdbdbd', '#636363'], 'cb_Greys#3');
deepEqual(cb_Greys['tags'], ['quantitative'], 'cb_Greys#tags');

// Confirm that all colorbrewer palettes are augmented.
const keysImported = Object.keys(colorbrewer)
  .filter((key) => key !== 'schemeGroups')
  .sort();
const keysExported = Object.keys(cartocolor)
  .filter((key) => key.startsWith('cb_'))
  .map((key) => key.replace(/^cb_/, ''))
  .sort();
deepEqual(keysExported, keysImported, 'augments all palettes in colorbrewer');
