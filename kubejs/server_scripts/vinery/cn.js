ServerEvents.recipes(event =>{
event.custom(
{
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "c": {
      "item": "farmersdelight:canvas"
    }
  },
  "pattern": [
    "cc"
  ],
  "result": {
    "count": 4,
    "item": "brewinandchewin:coaster"
  },
  "show_notification": true
}
)
event.custom(
  {
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "S": {
      "item": "minecraft:string"
    },
    "i": {
      "item": "minecraft:packed_ice"
    },
    "p": {
      "tag": "minecraft:planks"
    },
    "s": {
      "tag": "minecraft:wooden_slabs"
    }
  },
  "pattern": [
    "pSp",
    "sis",
    "psp"
  ],
  "result": {
    "item": "brewinandchewin:ice_crate"
  },
  "show_notification": true
}
)
event.custom(
  {
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "h": {
      "item": "minecraft:honeycomb"
    },
    "i": {
      "item": "minecraft:iron_ingot"
    },
    "p": {
      "tag": "minecraft:planks"
    }
  },
  "pattern": [
    "ipi",
    "ihi",
    "ppp"
  ],
  "result": {
    "item": "brewinandchewin:keg"
  },
  "show_notification": true
}
)
event.custom(
{
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "C": {
      "item": "minecraft:blaze_powder"
    },
    "c": {
      "item": "minecraft:coal_block"
    },
    "m": {
      "item": "minecraft:magma_block"
    },
    "p": {
      "tag": "minecraft:planks"
    },
    "s": {
      "tag": "minecraft:wooden_slabs"
    }
  },
  "pattern": [
    "sss",
    "cCc",
    "pmp"
  ],
  "result": {
    "item": "brewinandchewin:heating_cask"
  },
  "show_notification": true
}
)
event.custom(
{
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "-": {
      "item": "minecraft:copper_ingot"
    },
    "B": {
      "item": "minecraft:barrel"
    }
  },
  "pattern": [
    " B ",
    "---"
  ],
  "result": {
    "item": "kitchenkarrot:brewing_barrel"
  },
  "show_notification": true
}
)
event.shapeless("brewery:beer_mug",["brewinandchewin:tankard"])
event.shapeless("brewinandchewin:tankard",["brewery:beer_mug"])

event.shapeless("6x kitchenkarrot:acorn_wine_base",[{"tag":"brewery:beer"}])
event.shapeless("6x kitchenkarrot:mead_base",[{"tag":"kubejs:wsj"}])
event.shapeless("6x kitchenkarrot:rum_base",[{"tag":"vinery:white_wine"}])
event.shapeless("6x kitchenkarrot:vodka_base",[{"tag":"vinery:red_wine"}])
Item.of({"tag":"brewery:beer"}).item.craftingRemainder = Item.of('brewery:beer_mug').item;
Item.of({"tag":"kubejs:wsj"}).item.craftingRemainder = Item.of('brewery:beer_mug').item;
Item.of({"tag":"vinery:white_wine"}).item.craftingRemainder = Item.of('vinery:wine_bottle').item;
Item.of({"tag":"vinery:red_wine"}).item.craftingRemainder = Item.of('vinery:wine_bottle').item;

event.shapeless("6x kitchenkarrot:milk",[{"tag":"c:milk_buckets"}])
event.shapeless("kitchenkarrot:birch_sap",["minecraft:birch_sapling"])
event.shapeless("6x kitchenkarrot:water",[{"tag":"kjs:water"}])
event.shapeless("6x farm_and_charm:tomato",[{"item":"farmersdelight:tomato_crate"}])
event.shapeless("6x farm_and_charm:onion",[{"item":"farmersdelight:onion_crate"}])
event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [{"item": "minecraft:ice"}],
  "result": [
    {"count": 5,"item": "kitchenkarrot:ice_cubes"}
  ],
  "tool": {"tag": "forge:tools/knives"}
})
event.shapeless(Item.of('kitchenkarrot:fine_salt'),[
"meadow:alpine_salt",
"vintagedelight:salt_dust"
]);
event.shapeless("kitchenkarrot:rock_salt",["meadow:alpine_salt"])
event.shapeless("kitchenkarrot:sea_salt",["vintagedelight:salt_dust"])
event.shapeless("meadow:alpine_salt",["kitchenkarrot:rock_salt"])
event.shapeless("vintagedelight:salt_dust",["kitchenkarrot:sea_salt"])
})