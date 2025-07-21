ServerEvents.recipes(event =>{
event.custom({
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 16772291,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 15328219,
  "finished_texture": "kaleidoscope_cookery:stockpot/rice_finished",
  "ingredients": [
    {"item": "farmersdelight:rice"},
    {"item": "farmersdelight:rice"},
    {"item": "farmersdelight:rice"},
  ],
  "result": {"count": 3,"item": "farmersdelight:cooked_rice"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//蘸碟
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0xe4cd86,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0xe4cd86,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "candlelight:mushroom_soup"},
    {"item": "candlelight:mozzarella"}
  ],
  "result": {"count": 1,"item": "sob:gravy"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//磨痕
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0x262d74,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0x262d74,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "minecraft:ink_sac"},
    {"item": "minecraft:sculk"},
    {"item": "natures_spirit:olives"}
  ],
  "result": {"count": 1,"item": "sob:ink_soup"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//芦笋汤
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0x262d74,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0x262d74,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "farm_and_charm:butter"},
    {"tag": "c:cheeses"},
    {"item": "biomeswevegone:aloe_vera"}
  ],
  "result": {"count": 1,"item": "sob:asparagus_soup"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//老汤
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0x516f1d,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0x516f1d,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "quark:crab_leg"},
    {"item": "spawn:angler_fish"},
    {"item": "minecraft:dried_kelp"}
  ],
  "result": {"count": 3,"item": "sob:big_soup"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//薯片
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0xecc3a8,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0xecc3a8,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "vintagedelight:cheese_curds"},
    {"item": "minecraft:potato"}
  ],
  "result": {"count": 1,"item": "sob:poutine"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//蘑菇浓汤
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0xe0be46,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0xe0be46,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "vintagedelight:cheese_curds"},
    {"item": "minecraft:brown_mushroom"},
    {"item": "minecraft:red_mushroom"}
  ],
  "result": {"count": 1,"item": "sob:exquisite_mushroom_soup"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//大骨汤
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0xf5f3de,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0xf5f3de,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "minecraft:bone"},
    {"tag": "c:mushrooms"}
  ],
  "result": {"count": 1,"item": "farmersdelight:bone_broth"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//牛肉炖
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0x9e571e,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0x9e571e,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "minecraft:beef"},
    {"item": "minecraft:potato"},
    {"item": "minecraft:carrot"},
  ],
  "result": {"count": 1,"item": "farmersdelight:beef_stew"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//鸡汤
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0xebdccf,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0xebdccf,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "minecraft:chicken"},
    {"item": "minecraft:potato"},
    {"item": "minecraft:carrot"},
    {"item": "farmersdelight:cabbage"}
  ],
  "result": {"count": 1,"item": "farmersdelight:chicken_soup"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//蔬菜汤
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0xebdccf,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0xebdccf,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "minecraft:beetroot"},
    {"item": "minecraft:potato"},
    {"item": "minecraft:carrot"},
    {"item": "farmersdelight:cabbage"}
  ],
  "result": {"count": 1,"item": "farmersdelight:vegetable_soup"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//鱼汤
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0xd16c3b,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0xd16c3b,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "farmersdelight:tomato_sauce"},
    {"item": "farm_and_charm:onion"},
    {"tag": "minecraft:fishes"},
  ],
  "result": {"count": 1,"item": "farmersdelight:fish_stew"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//南瓜汤
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0xd16c3b,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0xd16c3b,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "farmersdelight:pumpkin_slice"},
    {"item": "farmersdelight:pumpkin_slice"},
    {"item": "farmersdelight:pumpkin_slice"},
    {"tag": "c:cheese"},
  ],
  "result": {"count": 1,"item": "farmersdelight:pumpkin_soup"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//鳕鱼汤
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0xd16c3b,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0xd16c3b,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "minecraft:cod"},
    {"item": "minecraft:potato"},
    {"item": "farm_and_charm:tomato"},
    {"item": "minecraft:egg"},
    {"tag": "meadow:salt"},
  ],
  "result": {"count": 1,"item": "farmersdelight:baked_cod_stew"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//面条汤
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0xd16c3b,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0xd16c3b,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "farm_and_charm:raw_pasta"},
    {"item": "incubation:fried_egg"},
    {"item": "minecraft:dried_kelp"},
    {"item": "farm_and_charm:bacon"},
    {"item": "kaleidoscope_cookery:oil"},
    {"tag": "meadow:salt"},
  ],
  "result": {"count": 1,"item": "farmersdelight:noodle_soup"},
"soup_base": "minecraft:water","time": 300
})

event.custom({//盐
  "type": "kaleidoscope_cookery:stockpot",
  "cooking_bubble_color": 0xf3f2f1,
  "cooking_texture": "kaleidoscope_cookery:stockpot/default_cooking",
  "finished_bubble_color": 0xf3f2f1,
  "finished_texture": "kaleidoscope_cookery:stockpot/default_finished",
  "ingredients": [
    {"item": "meadow:limestone"},
    {"item": "meadow:limestone"},
    {"item": "meadow:limestone"}
  ],
  "result": {"count": 9,"item": "meadow:alpine_salt"},
"soup_base": "minecraft:water","time": 900
})
})