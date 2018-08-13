var source = $('#new-item-template').html();
var template = Handlebars.compile(source)

var ShoppingCart = function () {

  // an array with all of our cart items
  var cart = [];

  var updateCart = function (itemName, itemPrice) {
    // TODO: Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.
    $('.cart-list').empty();
    $('.total').empty();
    var newHTML = template({ cartItems: cart });
    $('.cart-list').append(newHTML);
    cartTotal();
      }
  const cartTotal = function () {
    let total = 0;
    for (i = 0; i < cart.length; i++) {
      total += cart[i].price
    }
    $('.total').text(total)
  }


  var addItem = function (itemName, itemPrice) {
    // TODO: Write this function. Remember this function has nothing to do with display. 
    // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
    let newItem = {
      name: itemName,
      price: itemPrice
    }
    cart.push(newItem);
  }

  var clearCart = function () {
    // TODO: Write a function that clears the cart ;-)
    cart.length = 0;
    updateCart();
  }

  return {
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart
  }
};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggle();

})
$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  let itemName = $(this).closest('.card').data().name;
  let itemPrice = $(this).closest('.card').data().price;
  app.addItem(itemName, itemPrice);
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
});

