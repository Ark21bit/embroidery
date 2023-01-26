$('body').on('click', '.minus-pcs, .plus-pcs', function(){
    let $row = $(this).closest('.counter-pcs');
    let $input = $row.find('.number-pcs');
    let step = $row.data('step');
    let val = parseFloat($input.val());
    
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
    let $input = $(this);
    let $row = $input.closest('.counter-pcs');
    let step = $row.data('step');
    let min = parseInt($row.data('min'));
    let max = parseInt($row.data('max'));
    let val = parseFloat($input.val());
    if (isNaN(val)) {
        val = step;
    } else if (min && val < min) {
        val = min;	
    } else if (max && val > max) {
        val = max;	
    }
    $input.val(Math.round(val) + " шт");
});