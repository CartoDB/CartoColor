import { deepEqual } from 'node:assert/strict';
import { Teal, Safe, cb_Greys } from '../dist/cartocolor.js';

// Teal
deepEqual(Object.keys(Teal), ['2', '3', '4', '5', '6', '7', 'tags'], "Teal");
deepEqual(Teal['2'], ['#d1eeea','#2a5674'], 'Teal#2');
deepEqual(Teal['tags'], ['quantitative'], 'Teal#tags');

// Safe
deepEqual(Object.keys(Safe), ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', 'tags'], "Safe");
deepEqual(Safe['2'], ['#88CCEE','#CC6677', '#888888'], 'Safe#2');
deepEqual(Safe['tags'], ['qualitative', 'colorblind'], 'Safe#tags');

// Colorbrewer augmented
deepEqual(Object.keys(cb_Greys), ['3', '4', '5', '6', '7', '8', '9', 'tags'], "cb_Greys");
deepEqual(cb_Greys['3'], ['#f0f0f0', '#bdbdbd', '#636363'], 'cb_Greys#3');
deepEqual(cb_Greys['tags'], ['quantitative'], 'cb_Greys#tags');
