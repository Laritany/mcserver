ServerEvents.recipes(event =>{
    event.custom(//酵母
{
  "type": "create:mixing",
  "heatRequirement": "heated",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"tag": "farm_and_charm:wheat"},
    {"fluid": "minecraft:water","amount": 250}
],
  "results": [{"item": "farm_and_charm:yeast","count": 5},]})

    event.custom(//黄油
{
  "type": "create:mixing",
  "ingredients": [
    {"fluid": "minecraft:milk","amount": 250}
],
  "results": [{"item": "farm_and_charm:butter","count": 2},]})
  })