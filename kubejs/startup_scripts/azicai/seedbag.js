StartupEvents.registry("item",event=>{
    event.create("kubejs:beetroot_bag","basic")
    .maxStackSize(16)
    .tooltip('§7右键撕开袋子')
    .food(foodBuilder=>{
        foodBuilder.alwaysEdible()
        foodBuilder.fastToEat()
        foodBuilder.eaten(foodEatenEvent=>{
            /**
             * @type {$Player}
             */
            let player = foodEatenEvent.getPlayer()
            if (foodEatenEvent.getPlayer() != null){
                player.give("6x minecraft:beetroot_seeds")
            }
        })
})
    event.create("kubejs:wheat_bag","basic")
    .maxStackSize(16)
    .tooltip('§7右键撕开袋子')
    .food(foodBuilder=>{
        foodBuilder.alwaysEdible()
        foodBuilder.fastToEat()
        foodBuilder.eaten(foodEatenEvent=>{
            /**
             * @type {$Player}
             */
            let player = foodEatenEvent.getPlayer()
            if (foodEatenEvent.getPlayer() != null){
                player.give("6x minecraft:wheat_seeds")
            }
        })
})
    event.create("kubejs:carrot_bag","basic")
    .maxStackSize(16)
    .tooltip('§7右键撕开袋子')
    .food(foodBuilder=>{
        foodBuilder.alwaysEdible()
        foodBuilder.fastToEat()
        foodBuilder.eaten(foodEatenEvent=>{
            /**
             * @type {$Player}
             */
            let player = foodEatenEvent.getPlayer()
            if (foodEatenEvent.getPlayer() != null){
                player.give("6x minecraft:carrot")
            }
        })
})
    event.create("kubejs:melon_bag","basic")
    .maxStackSize(16)
    .tooltip('§7右键撕开袋子')
    .food(foodBuilder=>{
        foodBuilder.alwaysEdible()
        foodBuilder.fastToEat()
        foodBuilder.eaten(foodEatenEvent=>{
            /**
             * @type {$Player}
             */
            let player = foodEatenEvent.getPlayer()
            if (foodEatenEvent.getPlayer() != null){
                player.give("6x minecraft:melon_seeds")
            }
        })
})
event.create("kubejs:pumpkin_bag","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x minecraft:pumpkin_seeds")
        }
    })
})
event.create("kubejs:potato_bag","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x minecraft:potato")
        }
    })
})
event.create("kubejs:nether_wart_bag","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x minecraft:nether_wart")
        }
    })
})
event.create("kubejs:red_grape_seeds","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x vinery:red_grape_seeds")
        }
    })
})
event.create("kubejs:white_grape_seeds","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x vinery:white_grape_seeds")
        }
    })
})
event.create("kubejs:savanna_grape_seeds_red","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x vinery:savanna_grape_seeds_red")
        }
    })
})
event.create("kubejs:savanne_grape_seeds_white","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x vinery:savanna_grape_seeds_white")
        }
    })
})
event.create("kubejs:taiga_grape_seeds_red","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x vinery:taiga_grape_seeds_red")
        }
    })
})
event.create("kubejs:taiga_grape_seeds_white","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x vinery:taiga_grape_seeds_white")
        }
    })
})
event.create("kubejs:jungle_grape_seeds_red","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x vinery:jungle_grape_seeds_red")
        }
    })
})
event.create("kubejs:jungle_grape_seeds_white","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x vinery:jungle_grape_seeds_white")
        }
    })
})
event.create("kubejs:crimson_grape_seeds","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x nethervinery:crimson_grape_seeds")
        }
    })
})
event.create("kubejs:warped_grape_seeds","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x nethervinery:warped_grape_seeds")
        }
    })
})
event.create("kubejs:flax_seeds","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x supplementaries:flax_seeds")
        }
    })
})
event.create("kubejs:sweet_berries","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x minecraft:sweet_berries")
        }
    })
})
event.create("kubejs:cocoa_beans","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x minecraft:cocoa_beans")
        }
    })
})
event.create("kubejs:sugar_cane","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x minecraft:sugar_cane")
        }
    })
})
event.create("kubejs:glow_berries","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x minecraft:glow_berries")
        }
    })
})
event.create("kubejs:kernels","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x farm_and_charm:kernels")
        }
    })
})
event.create("kubejs:oat_seeds","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x farm_and_charm:oat_seeds")
        }
    })
})
event.create("kubejs:barley_seeds","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x farm_and_charm:barley_seeds")
        }
    })
})
event.create("kubejs:lettuce_seeds","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x farm_and_charm:lettuce_seeds")
        }
    })
})
event.create("kubejs:tomato_seeds","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x farm_and_charm:tomato_seeds")
        }
    })
})
event.create("kubejs:onion","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x farm_and_charm:onion")
        }
    })
})
event.create("kubejs:strawberry_seeds","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x farm_and_charm:strawberry_seeds")
        }
    })
})
event.create("kubejs:hops_seeds","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x brewery:hops_seeds")
        }
    })
})
event.create("kubejs:cabbage_seeds","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x farmersdelight:cabbage_seeds")
        }
    })
})
event.create("kubejs:cucumber_seeds","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x vintagedelight:cucumber_seeds")
        }
    })
})
event.create("kubejs:ghost_pepper_seeds","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x vintagedelight:ghost_pepper_seeds")
        }
    })
})
event.create("kubejs:peanut","basic")
.maxStackSize(16)
.tooltip('§7右键撕开袋子')
.food(foodBuilder=>{
    foodBuilder.alwaysEdible()
    foodBuilder.fastToEat()
    foodBuilder.eaten(foodEatenEvent=>{
        /**
         * @type {$Player}
         */
        let player = foodEatenEvent.getPlayer()
        if (foodEatenEvent.getPlayer() != null){
            player.give("6x vintagedelight:peanut")
        }
    })
})
})