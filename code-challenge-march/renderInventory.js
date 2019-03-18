/* Fashion Inventory A
  You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.
  It looks like this:
 */

let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];
function renderInventory(inventory) {
  let results = []
  const operate = inventory.map((inv) => {
    inv.shoes.map((s) => {
      results[results.length] = ([inv.name, s.name, s.price])
    })
  })

  return results
}
// output
/*
[[designer name, shoe name, price], [designer name. shoe name, price], ....]
[
  [Brunello Cucinelli, tasselled black low-top lace-up, 1000],
  [Brunello Cucinelli, tasselled green low-top lace-up, 1100],
...
]

*/
renderInventory(currentInventory)