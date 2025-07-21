ServerEvents.recipes(event =>{
event.custom(//草莓果酱
{
  "type": "create:mixing",
  "heatRequirement": "heated",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"item": "farm_and_charm:strawberry"},
  ],
  "results": [{"fluid": "farmingtales:strawberry_jam","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "bakery:jar"},
    {"fluid": "farmingtales:strawberry_jam","amount": 250}
  ],
  "results": [{"item": "bakery:sweetberry_jam"}]
}
)

event.custom(//浆果酱
{
  "type": "create:mixing",
  "heatRequirement": "heated",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"item": "minecraft:sweet_berries"},
  ],
  "results": [{"fluid": "farmingtales:sweetberry_jam","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "bakery:jar"},
    {"fluid": "farmingtales:sweetberry_jam","amount": 250}
  ],
  "results": [{"item": "bakery:sweetberry_jam"}]
}
)

event.custom(//发光果酱
{
  "type": "create:mixing",
  "heatRequirement": "heated",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"item": "minecraft:glow_berries"},
  ],
  "results": [{"fluid": "farmingtales:glowberry_jam","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "bakery:jar"},
    {"fluid": "farmingtales:glowberry_jam","amount": 250}
  ],
  "results": [{"item": "bakery:glowberry_jam"}]
}
)

event.custom(//苹果酱
{
  "type": "create:mixing",
  "heatRequirement": "heated",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"item": "minecraft:apple"},
  ],
  "results": [{"fluid": "farmingtales:apple_jam","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "bakery:jar"},
    {"fluid": "farmingtales:apple_jam","amount": 250}
  ],
  "results": [{"item": "bakery:apple_jam"}]
}
)

event.custom(//巧克力酱
{
  "type": "create:mixing",
  "heatRequirement": "heated",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"tag": "c:chocolate"},
  ],
  "results": [{"fluid": "farmingtales:chocolate_jam","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "bakery:jar"},
    {"fluid": "farmingtales:chocolate_jam","amount": 250}
  ],
  "results": [{"item": "bakery:chocolate_jam"}]
}
)
})