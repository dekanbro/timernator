import timerControlsCs from './timer-controls.css!css';
import timerControlsTemplate from './timer-controls.html!text';

export default class TimerControls {
    constructor(name, selector, timer) {
        this.name = name;
        this.selector = selector;
        this.timer = timer;
        this.init();
    }

    init() {
        let timerControls = $(timerControlsTemplate);

        timerControls.find( ".startBtn" ).on('click', () => {
          console.log( "clicked start" );
          this.timer.start();
        });
        timerControls.find( ".pauseBtn" ).on('click', () => {
          console.log( "clicked pause" );
          this.timer.pause();
        });
        timerControls.find( ".resetBtn" ).on('click', () => {
          this.timer.reset();
        });
        timerControls.find( ".settingsBtn" ).on('click', () => {
          console.log( "clicked reset" );
          this.timer.pause();
        });
        return timerControls;
    }

}
