import colorPickerTemplate from './color-picker.html!text';

export default class ColorPicker {
    constructor(name, selector, timer) {
        this.name = name;
        this.title = `${this.name} color`;
        this.selector = selector;
        this.timer = timer;
        this.init();
    }

    init() {
        let colorPicker = $(colorPickerTemplate);

        colorPicker.find('input').attr('id', `${this.name}Color`);
        colorPicker.find('span.title').text(this.title);
        colorPicker.closest('.dropdown').css('background-color', this.timer[`${this.name}Color`]);

        colorPicker.find(".colorPicker li a").each(function () {
            var bgColor = $(this).attr('data-value');
            var dropdown = $(this).closest('.dropdown');
            $(this).css('background-color', bgColor);
            $(this).on('click', function () {
                dropdown.css('background-color', bgColor);
                dropdown.find('input').val(bgColor);
                dropdown.find('input').change();
            });
        });

        colorPicker.find('input').on('change', (ev) => {
            console.log(this.name);
            if(this.name === 'start'){
                this.timer.startColor = $(ev.target).val();
            }
            if(this.name === 'end'){
                this.timer.endColor = $(ev.target).val();
            }
            this.timer.reset();
        });

        return colorPicker;
    }

}
