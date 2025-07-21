ServerEvents.recipes(event =>{
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"fluid": "create:honey","amount": 250},
    {"fluid": "farmingtales:apple_juice","amount": 10}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:mead","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:mead","amount": 250}
  ],
  "results": [{"item": "vinery:mead"}]
}
)

//苹果西打酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"fluid": "farmingtales:apple_juice","amount": 200}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:apple_cider","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:apple_cider","amount": 250}
  ],
  "results": [{"item": "vinery:apple_cider"}]
}
)

//苹果葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"fluid": "farmingtales:apple_juice","amount": 200}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:apple_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:apple_wine","amount": 250}
  ],
  "results": [{"item": "vinery:apple_wine"}]
}
)

//唱片白葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"item": "minecraft:glowstone_dust"},
    {"fluid": "farmingtales:white_grape_juice","amount": 50}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:mellohi_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:mellohi_wine","amount": 250}
  ],
  "results": [{"item": "vinery:mellohi_wine"}]
}
)

//发光白葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:glow_berries"},
    {"fluid": "farmingtales:white_grape_juice","amount": 100}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:glowing_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:glowing_wine","amount": 250}
  ],
  "results": [{"item": "vinery:glowing_wine"}]
}
)

//阳光白葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"fluid": "create:honey","amount": 250},
    {"item": "minecraft:sweet_berries"},
    {"fluid": "farmingtales:white_grape_juice","amount": 150}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:solaris_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:solaris_wine","amount": 250}
  ],
  "results": [{"item": "vinery:solaris_wine"}]
}
)

//耶诺红葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:sweet_berries"},
    {"fluid": "farmingtales:red_grape_juice","amount": 120}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:noir_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:noir_wine","amount": 250}
  ],
  "results": [{"item": "vinery:noir_wine"}]
}
)

//红葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"fluid": "farmingtales:red_grape_juice","amount": 100}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:red_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:red_wine","amount": 250}
  ],
  "results": [{"item": "vinery:red_wine"}]
}
)

//唱片红葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"item": "minecraft:cocoa_beans"},
    {"fluid": "farmingtales:red_grape_juice","amount": 80}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:strad_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:strad_wine","amount": 250}
  ],
  "results": [{"item": "vinery:strad_wine"}]
}
)

//樱桃葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "vinery:cherry"},
    {"fluid": "farmingtales:red_grape_juice","amount": 150}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:cherry_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:cherry_wine","amount": 250}
  ],
  "results": [{"item": "vinery:cherry_wine"}]
}
)

//信徒红葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"item": "minecraft:feather"},
    {"item": "minecraft:blaze_rod"},
    {"fluid": "farmingtales:red_grape_juice","amount": 250}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:cristel_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:cristel_wine","amount": 250}
  ],
  "results": [{"item": "vinery:cristel_wine"}]
}
)

//苦力怕的威压
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:gunpowder"},
    {"fluid": "farmingtales:white_savanna_grape_juice","amount": 100}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:creepers_crush","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:creepers_crush","amount": 250}
  ],
  "results": [{"item": "vinery:creepers_crush"}]
}
)

//海带葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:kelp"},
    {"fluid": "farmingtales:white_savanna_grape_juice","amount": 140}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:kelp_cider","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:kelp_cider","amount": 250}
  ],
  "results": [{"item": "vinery:kelp_cider"}]
}
)

//图莉莉葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:sweet_berries"},
    {"fluid": "create:honey","amount": 250},
    {"fluid": "farmingtales:red_savanna_grape_juice","amount": 140}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:lilitu_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:lilitu_wine","amount": 250}
  ],
  "results": [{"item": "vinery:lilitu_wine"}]
}
)

//jo特调
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:fermented_spider_eye"},
    {"fluid": "farmingtales:red_savanna_grape_juice","amount": 100}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:jo_special_mixture","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:jo_special_mixture","amount": 250}
  ],
  "results": [{"item": "vinery:jo_special_mixture"}]
}
)

//冰酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:snowball"},
    {"fluid": "farmingtales:white_taiga_grape_juice","amount": 100}
  ],
  
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:eiswein","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:eiswein","amount": 250}
  ],
  "results": [{"item": "vinery:eiswein"}]
}
)

//神盾葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:iron_ingot"},
    {"item": "minecraft:sugar"},
    {"item": "minecraft:kelp"},
    {"fluid": "farmingtales:white_taiga_grape_juice","amount": 70}
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:aegis_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:aegis_wine","amount": 250}
  ],
  "results": [{"item": "vinery:aegis_wine"}]
}
)

//伯瓦尔什锦红葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"fluid": "create:honey","amount": 250},
    {"item": "vinery:cherry"},
    {"fluid": "farmingtales:red_taiga_grape_juice","amount": 60}
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:bolvar_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:bolvar_wine","amount": 250}
  ],
  "results": [{"item": "vinery:bolvar_wine"}]
}
)

//紫颂果酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:popped_chorus_fruit"},
    {"fluid": "farmingtales:red_taiga_grape_juice","amount": 80}
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:chorus_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:chorus_wine","amount": 250}
  ],
  "results": [{"item": "vinery:chorus_wine"}]
}
)

//村民梦魇
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:arrow"},
    {"fluid": "farmingtales:white_jungle_grape_juice","amount": 80}
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:villagers_fright","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:villagers_fright","amount": 250}
  ],
  "results": [{"item": "vinery:villagers_fright"}]
}
)

//克拉克白葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"fluid": "farmingtales:white_jungle_grape_juice","amount": 100}
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:clark_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:clark_wine","amount": 250}
  ],
  "results": [{"item": "vinery:clark_wine"}]
}
)

//磁石葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:iron_ingot"},
    {"fluid": "farmingtales:red_jungle_grape_juice","amount": 100}
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:magnetic_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:magnetic_wine","amount": 250}
  ],
  "results": [{"item": "vinery:magnetic_wine"}]
}
)

//stal唱片葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:sugar"},
    {"item": "minecraft:cocoa_beans"},
    {"fluid": "farmingtales:red_jungle_grape_juice","amount": 80}
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:stal_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:stal_wine","amount": 250}
  ],
  "results": [{"item": "vinery:stal_wine"}]
}
)

//香奈葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:spider_eye"},
    {"fluid": "create:honey","amount": 250},
    {"fluid": "farmingtales:red_jungle_grape_juice","amount": 120}
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:chenet_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:chenet_wine","amount": 250}
  ],
  "results": [{"item": "vinery:chenet_wine"}]
}
)

//mojiang诺耶葡萄酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "vinery:cherry"},
    {"item": "atmospheric:dragon_fruit"},
    {"fluid": "farmingtales:red_wine","amount": 250},
    {"fluid": "create:honey","amount": 250},
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:bottle_mojang_noir","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:bottle_mojang_noir","amount": 250}
  ],
  "results": [{"item": "vinery:bottle_mojang_noir"}]
}
)

//猫咪酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"fluid": "farmingtales:apple_wine","amount": 250},
    {"fluid": "farmingtales:bolvar_wine","amount": 250},
    {"fluid": "farmingtales:white_grape_juice","amount": 200},
    {"fluid": "farmingtales:chenet_wine","amount": 250}
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:jellie_wine","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:jellie_wine","amount": 250}
  ],
  "results": [{"item": "vinery:jellie_wine"}]
}
)

//下界合金花蜜酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:netherite_scrap"},
    {"fluid": "farmingtales:crimson_grape_juice","amount": 500}
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:netherite_nectar","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:netherite_nectar","amount": 250}
  ],
  "results": [{"item": "nethervinery:netherite_nectar"}]
}
)

//下界气泡酒
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:warped_fungus"},
    {"item": "minecraft:crimson_fungus"},
    {"fluid": "farmingtales:crimson_grape_juice","amount": 120}
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:nether_fizz","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:nether_fizz","amount": 250}
  ],
  "results": [{"item": "nethervinery:nether_fizz"}]
}
)

//恐怖海纳歌
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:ghast_tear"},
    {"fluid": "farmingtales:warped_grape_juice","amount": 100}
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:ghastly_grenache","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:ghastly_grenache","amount": 250}
  ],
  "results": [{"item": "nethervinery:ghastly_grenache"}]
}
)

//熔岩气泡
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"fluid": "minecraft:lava","amount": 250},
    {"fluid": "farmingtales:warped_grape_juice","amount": 250}
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:lava_fizz","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:lava_fizz","amount": 250}
  ],
  "results": [{"item": "nethervinery:lava_fizz"}]
}
)


//炽热葡萄
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "minecraft:blaze_powder"},
    {"fluid": "farmingtales:crimson_grape_juice","amount": 250}
  ],
  "processingTime": 2400,
  "results": [{"fluid": "farmingtales:blazewine_pinot","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "vinery:wine_bottle"},
    {"fluid": "farmingtales:blazewine_pinot","amount": 250}
  ],
  "results": [{"item": "nethervinery:blazewine_pinot"}]
}
)


//池沼动力
event.custom(
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "kubejs:poop"}
  ],
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:liquefied_poop","amount": 250}]
}
)
  })