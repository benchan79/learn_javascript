/* greeterMain.js */

// import { greet } from 'greeterEspanol.js';
// import { greet } from 'greeterFrancais.js';

import { greet as greetEspanol } from './greeterEspanol.js';
import { greet as greetFrancais } from './greeterFrancais.js';
 
greetEspanol(); // Prints: hola
greetFrancais(); // Prints: bonjour