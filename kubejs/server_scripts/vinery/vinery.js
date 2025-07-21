ServerEvents.recipes(event =>{
    event.custom(//大粪威士忌
{
  "type": "vinery:wine_fermentation",
  "juice": {
    "type": "white_taiga",
    "amount": 10
  },
  "ingredients": [
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "kubejs:poop"
    }
  ],
  "wine_bottle": {
    "required": true
  },
  "result": {
    "item": "farmingtales:poop_wine",
    "count": 1
  }
})
  })