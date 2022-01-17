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
  });

  $('#total').html('Total Price: $'+total);

}

$(document).ready(function () {
  updateTotalPrice();

  $(document).on('click','.btn.remove', function (event) {
    $(this).closest('tr').remove();
    updateTotalPrice();
  });

  var timeout;

  $(document).on('input','tr input', function (event) {
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      updateTotalPrice();
    }, 500);
  });


  $('.btn.add').on('click', function (event) {
    
    var name = $('.add-item').find('#name').val();
    var cost = $('.add-item').find('#cost').val();

    if ( (!(name)) || (!(cost)) ){
      return;
    }

    var table = document.getElementById('table');
    var tableRowLength = $('tbody tr').length;
    var newRow = table.insertRow(tableRowLength);

    newRow.innerHTML = '<tr class="shopping-row">' +

    '<td class="name">' + name + '</td>' +

    '<td class="price">$' + cost + '</td>' +

    '<td class="qty"><input type="number" value="0"/></td>' +

    '<td class="subTotal">$</td>' +

    '<td><button class="btn btn-danger btn-sm remove">remove</button></td>' +

    '</tr>';

    newRow.classList.add("shopping-row");

  });

});