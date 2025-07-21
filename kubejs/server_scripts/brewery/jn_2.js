ServerEvents.recipes(event =>{
 event.custom(//小麦啤酒
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:beer_wheat","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:beer_wheat_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_wheat_2","amount": 250}
  ],
  "results": [{"item": "brewery:beer_wheat","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:beer_wheat_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:beer_wheat_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_wheat_3","amount": 250}
  ],
  "results": [{"item": "brewery:beer_wheat","nbt": {"brewery.beer_quality": 3}}]
})

 event.custom(//大麦啤酒
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:beer_barley","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:beer_barley_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_barley_2","amount": 250}
  ],
  "results": [{"item": "brewery:beer_barley","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:beer_barley_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:beer_barley_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_barley_3","amount": 250}
  ],
  "results": [{"item": "brewery:beer_barley","nbt": {"brewery.beer_quality": 3}}]
})

 event.custom(//酒花啤酒
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:beer_hops","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:beer_hops_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_hops_2","amount": 250}
  ],
  "results": [{"item": "brewery:beer_hops","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:beer_hops_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:beer_hops_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_hops_3","amount": 250}
  ],
  "results": [{"item": "brewery:beer_hops","nbt": {"brewery.beer_quality": 3}}]
})

 event.custom(//荨麻啤酒
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:beer_nettle","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:beer_nettle_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_nettle_2","amount": 250}
  ],
  "results": [{"item": "brewery:beer_nettle","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:beer_nettle_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:beer_nettle_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_nettle_3","amount": 250}
  ],
  "results": [{"item": "brewery:beer_nettle","nbt": {"brewery.beer_quality": 3}}]
})

 event.custom(//燕麦啤酒
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:beer_oat","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:beer_oat_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_oat_2","amount": 250}
  ],
  "results": [{"item": "brewery:beer_oat","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:beer_oat_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:beer_oat_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_oat_3","amount": 250}
  ],
  "results": [{"item": "brewery:beer_oat","nbt": {"brewery.beer_quality": 3}}]
})

 event.custom(//海莉啤酒
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:beer_haley","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:beer_haley_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_haley_2","amount": 250}
  ],
  "results": [{"item": "brewery:beer_haley","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:beer_haley_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:beer_haley_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:beer_haley_3","amount": 250}
  ],
  "results": [{"item": "brewery:beer_haley","nbt": {"brewery.beer_quality": 3}}]
})

 event.custom(//乔雅尼克
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_jojannik","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_jojannik_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_jojannik_2","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_jojannik","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_jojannik_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_jojannik_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_jojannik_3","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_jojannik","nbt": {"brewery.beer_quality": 3}}]
})

 event.custom(//莉莉图单一麦芽
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_lilitusinglemalt","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_lilitusinglemalt_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_lilitusinglemalt_2","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_lilitusinglemalt","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_lilitusinglemalt_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_lilitusinglemalt_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_lilitusinglemalt_3","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_lilitusinglemalt","nbt": {"brewery.beer_quality": 3}}]
})
 event.custom(//克里斯特尔·沃克原味
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_cristelwalker","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_cristelwalker_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_cristelwalker_2","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_cristelwalker","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_cristelwalker_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_cristelwalker_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_cristelwalker_3","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_cristelwalker","nbt": {"brewery.beer_quality": 3}}]
})
 event.custom(//陈年麦高艾伦
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_maggoallan","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_maggoallan_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_maggoallan_2","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_maggoallan","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_maggoallan_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_maggoallan_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_maggoallan_3","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_maggoallan","nbt": {"brewery.beer_quality": 3}}]
})
 event.custom(//卡拉斯康标签传统
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_carrasconlabel","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_carrasconlabel_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_carrasconlabel_2","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_carrasconlabel","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_carrasconlabel_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_carrasconlabel_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_carrasconlabel_3","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_carrasconlabel","nbt": {"brewery.beer_quality": 3}}]
})

 event.custom(//AK
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_ak","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_ak_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_ak_2","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_ak","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_ak_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_ak_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_ak_3","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_ak","nbt": {"brewery.beer_quality": 3}}]
})
 event.custom(//高地之星
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_highland_hearth","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_highland_hearth_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_highland_hearth_2","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_highland_hearth","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_highland_hearth_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_highland_hearth_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_highland_hearth_3","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_highland_hearth","nbt": {"brewery.beer_quality": 3}}]
})
 event.custom(//烟熏
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_smokey_reverie","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_smokey_reverie_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_smokey_reverie_2","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_smokey_reverie","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_smokey_reverie_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_smokey_reverie_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_smokey_reverie_3","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_smokey_reverie","nbt": {"brewery.beer_quality": 3}}]
})
 event.custom(//詹姆森麦芽威士忌
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_jamesons_malt","amount": 250}],
  "heatRequirement": "heated","processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_jamesons_malt_2","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_jamesons_malt_2","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_jamesons_malt","nbt": {"brewery.beer_quality": 2}}]
})
 event.custom(
{
  "type": "createdieselgenerators:distillation",
  "ingredients": [{"fluid": "farmingtales:whiskey_jamesons_malt_2","amount": 250}],
  "heatRequirement": "heated",
  "processingTime": 300,
  "results": [{"fluid": "farmingtales:whiskey_jamesons_malt_3","amount": 200}]
})
event.custom(
{
  "type": "create:filling",
  "ingredients": [
    {"item": "brewery:beer_mug"},
    {"fluid": "farmingtales:whiskey_jamesons_malt_3","amount": 250}
  ],
  "results": [{"item": "brewery:whiskey_jamesons_malt","nbt": {"brewery.beer_quality": 3}}]
})
})