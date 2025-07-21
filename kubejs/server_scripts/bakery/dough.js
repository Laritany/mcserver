ServerEvents.recipes(event =>{
event.custom(//面团
{
  "type": "create:mixing",
  "ingredients": [
    {"item": "farm_and_charm:flour"},
    {"item": "farm_and_charm:yeast"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "results": [
    {"item": "farm_and_charm:dough"}
  ]
}
)
event.custom(//面团
{
  "type": "create:mixing",
  "ingredients": [
    {"item": "cornexpansion:corn_flour"},
    {"item": "farm_and_charm:yeast"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "results": [
    {"item": "cornexpansion:corn_dough"}
  ]
}
)
event.custom(//甜面团
{
  "type": "create:mixing",
  "ingredients": [
    {"item": "farm_and_charm:flour"},
    {"item": "minecraft:sugar"},
    {"tag": "c:eggs"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "results": [
    {"item": "bakery:sweet_dough"}
  ]
}
)
event.custom(//蛋糕面团
{
  "type": "create:mixing",
  "ingredients": [
    {"item": "farm_and_charm:flour"},
    {"item": "minecraft:sugar"},
    {"tag": "c:eggs"},
    {"fluid": "minecraft:milk","amount": 250}
  ],
  "results": [
    {"item": "bakery:cake_dough"}
  ]
}
)
})