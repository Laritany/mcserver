ServerEvents.recipes(event =>{

event.custom({//黄油啤酒
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "kitchenkarrot:acorn_wine_base"},
{"item" : "kitchenkarrot:acorn_wine_base"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "minecraft:sugar"},
{"item" : "farm_and_charm:butter"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:beer"}
})

event.custom({//蜂蜜酒
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "kitchenkarrot:mead_base"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "minecraft:honeycomb"},
{"item" : "minecraft:honey_bottle"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:mead"}
})

event.custom({//米酒
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "kitchenkarrot:water"},
{"item" : "kitchenkarrot:water"},
{"item" : "farmersdelight:cooked_rice"},
{"item" : "farmersdelight:cooked_rice"},
{"item" : "farmersdelight:cooked_rice"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:rice_wine"}
})

event.custom({//花酒
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"tag" : "kubejs:yz"},
{"item" : "brewery:hops"},
{"item" : "herbalbrews:dried_green_tea"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "minecraft:lily_of_the_valley"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:pale_jane"}
})

event.custom({//蛋酒
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"tag" : "c:eggs"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "kitchenkarrot:milk"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:egg_grog"}
})

event.custom({//闪光糖浆
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "autumnity:syrup_bottle"},
{"item" : "autumnity:syrup_bottle"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:glittering_grenadine"}
})

event.custom({//含糖朗姆酒
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "minecraft:sugar_cane"},
{"item" : "autumnity:syrup_bottle"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "minecraft:sweet_berries"},
{"item" : "minecraft:honeycomb"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:saccharine_rum"}
})

event.custom({//拿铁
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "minecraft:sugar_cane"},
{"item" : "herbalbrews:coffee_beans"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "kitchenkarrot:milk"},
{"item" : "kitchenkarrot:water"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:salty_folly"}
})

event.custom({//血腥玛丽
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "minecraft:poisonous_potato"},
{"item" : "minecraft:fermented_spider_eye"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:bloody_mary"}
})

event.custom({//红朗姆
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "minecraft:sugar_cane"},
{"item" : "autumnity:syrup_bottle"},
{"item" : "kitchenkarrot:water"},
{"item" : "kitchenkarrot:water"},
{"item" : "minecraft:honeycomb"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:red_rum"}
})

event.custom({//红脚趾
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "minecraft:sweet_berries"},
{"item" : "farm_and_charm:butter"},
{"item" : "kitchenkarrot:water"},
{"item" : "kitchenkarrot:water"},
{"item" : "minecraft:beetroot"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:strongroot_ale"}
})

event.custom({//白脚趾
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "kitchenkarrot:birch_sap"},
{"item" : "farm_and_charm:butter"},
{"item" : "kitchenkarrot:water"},
{"item" : "kitchenkarrot:water"},
{"item" : "kitchenkarrot:acorn_wine_base"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:steel_toe_stout"}
})

event.custom({//枯萎糟粕
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "minecraft:wither_rose"},
{"item" : "minecraft:wither_rose"},
{"item" : "kitchenkarrot:water"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:withering_dross"}
})

event.custom({//恐惧蛋酒
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "minecraft:egg"},
{"item" : "minecraft:sculk"},
{"item" : "minecraft:cactus"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:dread_nog"}
})

event.custom({//苹果酒
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "vinery:apple_mash"},
{"item" : "vinery:apple_mash"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"sob:hard_cider"}
})

event.custom({//特久特
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "atmospheric:aloe_leaves"},
{"item" : "atmospheric:yucca_fruit"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"sob:tequila"}
})

event.custom({//爆炸酒
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "savage_and_ravage:creeper_spores"},
{"item" : "minecraft:gunpowder"},
{"item" : "farm_and_charm:butter"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"sob:creeper_drink"}
})

event.custom({//爆炸酒
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "beachparty:coconut_open"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "minecraft:sugar_cane"},
{"item" : "autumnity:syrup_bottle"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "brewery:beer_mug"}
],"craftingtime":1200},
"result":{"item":"brewinandchewin:vodka"}
})

event.custom({//苦茶
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "herbalbrews:tea_blossom"},
{"item" : "herbalbrews:tea_blossom"},
{"item" : "herbalbrews:tea_blossom"},
{"item" : "kitchenkarrot:water"},
{"item" : "kitchenkarrot:water"},
{"item" : "minecraft:glass_bottle"}
],"craftingtime":1200},
"result":{"item":"sob:bitter_tea"}
})

event.custom({//苍白茶
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"tag" : "kubejs:yz"},
{"item" : "farm_and_charm:strawberry"},
{"item" : "atmospheric:dragon_fruit"},
{"item" : "minecraft:sugar_cane"},
{"item" : "kitchenkarrot:water"},
{"item" : "minecraft:glass_bottle"}
],"craftingtime":1200},
"result":{"item":"sob:pale_daiquiri"}
})

event.custom({//芦荟茶
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "atmospheric:aloe_leaves"},
{"item" : "atmospheric:aloe_leaves"},
{"item" : "herbalbrews:dried_green_tea"},
{"item" : "minecraft:sugar_cane"},
{"item" : "kitchenkarrot:water"},
{"item" : "minecraft:glass_bottle"}
],"craftingtime":1200},
"result":{"item":"sob:aloe_tea"}
})

event.custom({//桦树啤酒
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "kitchenkarrot:birch_sap"},
{"item" : "kitchenkarrot:birch_sap"},
{"item" : "kitchenkarrot:acorn_wine_base"},
{"item" : "kitchenkarrot:acorn_wine_base"},
{"item" : "minecraft:glass_bottle"}
],"craftingtime":1200},
"result":{"item":"sob:birch_beer"}
})

event.custom({//闪耀浆果
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "atmospheric:currant"},
{"item" : "brewinandchewin:glow_berry_marmalade"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "kitchenkarrot:mead_base"},
{"item" : "minecraft:glass_bottle"}
],"craftingtime":1200},
"result":{"item":"sob:glittering_gloop"}
})

event.custom({//建筑者奶昔
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "kitchenkarrot:milk"},
{"item" : "kitchenkarrot:milk"},
{"item" : "atmospheric:yucca_fruit"},
{"item" : "minecraft:glass_bottle"}
],"craftingtime":1200},
"result":{"item":"sob:builder_smoothie"}
})

event.custom({//建筑者奶昔
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "autumnity:foul_berries"},
{"item" : "atmospheric:dragon_fruit"},
{"item" : "atmospheric:yucca_fruit"},
{"item" : "minecraft:glass_bottle"}
],"craftingtime":1200},
"result":{"item":"sob:cactus_juice"}
})

event.custom({//橘子汁
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "minecraft:sugar"},
{"item" : "atmospheric:orange"},
{"item" : "atmospheric:orange"},
{"item" : "kitchenkarrot:water"},
{"item" : "minecraft:glass_bottle"}
],"craftingtime":1200},
"result":{"item":"sob:orange_juice"}
})

event.custom({//晨曦
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "kitchenkarrot:ice_cubes"},
{"item" : "atmospheric:blood_orange"},
{"item" : "atmospheric:blood_orange"},
{"item" : "minecraft:sweet_berries"},
{"item" : "kitchenkarrot:water"},
{"item" : "minecraft:glass_bottle"}
],"craftingtime":1200},
"result":{"item":"sob:sunrise_seltzer"}
})

event.custom({//奶酪
"type": "kitchenkarrot:brewing_barrel",
"content":{"recipe":[
{"item" : "meadow:rennet"},
{"item" : "kitchenkarrot:milk"},
{"item" : "kitchenkarrot:milk"},
{"item" : "kitchenkarrot:milk"},
{"item" : "kitchenkarrot:milk"},
{"item" : "kitchenkarrot:milk"},
],"craftingtime":2400},
"result":{"item":"kitchenkarrot:cheese_wheel"}
})
})
