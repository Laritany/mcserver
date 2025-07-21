ServerEvents.recipes(event =>{
event.custom({//奶酪火锅
  "type": "farmersdelight:cooking",
  "cookingtime": 600,
  "experience": 2.0,
  "ingredients": [
    {"tag": "meadow:cheese_blocks"},
    {"item": "nethervinery:blazewine_pinot"},
    {"item": "minecraft:potato"},
    {"item": "wildernature:bison_meat"}
  ],
  "container": {"item": "minecraft:cauldron"},
  "result": {"item": "brewinandchewin:fiery_fondue_pot"}
})
event.custom({//火鸡肉
  "type": "farmersdelight:cooking",
  "cookingtime": 600,
  "experience": 2.0,
  "ingredients": [
    {"item": "autumnity:turkey"},
    {"item": "minecraft:potato"},
    {"item": "farmersdelight:rice"},
    {"item": "farm_and_charm:onion"}
  ],
  "container": {"item": "minecraft:cauldron"},
  "result": {"item": "sob:roast_turkey_block"}
})
event.custom({//沙拉
  "type": "farm_and_charm:crafting_bowl",
  "ingredients": [
    {"item": "minecraft:cactus"},
    {"item": "farm_and_charm:lettuce"},
    {"item": "minecraft:bowl"}
  ],
  "result": {"item": "sob:spiky_salad","count": 1}
})
event.custom({//甜甜圈
  "type": "farmersdelight:cooking",
  "cookingtime": 300,
  "experience": 2.0,
  "ingredients": [
    {"item": "autumnity:syrup_bottle"},
    {"item": "bakery:cake_dough"}
  ],
  "result": {"item": "sob:maple_donut","count": 3}
})
event.custom(//甜甜圈
  {
  "type": "minecraft:crafting_shaped",
  "key": {
    "M": {"item": "sob:maple_donut"},
    "P": {"item": "minecraft:paper"}
  },
  "pattern": [
    "MMM",
    "MMM",
    " P "
  ],
  "result": {"item": "sob:donut_box_block"}
}
)
event.custom({//果冻
  "type": "farmersdelight:cooking",
  "cookingtime": 300,
  "experience": 2.0,
  "ingredients": [
    {"item": "minecraft:glow_berries"},
    {"item": "minecraft:slime_ball"}
  ],
  "container": {"item": "minecraft:glass_bottle"},
  "result": {"item": "brewinandchewin:glow_berry_marmalade","count": 2}
})
event.custom({//果冻
  "type": "farmersdelight:cooking",
  "cookingtime": 300,
  "experience": 2.0,
  "ingredients": [
    {"item": "minecraft:sweet_berries"},
    {"item": "minecraft:slime_ball"}
  ],
  "container": {"item": "minecraft:glass_bottle"},
  "result": {"item": "brewinandchewin:sweet_berry_jam","count": 2}
})
event.custom({//果冻
  "type": "farmersdelight:cooking",
  "cookingtime": 300,
  "experience": 2.0,
  "ingredients": [
    {"item": "minecraft:apple"},
    {"item": "minecraft:slime_ball"}
  ],
  "container": {"item": "minecraft:glass_bottle"},
  "result": {"item": "brewinandchewin:apple_jelly","count": 2}
})



event.custom({//沙拉
  "type": "farm_and_charm:crafting_bowl",
  "ingredients": [
    {"item": "autumnity:foul_berries"},
    {"item": "farm_and_charm:lettuce"},
    {"item": "minecraft:bowl"}
  ],
  "result": {"item": "sob:foul_salad","count": 1}
})

event.custom({//
  "type": "farmersdelight:cooking",
  "cookingtime": 600,
  "experience": 2.0,
  "ingredients": [
    {"item": "quark:crab_leg"},
    {"item": "spawn:angler_fish"},
    {"item": "minecraft:dried_kelp"}
  ],
  "container": {"item": "minecraft:bucket"},
  "result": {"item": "sob:big_soup_block","count": 1}
})
event.custom({//
  "type": "farmersdelight:cooking",
  "cookingtime": 200,
  "experience": 2.0,
  "ingredients": [
    {"item": "create:cinder_flour"},
    {"item": "farm_and_charm:butter"},
    {"item": "minecraft:egg"}
  ],
  "result": {"item": "sob:cinder_bread","count": 1}
})
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "M": {"item": "minecraft:gold_nugget"},
    "P": {"item": "minecraft:potato"}
  },
  "pattern": [
    "MMM",
    "MPM",
    "MMM"
  ],
  "result": {"item": "sob:golden_potato"}
})
})