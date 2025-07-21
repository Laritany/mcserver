StartupEvents.registry("item",event=>{
    event.create("kubejs:poop")
    .food(foodbuilder=>{
        foodbuilder.hunger(2)//饱食度
        foodbuilder.saturation(1)//饱和度
        foodbuilder.meat()//可以喂给宠物
        foodbuilder.effect("minecraft:nausea",20*8,3,0.8)//20.8 8秒，4效果，80%概率 
    })
})
StartupEvents.registry("item",event=>{
  event.create("kubejs:phf")
  .food(foodbuilder=>{
      foodbuilder.hunger(12)//饱食度
      foodbuilder.saturation(2)//饱和度
      foodbuilder.meat()//可以喂给宠物
      foodbuilder.effect("minecraft:nausea",20*8,1,0.1)//20.8 8秒，2效果，10%概率
      foodbuilder.effect("minecraft:hunger",20*10,4,0.8)
      foodbuilder.effect("minecraft:poison",20*20,1,0.2)
      foodbuilder.eaten(foodeaten=>{
        /**
  
        * @tpye {$player}
         */
        let player = foodeaten.getPlayer()
        if (player != null){
          player.give("minecraft:bowl")//赠送碗一个
        }
      })
  })
})
StartupEvents.registry("item",event=>{
  event.create("kubejs:fish_bones")
  .food(foodbuilder=>{
      foodbuilder.hunger(1)//饱食度
      foodbuilder.saturation(0.1)//饱和度
      foodbuilder.meat()//可以喂给宠物
      foodbuilder.effect("minecraft:instant_damage",1*1,0,1.0)
  })
})
StartupEvents.registry("item",event=>{
  event.create("kubejs:seed_porridge")
  .food(foodbuilder=>{
      foodbuilder.hunger(6)//饱食度
      foodbuilder.saturation(0.6)//饱和度
  })
})
  ItemEvents.modification(event => {
    event.modify('minecraft:rabbit_foot', item => {
      item.foodProperties = food => {
          food.hunger(2)//饱食度
          food.saturation(0.1)//饱和度
          food.fastToEat()//吃的快
      }
    })
  })
ItemEvents.modification(event => {
  event.modify('minecraft:brown_mushroom', item => {
    item.foodProperties = food => {
        food.hunger(1)//饱食度
        food.saturation(0.1)//饱食度
        food.fastToEat()//吃的快
    }
  })
})
ItemEvents.modification(event => {
    event.modify('minecraft:red_mushroom', item => {
      item.foodProperties = food => {
        food.hunger(1)//饱食度
        food.saturation(0.1)//饱食度
        food.fastToEat()//吃的快
      }
    })
  })
  ItemEvents.modification(event => {
    event.modify('natures_spirit:shiitake_mushroom', item => {
      item.foodProperties = food => {
        food.hunger(1)//饱食度
        food.saturation(0.1)//饱食度
        food.fastToEat()//吃的快
      }
    })
  })
  ItemEvents.modification(event => {
    event.modify('minecraft:warped_fungus', item => {
      item.foodProperties = food => {
        food.hunger(1)//饱食度
        food.saturation(0.1)//饱食度
        food.fastToEat()//吃的快
      }
    })
  })
  ItemEvents.modification(event => {
    event.modify('minecraft:crimson_fungus', item => {
      item.foodProperties = food => {
        food.hunger(1)//饱食度
        food.saturation(0.1)//饱食度
        food.fastToEat()//吃的快
      }
    })
  })
  ItemEvents.modification(event => {
    event.modify('minecraft:sugar', item => {
      item.foodProperties = food => {
        food.hunger(1)//饱食度
        food.saturation(0.1)//饱食度
        food.fastToEat()//吃的快
      }
    })
  })
  ItemEvents.modification(event => {
    event.modify('minecraft:fermented_spider_eye', item => {
      item.foodProperties = food => {
          food.hunger(1)//饱食度
          food.saturation(0.1)//饱食度
          food.fastToEat()//吃的快
      }
    })
  })
  ItemEvents.modification(event => {
    event.modify('farm_and_charm:dog_food', item => {
      item.foodProperties = food => {
          food.hunger(6)//饱食度
          food.saturation(0.5)//饱和度
          food.eaten(foodData => foodData.player.tell('与狗夺食'))
      }
    })
  })
  ItemEvents.modification(event => {
    event.modify('farm_and_charm:horse_fodder', item => {
      item.foodProperties = food => {
        food.hunger(6)//饱食度
        food.saturation(0.5)//饱和度
        food.eaten(foodData => foodData.player.tell('与马夺食'))
      }
    })
  })
  ItemEvents.modification(event => {
    event.modify('farm_and_charm:cat_food', item => {
      item.foodProperties = food => {
        food.hunger(6)//饱食度
        food.saturation(0.5)//饱和度
        food.eaten(foodData => foodData.player.tell('与猫夺食'))
      }
    })
  })
  ItemEvents.modification(event => {
    event.modify('farm_and_charm:kernels', item => {
      item.foodProperties = food => {
        food.hunger(1)//饱食度
        food.saturation(0.1)//饱食度
        food.fastToEat()//吃的快
      }
    })
  })
ItemEvents.modification(event => {
  event.modify('casualness_delight:raw_potato_bobo_chicken', item => {
    item.foodProperties = food => {
      food.hunger(1)//饱食度
      food.saturation(0.1)//饱食度
    }
  })
})
ItemEvents.modification(event => {
  event.modify('casualness_delight:raw_cabbage_bobo_chicken', item => {
    item.foodProperties = food => {
      food.hunger(1)//饱食度
      food.saturation(0.1)//饱食度
    }
  })
})
ItemEvents.modification(event => {
  event.modify('casualness_delight:raw_chicken_bobo_chicken', item => {
    item.foodProperties = food => {
      food.hunger(1)//饱食度
      food.saturation(0.1)//饱食度
    }
  })
})
StartupEvents.registry("sound_event",event=>{
  event.create("kubejs:music.you_gotta_move")
})
StartupEvents.registry("item",event=>{
  event.create("kubejs:you_gotta_move","music_disc")
  .song("kubejs:music.you_gotta_move",199)
  .tag("music_discs")
})
ItemEvents.modification(event => {
  event.modify('minecraft:leather_helmet', item => {
    item.maxDamage = 407
  })
  event.modify('minecraft:leather_chestplate', item => {
    item.maxDamage = 592
  })
  event.modify('minecraft:leather_leggings', item => {
    item.maxDamage = 555
  })
  event.modify('minecraft:leather_boots', item => {
    item.maxDamage = 481
  })
})
StartupEvents.registry("item",event=>{
  event.create("kubejs:money","basic")
})
StartupEvents.registry("item",event=>{
  event.create("kubejs:coin","basic")
})
ItemEvents.modification(event => {
  event.modify('kubejs:money', item => {
    item.maxStackSize = 9999})
  event.modify('kubejs:coin', item => {
    item.maxStackSize = 9999})
})