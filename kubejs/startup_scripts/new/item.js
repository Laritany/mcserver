StartupEvents.registry("item", (e) => {
  e.create("farmingtales:blind_box_cloth")
  .tooltip('§7右键拆开包裹')
  .texture("farmingtales:item/blind_box_cloth");
  
  e.create("farmingtales:blind_box_trim_templates")
  .texture("farmingtales:item/blind_box_trim_templates");

  e.create("farmingtales:ne_upgrade_smithing_template")
  .tooltip('§7右键拆开包裹')
  .texture("farmingtales:item/ne_upgrade_smithing_template");

  e.create("farmingtales:blind_box_banner_pattern")
  .tooltip('§7右键拆开包裹')
  .texture("farmingtales:item/blind_box_banner_pattern");

  e.create("farmingtales:blind_box_flower")
  .tooltip('§7右键拆开包裹')
  .texture("farmingtales:item/blind_box_flower");

  e.create("farmingtales:house_cesuo")
  .tooltip('§f\uDB80\uDDC9 §7地契:撤硕')
  .texture("farmingtales:item/house");
  
  e.create("farmingtales:house_caodianxiaowu")
  .tooltip('§f\uDB80\uDDC9 §7地契:草甸小屋')
  .texture("farmingtales:item/house");

  e.create("farmingtales:house_dangaodian")
  .tooltip('§f\uDB80\uDDC9 §7地契:蛋糕店')
  .texture("farmingtales:item/house");

  e.create("farmingtales:house_gaibancangku")
  .tooltip('§f\uDB80\uDDC9 §7地契:仓库')
  .texture("farmingtales:item/house");

  e.create("farmingtales:house_jiuguan")
  .tooltip('§f\uDB80\uDDC9 §7地契:啤酒馆')
  .texture("farmingtales:item/house");

  e.create("farmingtales:house_juminxiaowu")
  .tooltip('§f\uDB80\uDDC9 §7地契:居民小屋')
  .texture("farmingtales:item/house");

  e.create("farmingtales:house_kafei")
  .tooltip('§f\uDB80\uDDC9 §7地契:咖啡店')
  .texture("farmingtales:item/house");

  e.create("farmingtales:house_mianbaoxiaodian")
  .tooltip('§f\uDB80\uDDC9 §7地契:面包店')
  .texture("farmingtales:item/house");

  e.create("farmingtales:house_niangjiuxiaowu")
  .tooltip('§f\uDB80\uDDC9 §7地契:酿酒小作坊')
  .texture("farmingtales:item/house");

  e.create("farmingtales:house_zahuoshangdian")
  .tooltip('§f\uDB80\uDDC9 §7地契:杂货店')
  .texture("farmingtales:item/house");

  e.create("farmingtales:house_zc")
  .tooltip('§f\uDB80\uDDC9 §7地契:温暖的家')
  .texture("farmingtales:item/house");
});
StartupEvents.registry("block", (e) => {
//蛋糕胚
  e.create("farmingtales:cake_base", "cardinal")
    .box(1, 0, 1, 15, 8, 15)
    .soundType("wood")
    .defaultCutout()
    .model("farmingtales:block/bakery/cake_base")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/bakery/cake_base",
        },
      });
      item.food((food) => {
        food.hunger(3)
        food.saturation(0.2)
      });
    })
});
StartupEvents.registry("block", (e) => {
//曲奇胚
  e.create("farmingtales:cookie_base", "cardinal")
    .box(1, 0, 1, 15, 2, 15)
    .soundType("wood")
    .defaultCutout()
    .model("farmingtales:block/bakery/cookie_base")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/bakery/cookie_base",
        },
      });
      item.food((food) => {
        food.hunger(3)
        food.saturation(0.2)
      });
      })
});
StartupEvents.registry("block", (e) => {
//纸杯蛋糕胚
  e.create("farmingtales:cup_cake_base", "cardinal")
    .box(1, 0, 1, 15, 8, 15)
    .soundType("wood")
    .defaultCutout()
    .model("farmingtales:block/bakery/cup_cake_base")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/bakery/cup_cake_base",
        },
      });
      item.food((food) => {
        food.hunger(3)
        food.saturation(0.2)
      });
});
});
StartupEvents.registry("block", (e) => {
//草莓纸杯蛋糕
  e.create("farmingtales:strawberry_cupcake", "cardinal")
    .box(1, 0, 1, 15, 8, 15)
    .soundType("wood")
    .defaultCutout()
    .model("farmingtales:block/bakery/strawberry_cupcake")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/bakery/strawberry_cupcake",
        },
      });
      item.food((food) => {
        food.hunger(12)
        food.saturation(0.8)
      });
});
//浆果纸杯蛋糕
  e.create("farmingtales:sweetberry_cupcake", "cardinal")
    .box(1, 0, 1, 15, 8, 15)
    .soundType("wood")
    .defaultCutout()
    .model("farmingtales:block/bakery/sweetberry_cupcake")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/bakery/sweetberry_cupcake",
        },
      });
      item.food((food) => {
        food.hunger(12)
        food.saturation(0.8)
      });
});
//苹果纸杯蛋糕
  e.create("farmingtales:apple_cupcake", "cardinal")
    .box(1, 0, 1, 15, 8, 15)
    .soundType("wood")
    .defaultCutout()
    .model("farmingtales:block/bakery/apple_cupcake")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/bakery/apple_cupcake",
        },
      });
      item.food((food) => {
        food.hunger(12)
        food.saturation(0.8)
      });
});

//草莓曲奇
  e.create("farmingtales:strawberry_cookie", "cardinal")
    .box(1, 0, 1, 15, 2, 15)
    .soundType("wood")
    .defaultCutout()
    .model("farmingtales:block/bakery/strawberry_cookie")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/bakery/strawberry_cookie",
        },
      });
      item.food((food) => {
        food.hunger(12)
        food.saturation(1.0)
      });
});
//浆果曲奇
  e.create("farmingtales:sweetberry_cookie", "cardinal")
    .box(1, 0, 1, 15, 2, 15)
    .soundType("wood")
    .defaultCutout()
    .model("farmingtales:block/bakery/sweetberry_cookie")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/bakery/sweetberry_cookie",
        },
      });
      item.food((food) => {
        food.hunger(12)
        food.saturation(1.0)
      });
});
//苹果曲奇
  e.create("farmingtales:chocolate_cookie", "cardinal")
    .box(1, 0, 1, 15, 2, 15)
    .soundType("wood")
    .defaultCutout()
    .model("farmingtales:block/bakery/chocolate_cookie")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/bakery/chocolate_cookie",
        },
      });
      item.food((food) => {
        food.hunger(12)
        food.saturation(1.0)
      });
});
});
StartupEvents.registry("item",event=>{
    event.create("farmingtales:kd","sword")
  .tooltip('§7这瓜保熟吗？')
	.maxDamage(380)
	.attackDamageBonus(4)
  .texture("farmingtales:item/kd");

  event.create("farmingtales:car_key")
    .texture("farmingtales:item/car_key")
    .maxStackSize(1)
    .rarity("rare");
})
ItemEvents.modification(event => {
  event.modify('kubejs:money', item => {
    item.maxStackSize = 1000000})
  event.modify('kubejs:coin', item => {
    item.maxStackSize = 1000000})
})

BlockEvents.modification(event => {
    event.modify("create:package", block => {
        block.hardness(1145141919810)
        block.unbreakable(-1)
    });
});