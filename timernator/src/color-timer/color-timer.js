export default class ColorTimer {
    constructor(name, selector, startColor, endColor) {
        this.name = name;
        this.selector = selector;
        this.startColor = startColor;
        this.endColor = endColor;

        this.timeLength = 0;
        this.curTime = 0;
        this.interval = 1000;
        // states
        this.ticking = false;
        this.expiered = false;
        this.reseted = true;
        this.paused = false;

        this.pauseColor = '#000000';
        this.pauseTime = 0;
        this.timerId = 0;
    }

    removeTransition(bgColor) {
        console.log('remove trans');
        $(this.selector).css({'transition' : 'background-color 0ms ease'});
        $(this.selector).css({'background-color' : bgColor });
    }

    createTransition(timeTo) {
        console.log('create trans');
        $(this.selector).css({'transition' : 'background-color ' + timeTo + 's ease'});
        $(this.selector).css({'background-color' : this.endColor });
    }

    tick() {
        this.curTime -= 1;
        console.log(this.curTime + ' cur');
        if (this.curTime <= 0) {
            this.expire();
        }
    }

    start() {

        // if alrady ticking return false
        if (this.ticking)
        {
            return false;
        }
        // if timer is paused unpause and set new time to setInterval
        // else grab value from form field
        if (this.paused)
        {
            this.timeLength = this.pauseTime;
            this.paused = false;
        } else {
            this.timeLength = $("#tIn").val();
        }
        // set current time time the total length
        this.curTime = this.timeLength;
        this.timerId = setInterval(
            () => this.tick(), this.interval);
        // set state to ticking
        this.tickingState();
        this.ticking = true;
        // change the css transition length and set new background color
        this.createTransition (this.timeLength);
    }

    expire() {
        console.log('boom');
        this.expiredState();
        this.paused = false;
        this.ticking = false;
        this.expired = true;
        clearInterval(this.timerId);
        console.log('expire');
    }

    reset() {
        this.expire();
        console.log('reset');
        this.initialState();
        // reset current time to total time
        this.curTime = this.timeLength;
        console.log(this.timeLength + " **************");
        //change transition to 1ms and set background color to start color
        this.removeTransition(this.startColor);
        this.removeTransition(this.startColor); // have to run this twice
    }

    pause() {
        // if not ticking return false
        this.pausedState();
        if (this.ticking === false){
            return false;
        }
        console.log('pause');
        this.ticking = false;
        this.paused = true;
        clearInterval(this.timerId);
        this.pauseTime = this.curTime;
        // get current color and
        // change transition to 1ms and set background color to current color
        this.pauseColor = $(this.selector).css('backgroundColor');
        this.removeTransition(this.pauseColor);
    }

    initialState() {
        $('.stateLabel').html(' initial');
        $(this.selector).css({'background-color' : this.startColor });
        $('.tGroupInput').show();
        $('.tGroupCur').hide();
        $('.startBtn').show();
        $('.pauseBtn').hide();
        $('.settingsBtn').hide();
        $('.resetBtn').hide();
        $(this.selector).removeAttr('class');
        $(this.selector).addClass('patternBox');
    }

    pausedState() {
        $('.stateLabel').html(' paused');
        $('.tGroupInput').hide();
        $('.tGroupCur').show();
        $('.tCur').html(this.curTime);
        $('.startBtn').show();
        $('.pauseBtn').hide();
        $('.settingsBtn').hide();
        $('.resetBtn').show();
        $(this.selector).removeAttr('class');
    }

    tickingState() {
        $('.stateLabel').html(' ticking');
        $('.tGroupInput').hide();
        $('.tGroupCur').hide();
        $('.startBtn').hide();
        $('.pauseBtn').show();
        $('.settingsBtn').show();
        $('.resetBtn').show();
        $(this.selector).removeAttr('class');
    }

    expiredState() {
        $('.stateLabel').html(' expired');
        $('.tGroupInput').hide();
        $('.startBtn').hide();
        $('.pauseBtn').hide();
        $('.settingsBtn').hide();
        $('.resetBtn').show();
        $('.tGroupCur').show();
        $('.tCur').html('00');
        $(this.selector).removeAttr('class');
        $(this.selector).addClass('patternDiag');
    }

    init() {

    }

}
