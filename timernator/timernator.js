import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css!';

import {navbar} from 'src/navbar/navbar.js';
import TimerControls from 'src/timer-controls/timer-controls.js';
import ColorPicker from 'src/color-picker/color-picker.js';
import ColorTimer from 'src/color-timer/color-timer.js';

let timer1 = new ColorTimer('timer1', 'body', '#999ccc', '#FF0022');
let cpStart = new ColorPicker('start', 'nav-controls', timer1);
let cpEnd = new ColorPicker('end', 'nav-controls', timer1);
let timerControls = new TimerControls('start', 'nav-controls', timer1);

navbar.appendTo('body');

cpStart.init().appendTo(`[data-component=${cpStart.selector}`);
cpEnd.init().appendTo(`[data-component=${cpEnd.selector}`);
timerControls.init().appendTo(`[data-component=${timerControls.selector}`);

timer1.initialState();
