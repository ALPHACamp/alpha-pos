const addDrinkButton = document.querySelector('[data-alpha-pos="add-drink"]')
addDrinkButton.addEventListener('click', function () {
  console.log('click')

  let allDrinksOptions = document.querySelectorAll('input[name="drink"]')
  allDrinksOptions.forEach(function (option) {
    if (option.checked) {
      console.log(`${option.value}: ${option.checked}`)
    }
  })

  let allIceOptions = document.querySelectorAll('input[name="ice"]')
  allIceOptions.forEach(function (option) {
    if (option.checked) {
      console.log(`${option.value}: ${option.checked}`)
    }
  })

  let allSugarOptions = document.querySelectorAll('input[name="sugar"]')
  allSugarOptions.forEach(function (option) {
    if (option.checked) {
      console.log(`${option.value}: ${option.checked}`)
    }
  })
})

function Drink (name, sugar, ice) {
  this.name = name
  this.sugar = sugar
  this.ice = ice
}

Drink.prototype.price = function () {
  switch (this.name) {
    case 'Black Tea':
    case 'Oolong Tea':
    case 'Baozong Tea':
    case 'Green Tea':
      return 30
    case 'Bubble Milk Tea':
    case 'Lemon Green Tea':
      return 50
    case 'Black Tea Latte':
    case 'Matcha Latte':
      return 55
    default:
      alert('No this drink')
  }
}
