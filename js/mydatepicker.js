$(function () {


    var to = new Date();
    var from = new Date(to.getTime() - 1000 * 60 * 60 * 24 * 14);

    // initialize the special date dropdown field
    $('#date-range-field span').text(from.toString('dd/MM/yy') + ' - ' + to.toString('dd/MM/yy'));

    $('#datepicker-calendar').DatePicker({
        inline: true,
        date: [from, to],
        calendars: 3,
        mode: 'range',
        starts: 1,
//        view: 'years',
        showRanges: true,
        textField : '#date-range-field',
        onApply: function () {
            ToggleInput();
        }
    });


    // bind a click handler to the date display field, which when clicked
    // toggles the date picker calendar, flips the up/down indicator arrow,
    // and keeps the borders looking pretty
    $('#date-range-field').bind('click', ToggleInput);

    function ToggleInput() {
        $('#datepicker-calendar').toggle();
        if ($('#date-range-field a').text().charCodeAt(0) == 9660) {
            // switch to up-arrow
            $('#date-range-field a').html('&#9650;');
            $('#date-range-field').css({
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
            });
            $('#date-range-field a').css({
                borderBottomRightRadius: 0
            });
        } else {
            // switch to down-arrow
            $('#date-range-field a').html('&#9660;');
            $('#date-range-field').css({
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5
            });
            $('#date-range-field a').css({
                borderBottomRightRadius: 5
            });
        }
        return false;
    }

}); // end jQuery read