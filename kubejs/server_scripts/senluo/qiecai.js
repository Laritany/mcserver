ServerEvents.recipes(event =>{

event.custom(
{
  "type": "farmersdelight:cutting",
  "ingredients": [{"item": "minecraft:tropical_fish"}],
  "result": [
    {"item": "kaleidoscope_cookery:sashimi","count": 2},
    {"chance": 0.5,"item": "kubejs:fish_bones"}
  ],
  "tool": {"tag": "forge:tools/knives"}
})

event.custom(
{
  "type": "kaleidoscope_cookery:chopping_board",
  "cut_count": 4,
  "ingredient": {
    "item": "minecraft:beef"
  },
  "model_id": "kaleidoscope_cookery:raw_cow_offal",
  "result": {
    "count": 1,
    "item": "farm_and_charm:minced_beef"
  }
})

event.custom(
{
  "type": "kaleidoscope_cookery:chopping_board",
  "cut_count": 4,
  "ingredient": {
    "item": "minecraft:mutton"
  },
  "model_id": "kaleidoscope_cookery:raw_lamb_chops",
  "result": {
    "count": 1,
    "item": "farm_and_charm:lamb_ham"
  }
})

event.custom(
{
  "type": "kaleidoscope_cookery:chopping_board",
  "cut_count": 4,
  "ingredient": {
    "item": "minecraft:porkchop"
  },
  "model_id": "kaleidoscope_cookery:raw_pork_belly",
  "result": {
    "count": 2,
    "item": "farm_and_charm:bacon"
  }
}
)
})