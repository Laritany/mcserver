StartupEvents.registry("block", (e) => {
  e.create("farmingtales:poop_wine", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("farmingtales:block/drinks/poop_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/poop_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nausea", 7200, 1, 1.0);
        food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })

  e.create("farmingtales:aegis_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/aegis_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/aegis_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:armor_effect", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })

  e.create("farmingtales:apple_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/apple_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/apple_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("resistance", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:bad_omen_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/villagers_fright")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/bad_omen_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("bad_omen", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:bolvar_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/bolvar_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/bolvar_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:lava_walker", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:bottle_mojang_noir_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/bottle_mojang_noir")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/bottle_mojang_noir"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:experience_effect", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:chenet_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/chenet_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/chenet_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:creeper_effect", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:cherry_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/cherry_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/cherry_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("invisibility", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:chorus_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/chorus_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/chorus_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:teleport", 10, 0, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:clark_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/clark_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/clark_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:double_jump", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:cristel_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/cristel_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/cristel_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("water_breathing", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:eiswein_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/eiswein")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/eiswein"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:frosty_armor", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:glowing_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/glowing_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/glowing_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("glowing", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:jellie_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/jellie_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/jellie_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:jellie", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:jo_special_mixture_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/jo_special_mixture")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/jo_special_mixture"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:climbing_effect", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:kelp_cider_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/kelp_cider")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/kelp_cider"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:water_walker", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:lilitu_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/lilitu_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/lilitu_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:party_effect", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:magnetic_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/magnetic_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/magnetic_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:magnet", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:mellohi_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/mellohi_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/mellohi_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("instant_health", 30, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:noir_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/noir_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/noir_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("jump_boost", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:red_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/red_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/red_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("slow_falling", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:solaris_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/solaris_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/solaris_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("health_boost", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:stal_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/stal_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/stal_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:health_effect", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:strad_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/strad_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/strad_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("night_vision", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:mead_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/mead")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/mead"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("haste", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:creeper_wine_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/creepers_crush")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/creeper_wine"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:creeper_effect", 500, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:apple_cider_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/apple_cider")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/apple_cider"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("strength", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })



    /////////////////////////////////
  e.create("farmingtales:aegis_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/aegis_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/aegis_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:armor_effect", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:apple_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/apple_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/apple_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("resistance", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:bad_omen_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/villagers_fright")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/bad_omen_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("bad_omen", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:bolvar_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/bolvar_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/bolvar_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:lava_walker", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:bottle_mojang_noir_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/bottle_mojang_noir")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/bottle_mojang_noir_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:experience_effect", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:chenet_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/chenet_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/chenet_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:creeper_effect", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:cherry_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/cherry_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/cherry_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("invisibility", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:chorus_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/chorus_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/chorus_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:teleport", 10, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:clark_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/clark_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/clark_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:double_jump", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:cristel_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/cristel_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/cristel_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("water_breathing", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:eiswein_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/eiswein")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/eiswein_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:frosty_armor", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:glowing_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/glowing_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/glowing_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("glowing", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:jellie_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/jellie_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/jellie_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:jellie", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:jo_special_mixture_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/jo_special_mixture")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/jo_special_mixture_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:climbing_effect", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:kelp_cider_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/kelp_cider")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/kelp_cider_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:water_walker", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:lilitu_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/lilitu_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/lilitu_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:party_effect", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:magnetic_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/magnetic_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/magnetic_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:magnet", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:mellohi_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/mellohi_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/mellohi_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("instant_health", 30, 0, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:noir_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/noir_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/noir_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("jump_boost", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:red_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/red_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/red_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("slow_falling", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:solaris_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/solaris_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/solaris_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("health_boost", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:stal_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/stal_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/stal_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:health_effect", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:strad_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/strad_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/strad_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("night_vision", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:mead_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/mead")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/mead_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("haste", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:creeper_wine_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/creepers_crush")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/creeper_wine_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:creeper_effect", 500, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:apple_cider_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/apple_cider")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/apple_cider_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("strength", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })

  e.create("farmingtales:aegis_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/aegis_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/aegis_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:armor_effect", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:apple_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/apple_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/apple_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("resistance", 13000, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:bad_omen_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/villagers_fright")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/bad_omen_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("bad_omen", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:bolvar_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/bolvar_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/bolvar_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:lava_walker", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:bottle_mojang_noir_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/bottle_mojang_noir")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/bottle_mojang_noir_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:experience_effect", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:chenet_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/chenet_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/chenet_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:creeper_effect", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:cherry_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/cherry_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/cherry_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("invisibility", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:chorus_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/chorus_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/chorus_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:teleport", 10, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:clark_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/clark_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/clark_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:double_jump", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:cristel_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/cristel_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/cristel_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("water_breathing", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:eiswein_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/eiswein")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/eiswein_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:frosty_armor", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:glowing_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/glowing_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/glowing_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("glowing", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:jellie_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/jellie_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/jellie_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:jellie", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:jo_special_mixture_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/jo_special_mixture")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/jo_special_mixture_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:climbing_effect", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:kelp_cider_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/kelp_cider")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/kelp_cider_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:water_walker", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:lilitu_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/lilitu_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/lilitu_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:party_effect", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:magnetic_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/magnetic_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/magnetic_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:magnet", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:mellohi_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/mellohi_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/mellohi_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("instant_health", 30, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:noir_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/noir_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/noir_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("jump_boost", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:red_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/red_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/red_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("slow_falling", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:solaris_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/solaris_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/solaris_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("health_boost", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:stal_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/stal_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/stal_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:health_effect", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:strad_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/strad_wine")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/strad_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("night_vision", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:mead_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/mead")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/mead_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("haste", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:creeper_wine_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/creepers_crush")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/creeper_wine_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:creeper_effect", 500, 0, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:apple_cider_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("vinery:item/apple_cider")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/apple_cider_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("strength", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })













  e.create("farmingtales:blazewine_pinot_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/blazewine_pinot")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/blazewine_pinot"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:lava_walker", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:ghastly_grenache_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/ghastly_grenache")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/ghastly_grenache"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:double_jump", 7200, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:improved_lava_fizz_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/improved_lava_fizz")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/improved_lava_fizz"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:improved_gravedigger", 30, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:improved_nether_fizz_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/improved_nether_fizz")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/improved_nether_fizz"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:improved_hearthstone", 30, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:lava_fizz_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/lava_fizz")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/lava_fizz"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:gravedigger", 30, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:nether_fizz_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/nether_fizz")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/nether_fizz"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:hearthstone", 30, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:netherite_nectar_i", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/netherite_nectar")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/netherite_nectar"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:netherite", 400, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 0, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:blazewine_pinot_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/blazewine_pinot")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/blazewine_pinot_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:lava_walker", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:ghastly_grenache_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/ghastly_grenache")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/ghastly_grenache_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:double_jump", 9800, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:improved_lava_fizz_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/improved_lava_fizz")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/improved_lava_fizz_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:improved_gravedigger", 30, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:improved_nether_fizz_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/improved_nether_fizz")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/improved_nether_fizz_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:improved_hearthstone", 30, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:lava_fizz_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/lava_fizz")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/lava_fizz_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:gravedigger", 30, 1, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:nether_fizz_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/nether_fizz")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/nether_fizz_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:hearthstone", 30, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:netherite_nectar_g", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/netherite_nectar")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/netherite_nectar_g"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:netherite", 400, 2, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 1, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
 
  e.create("farmingtales:blazewine_pinot_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/blazewine_pinot")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/blazewine_pinot_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:lava_walker", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:ghastly_grenache_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/ghastly_grenache")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/ghastly_grenache_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("vinery:double_jump", 13000, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:improved_lava_fizz_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/improved_lava_fizz")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/improved_lava_fizz_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:improved_gravedigger", 30, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:improved_nether_fizz_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/improved_nether_fizz")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/improved_nether_fizz_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:improved_hearthstone", 30, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:lava_fizz_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/lava_fizz")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/lava_fizz_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:gravedigger", 30, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:nether_fizz_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/nether_fizz")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/nether_fizz_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:hearthstone", 30, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
  e.create("farmingtales:netherite_nectar_d", "cardinal")
    .box(2, 0, 2, 14, 14, 14)
    .soundType("glass")
    .defaultCutout()
    .model("nethervinery:item/netherite_nectar")
    .item((item) => {
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "farmingtales:item/drinks/netherite_nectar_d"
        },
      });
      item.food((food) => {
        food.alwaysEdible(true);
        food.effect("nethervinery:netherite", 900, 3, 1.0);
                food.effect("brewinandchewin:intoxication", 2400, 0, 1.0);
        food.effect("brewinandchewin:tipsy", 1700, 2, 1.0);
        food.fastToEat(true);
        food.hunger(2)
        food.saturation(1)
        food.eaten(foodeaten=>{
        /**
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("vinery:wine_bottle")//赠送酒瓶一个
        }
      })
      });
      item.useAnimation("drink");
    })
});
