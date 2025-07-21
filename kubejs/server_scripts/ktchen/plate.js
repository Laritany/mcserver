ServerEvents.recipes(event =>{
event.custom(
{
    "type": "kitchenkarrot:plate",
    "input": {
      "item": "kitchenkarrot:beef_in_dripleaf"
    },
    "result": {
      "item": "kitchenkarrot:small_beef_in_dripleaf"
    }
  }
)
event.custom(
  {
    "type": "kitchenkarrot:plate",
    "input": {
      "item": "kitchenkarrot:cheese_wheel"
    },
    "result": {
      "item": "kitchenkarrot:cheese_slice"
    }
  }
)
event.custom(
  {
    "type": "kitchenkarrot:plate",
    "input": {
      "item": "kitchenkarrot:chorus_mousse"
    },
    "result": {
      "item": "kitchenkarrot:small_chorus_mousse"
    }
  }
)
event.custom(
  {
    "type": "kitchenkarrot:plate",
    "input": {
      "item": "kitchenkarrot:dungeon_pizza"
    },
    "result": {
      "item": "kitchenkarrot:dungeon_pizza_slice"
    }
  }
)
event.custom(
  {
    "type": "kitchenkarrot:plate",
    "input": {
      "item": "kitchenkarrot:feast_pizza"
    },
    "result": {
      "item": "kitchenkarrot:feast_pizza_slice"
    }
  }
)
event.custom(
  {
    "type": "kitchenkarrot:plate",
    "input": {
      "item": "minecraft:melon"
    },
    "result": {
      "item": "minecraft:melon_slice"
    }
  }
)
event.custom(
  {
    "type": "kitchenkarrot:plate",
    "input": {
      "item": "kitchenkarrot:monster_lasagna"
    },
    "result": {
      "item": "kitchenkarrot:small_monster_lasagna"
    }
  }
)
event.custom(
  {
    "type": "kitchenkarrot:plate",
    "input": {
      "item": "kitchenkarrot:shiny_pizza"
    },
    "result": {
      "item": "kitchenkarrot:shiny_pizza_slice"
    }
  }
)
event.custom(
  {
    "type": "kitchenkarrot:plate",
    "input": {
      "item": "kitchenkarrot:sirloin_steak"
    },
    "result": {
      "item": "kitchenkarrot:beef_grains"
    }
  }
)
event.custom(
  {
    "type": "kitchenkarrot:plate",
    "input": {
      "item": "kitchenkarrot:slime_mousse"
    },
    "result": {
      "item": "kitchenkarrot:small_slime_mousse"
    }
  }
)
event.custom(
  {
    "type": "kitchenkarrot:plate",
    "input": {
      "item": "kitchenkarrot:sweet_loaf"
    },
    "result": {
      "item": "kitchenkarrot:sweet_loaf_slice"
    }
  }
)

event.custom(
{
  "type":"forge:conditional",
  "recipes":[
    {
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid":"farmersdelight"
        }
      ],

    "recipe":{
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": "kitchenkarrot:sirloin_steak"
        }
      ],
      "tool": {
        "tag": "forge:tools/knives"
      },
      "result": [
        {
          "item": "kitchenkarrot:beef_grains",
          "count": 6
        }
      ]
    }
  }
  ]
}
)

event.custom(
  {
  "type":"forge:conditional",
  "recipes":[
    {
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid":"farmersdelight"
        }
      ],

    "recipe":{
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": "kitchenkarrot:shiny_pizza"
        }
      ],
      "tool": {
        "tag": "forge:tools/knives"
      },
      "result": [
        {
          "item": "kitchenkarrot:shiny_pizza_slice",
          "count": 4
        }
      ]
    }
  }
  ]
}

)
event.custom(
  {
  "type":"forge:conditional",
  "recipes":[
    {
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid":"farmersdelight"
        }
      ],

    "recipe":{
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": "kitchenkarrot:feast_pizza"
        }
      ],
      "tool": {
        "tag": "forge:tools/knives"
      },
      "result": [
        {
          "item": "kitchenkarrot:feast_pizza_slice",
          "count": 4
        }
      ]
    }
  }
  ]
}

)
event.custom(
  {
  "type":"forge:conditional",
  "recipes":[
    {
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid":"farmersdelight"
        }
      ],

    "recipe":{
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": "kitchenkarrot:dungeon_pizza"
        }
      ],
      "tool": {
        "tag": "forge:tools/knives"
      },
      "result": [
        {
          "item": "kitchenkarrot:dungeon_pizza_slice",
          "count": 4
        }
      ]
    }
  }
  ]
}

)
event.custom(
  {
  "type":"forge:conditional",
  "recipes":[
    {
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid":"farmersdelight"
        }
      ],

    "recipe":{
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": "kitchenkarrot:beef_in_dripleaf"
        }
      ],
      "tool": {
        "tag": "forge:tools/knives"
      },
      "result": [
        {
          "item": "kitchenkarrot:small_beef_in_dripleaf",
          "count": 4
        }
      ]
    }
  }
  ]
}

)
event.custom(
  {
  "type":"forge:conditional",
  "recipes":[
    {
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid":"farmersdelight"
        }
      ],

    "recipe":{
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": "kitchenkarrot:chorus_mousse"
        }
      ],
      "tool": {
        "tag": "forge:tools/knives"
      },
      "result": [
        {
          "item": "kitchenkarrot:small_chorus_mousse",
          "count": 4
        }
      ]
    }
  }
  ]
}

)
event.custom(
  {
  "type":"forge:conditional",
  "recipes":[
    {
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid":"farmersdelight"
        }
      ],

    "recipe":{
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": "kitchenkarrot:monster_lasagna"
        }
      ],
      "tool": {
        "tag": "forge:tools/knives"
      },
      "result": [
        {
          "item": "kitchenkarrot:small_monster_lasagna",
          "count": 4
        }
      ]
    }
  }
  ]
}
)
event.custom(
  {
  "type":"forge:conditional",
  "recipes":[
    {
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid":"farmersdelight"
        }
      ],

    "recipe":{
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": "kitchenkarrot:slime_mousse"
        }
      ],
      "tool": {
        "tag": "forge:tools/knives"
      },
      "result": [
        {
          "item": "kitchenkarrot:small_slime_mousse",
          "count": 4
        }
      ]
    }
  }
  ]
}

)
event.custom(
  {
  "type":"forge:conditional",
  "recipes":[
    {
      "conditions": [
        {
          "type": "forge:mod_loaded",
          "modid":"farmersdelight"
        }
      ],

    "recipe":{
      "type": "farmersdelight:cutting",
      "ingredients": [
        {
          "item": "kitchenkarrot:sweet_loaf"
        }
      ],
      "tool": {
        "tag": "forge:tools/knives"
      },
      "result": [
        {
          "item": "kitchenkarrot:sweet_loaf_slice",
          "count": 3
        }
      ]
    }
  }
  ]
}
)

event.custom(
{
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "key": {
    "#": {
      "item": "minecraft:iron_sword"
    },
    "n": {
      "item": "minecraft:iron_nugget"
    }
  },
  "pattern": [
    " #",
    "n "
  ],
  "result": {
    "item": "kitchenkarrot:knife"
  },
  "show_notification": true
}
)

event.custom(
  {
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "key": {
    "1": {
      "item": "minecraft:iron_nugget"
    },
    "2": {
      "item": "minecraft:brick"
    }
  },
  "pattern": [
    "121"
  ],
  "result": {
    "count": 2,
    "item": "kitchenkarrot:plate_item"
  },
  "show_notification": true
}
)
event.custom(
  {
  "type": "minecraft:crafting_shapeless",
  "category": "equipment",
  "ingredients": [
    {
      "item": "kitchenkarrot:plate_pieces"
    },
    {
      "item": "kitchenkarrot:plate_pieces"
    },
    {
      "item": "kitchenkarrot:plate_pieces"
    },
    {
      "item": "kitchenkarrot:plate_pieces"
    }
  ],
  "result": {
    "item": "kitchenkarrot:plate_item"
  }
}
)
})