ServerEvents.fishingLootTables(event=>{
    event.modify("minecraft:junk",loot=>{
        loot.addPool(pool=>{
            pool.addItem("kubejs:poop")
            pool.addItem("kubejs:fish_bones")
            pool.addItem("gofish:terrafish")
        })
    })
})
ServerEvents.entityLootTables(event => {
    event.modifyEntity("minecraft:pig", loot => {
        loot.addPool(pool => {
            pool.addItem("kubejs:poop")
                .weight(1)
               .randomChance(0.8)
        })
})
})

ServerEvents.blockLootTables(event => {
    // 修改原战利品表
    event.addBlock('farmersdelight:budding_tomatoes', loot => {
        loot.addPool(pool => {
            // 番茄
            pool.addItem('farm_and_charm:tomato_seeds').count(1)
        }) 
    }) 
    event.addBlock('farmersdelight:onions', loot => {
        loot.addPool(pool => {
            // 洋葱
            pool.addItem('farm_and_charm:onion').count(1)
        }) 
    })
})
