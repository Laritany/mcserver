ServerEvents.tags("item",event=>{
event.add("kubejs:oat",['farm_and_charm:oat']);
event.add("kubejs:oat",['vintagedelight:oat']);
event.add("farm_and_charm:wheat",['vintagedelight:oat']);
event.add("forge:salt",['meadow:alpine_salt']);
})
 ServerEvents.recipes(event =>{//箱子
event.shaped('farmersdelight:onion_crate',[
    'CCC',
    'C C',
    'CCC'
],{
    C: 'farm_and_charm:onion',
})

event.shaped('farmersdelight:tomato_crate',[
    'CCC',
    'C C',
    'CCC'
],{
    C: 'farm_and_charm:tomato',
})
event.shapeless('8x farm_and_charm:tomato',[
    'farmersdelight:tomato_crate',
])
event.shapeless('8x farm_and_charm:onion',[
    'farmersdelight:onion_crate',
])
});