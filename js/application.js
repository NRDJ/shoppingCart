$(document).ready(function () {
    $('tbody .shopping-row').each(function (i, ele) {
        var price = parseFloat($(ele).children('.price').text().substring(1));
        var qty = parseFloat($(ele).find('.qty input').val());

        var subTotal = price * qty;

        $(ele).children('.total').html(subTotal);
    });
});

