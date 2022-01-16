var updateSubTotal = function(ele) {

    var price = parseFloat($(ele).children('.price').text().substring(1));
    var qty = parseFloat($(ele).find('.qty input').val());

    var subTotal = price * qty;
    $(ele).children('.subTotal').html('$'+subTotal);

    return subTotal;
}


var updateTotalPrice = function() {
    var total = 0;

    $('tbody .shopping-row').each(function (i, ele) {
        var subTotal = updateSubTotal(ele);
        total += subTotal;
        // total += parseFloat($(ele).find('.total').text().substring(1));
    });

    $('#total').html('Total Price: $'+total);

    console.log(total);
}

$(document).ready(function () {
  updateTotalPrice();

});