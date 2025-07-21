ServerEvents.recipes(event =>{
    event.custom(//小卖啤酒
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:beer_wheat_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:beer_wheat","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_wheat","amount": 250}
  ],
  "results": [{"item": "brewery:beer_wheat"}]
}
)

    event.custom(//大麦啤酒
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:beer_barley_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:beer_barley","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_barley","amount": 250}
  ],
  "results": [{"item": "brewery:beer_barley",}]
}
)

    event.custom(//酒花啤酒
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:beer_hops_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:beer_hops","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_hops","amount": 250}
  ],
  "results": [{"item": "brewery:beer_hops"}]
}
)

    event.custom(//荨麻啤酒
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:beer_nettle_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:beer_nettle","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_nettle","amount": 250}
  ],
  "results": [{"item": "brewery:beer_nettle"}]
}
)


    event.custom(//燕麦啤酒
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:beer_oat_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:beer_oat","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_oat","amount": 250}
  ],
  "results": [{"item": "brewery:beer_oat"}]
}
)



    event.custom(//海莉啤酒
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:beer_haley_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:beer_haley","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_haley","amount": 250}
  ],
  "results": [{"item": "brewery:beer_haley"}]
}
)


    event.custom(//乔克威士忌
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:whiskey_jo_jannik_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:whiskey_jojannik","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_jojannik","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_jojannik"}]
}
)

    event.custom(//莉莉图威士忌
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:whiskey_lilitu_single_malt_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:whiskey_lilitusinglemalt","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_lilitusinglemalt","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_lilitusinglemalt"}]
}
)

    event.custom(//沃克
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:whiskey_cristel_walker_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:whiskey_cristelwalker","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_cristelwalker","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_cristelwalker"}]
}
)


    event.custom(//麦哲伦
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:whiskey_maggoallan_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:whiskey_maggoallan","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_maggoallan","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_maggoallan"}]
}
)


    event.custom(//卡拉斯康
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:whiskey_carrascon_label_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:whiskey_carrasconlabel","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_carrasconlabel","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_carrasconlabel"}]
}
)


    event.custom(//AK
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:whiskey_ak_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:whiskey_ak","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_ak","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_ak"}]
}
)


    event.custom(//高地之星
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:whiskey_highland_hearth_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:whiskey_highland_hearth","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_highland_hearth","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_highland_hearth"}]
}
)


    event.custom(//烟熏
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:whiskey_smoky_reverie_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:whiskey_smokey_reverie","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_smokey_reverie","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_smokey_reverie"}]
}
)

    event.custom(//詹姆斯
{
  "type": "createdieselgenerators:bulk_fermenting",
  "ingredients": [
    {"item": "farmingtales:whiskey_jamesons_malt_ingredients"},
    {"fluid": "minecraft:water","amount": 250}
  ],
  "heatRequirement": "heated",
  "processingTime": 600,
  "results": [{"fluid": "farmingtales:whiskey_jamesons_malt","amount": 250}]
}
)
 event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_jamesons_malt","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_jamesons_malt"}]
}
)
})