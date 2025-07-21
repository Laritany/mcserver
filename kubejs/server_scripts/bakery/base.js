ServerEvents.recipes(event =>{
    event.custom(//纸杯蛋糕胚
{
  "type": "create:deploying",
  "ingredients": [
    {
      "item": "farmingtales:cake_base"
    },
    {
      "tag": "bakery:knives"
    }
  ],
  "keepHeldItem": true,
  "results": [
    {
      "item": "farmingtales:cup_cake_base"
    }
  ]
}
)
    event.custom(//曲奇胚
{
  "type": "create:pressing",
  "ingredients": [
    {
      "item": "farmingtales:cup_cake_base"
    }
  ],
  "results": [
    {
      "item": "farmingtales:cookie_base"
    }
  ]
}
)

    event.custom(//蛋糕胚
{
  "type": "minecraft:smoking",
  "category": "food",
  "cookingtime": 100,
  "experience": 0.0,
  "ingredient": {
    "item": "bakery:cake_dough"
  },
  "result": "farmingtales:cake_base"
}
)
})