$('body').on('click', '.minus-pcs, .plus-pcs', function(){
    var $row = $(this).closest('.counter-pcs');
    var $input = $row.find('.number-pcs');
    var step = $row.data('step');
    var val = parseFloat($input.val());
    if ($(this).hasClass('minus-pcs')) {
        val -= step;
    } else {
        val += step;
    }
    $input.val(val);
    $input.change();
    return false;
});

$('body').on('change', '.number-pcs', function(){
    var $input = $(this);
    var $row = $input.closest('.counter-pcs');
    var step = $row.data('step');
    var min = parseInt($row.data('min'));
    var max = parseInt($row.data('max'));
    var val = parseFloat($input.val());
    if (isNaN(val)) {
        val = step;
    } else if (min && val < min) {
        val = min;	
    } else if (max && val > max) {
        val = max;	
    }
    $input.val(Math.round(val) + " шт");
});