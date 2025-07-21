StartupEvents.registry("creative_mode_tab", (event) => {
    const vineryTab = event.create("farmingtales:vinery");
    vineryTab.displayName = Text.of("农场物语-工匠葡萄酒§f\uFF78\uFF77\uFF76");
    vineryTab.icon(() => Item.of("farmingtales:aegis_wine_g"));

vineryTab.content(() => [
        "farmingtales:aegis_wine_i",
        "farmingtales:ghastly_grenache_d",
        "farmingtales:apple_wine_i",
        "farmingtales:bad_omen_wine_i",
        "farmingtales:bolvar_wine_i",
        "farmingtales:bottle_mojang_noir_i",
        "farmingtales:chenet_wine_i",
        "farmingtales:cherry_wine_i",
        "farmingtales:chorus_wine_i",
        "farmingtales:clark_wine_i",
        "farmingtales:cristel_wine_i",
        "farmingtales:eiswein_i",
        "farmingtales:glowing_wine_i",
        "farmingtales:jellie_wine_i",
        "farmingtales:jo_special_mixture_i",
        "farmingtales:kelp_cider_i",
        "farmingtales:lilitu_wine_i",
        "farmingtales:magnetic_wine_i",
        "farmingtales:mead_i",
        "farmingtales:mellohi_wine_i",
        "farmingtales:noir_wine_i",
        "farmingtales:red_wine_i",
        "farmingtales:solaris_wine_i",
        "farmingtales:stal_wine_i",
        "farmingtales:strad_wine_i",
        "farmingtales:creeper_wine_i",
        "farmingtales:apple_cider_i",
        "farmingtales:ghastly_grenache_i",
        "farmingtales:improved_lava_fizz_i",
        "farmingtales:improved_nether_fizz_i",
        "farmingtales:lava_fizz_i",
        "farmingtales:nether_fizz_i",
        "farmingtales:netherite_nectar_i",
        "farmingtales:blazewine_pinot_i",
        "farmingtales:aegis_wine_g",
        "farmingtales:apple_wine_g",
        "farmingtales:bad_omen_wine_g",
        "farmingtales:bolvar_wine_g",
        "farmingtales:bottle_mojang_noir_g",
        "farmingtales:chenet_wine_g",
        "farmingtales:cherry_wine_g",
        "farmingtales:chorus_wine_g",
        "farmingtales:clark_wine_g",
        "farmingtales:cristel_wine_g",
        "farmingtales:eiswein_g",
        "farmingtales:glowing_wine_g",
        "farmingtales:jellie_wine_g",
        "farmingtales:jo_special_mixture_g",
        "farmingtales:kelp_cider_g",
        "farmingtales:lilitu_wine_g",
        "farmingtales:magnetic_wine_g",
        "farmingtales:mead_g",
        "farmingtales:mellohi_wine_g",
        "farmingtales:noir_wine_g",
        "farmingtales:red_wine_g",
        "farmingtales:solaris_wine_g",
        "farmingtales:stal_wine_g",
        "farmingtales:strad_wine_g",
        "farmingtales:creeper_wine_g",
        "farmingtales:apple_cider_g",
        "farmingtales:ghastly_grenache_g",
        "farmingtales:improved_lava_fizz_g",
        "farmingtales:improved_nether_fizz_g",
        "farmingtales:lava_fizz_g",
        "farmingtales:nether_fizz_g",
        "farmingtales:netherite_nectar_g",
        "farmingtales:blazewine_pinot_g",
        "farmingtales:aegis_wine_d",
        "farmingtales:apple_wine_d",
        "farmingtales:bad_omen_wine_d",
        "farmingtales:bolvar_wine_d",
        "farmingtales:bottle_mojang_noir_d",
        "farmingtales:chenet_wine_d",
        "farmingtales:cherry_wine_d",
        "farmingtales:chorus_wine_d",
        "farmingtales:clark_wine_d",
        "farmingtales:cristel_wine_d",
        "farmingtales:eiswein_d",
        "farmingtales:glowing_wine_d",
        "farmingtales:jellie_wine_d",
        "farmingtales:jo_special_mixture_d",
        "farmingtales:kelp_cider_d",
        "farmingtales:lilitu_wine_d",
        "farmingtales:magnetic_wine_d",
        "farmingtales:mead_d",
        "farmingtales:mellohi_wine_d",
        "farmingtales:noir_wine_d",
        "farmingtales:red_wine_d",
        "farmingtales:solaris_wine_d",
        "farmingtales:stal_wine_d",
        "farmingtales:strad_wine_d",
        "farmingtales:creeper_wine_d",
        "farmingtales:apple_cider_d",
        "farmingtales:ghastly_drenache_d",
        "farmingtales:improved_lava_fizz_d",
        "farmingtales:improved_nether_fizz_d",
        "farmingtales:lava_fizz_d",
        "farmingtales:nether_fizz_d",
        "farmingtales:netherite_nectar_d",
        "farmingtales:blazewine_pinot_d",
        "brewinandchewin:keg",
        "brewinandchewin:heating_cask",
        "brewinandchewin:ice_crate"
	]);
});

StartupEvents.modifyCreativeTab("brewinandchewin:brewinandchewin", e => {
  e.remove([
    "brewinandchewin:keg",
    "brewinandchewin:heating_cask",
    "brewinandchewin:ice_crate"
  ]);
})

StartupEvents.registry("creative_mode_tab", (event) => {
    const delightTab = event.create("farmingtales:delight");
    delightTab.displayName = Text.of("农场物语-模组扩展§f\uFF78\uFF77\uFF76");
    delightTab.icon(() => Item.of("sob:roast_turkey_block"));

delightTab.content(() => [
    "sob:bitter_tea",
    "sob:honey_barbecue_stick",
    "sob:spiky_salad",
    "sob:poutine",
    "sob:aloe_tea",

    "sob:pale_daiquiri",
    "sob:roast_turkey",
    "sob:donut_box_block",
    "sob:exquisite_mushroom_soup",
    "sob:ichorfruit",

    "sob:eumozz_cheese_wedge",
    "sob:maple_donut",
    "sob:unripe_eumozz_cheese_wheel",
    "sob:eumozz_cheese_wheel",
    "sob:ichor_bud",
    
    "sob:roast_turkey_block"
	]);
});



StartupEvents.modifyCreativeTab("kitchenkarrot:main", e => {
  e.setIcon("kitchenkarrot:sirloin_steak")
  e.remove([
    "kitchenkarrot:ice_cubes",
    "kitchenkarrot:water",
    "kitchenkarrot:milk",
    "kitchenkarrot:birch_sap",
    "kitchenkarrot:sea_salt",
    "kitchenkarrot:rock_salt",
    "kitchenkarrot:fine_salt",
    "kitchenkarrot:acorn_oil",
    "kitchenkarrot:sunflower_oil",
    "kitchenkarrot:chorus_oil"
  ]);
})
StartupEvents.modifyCreativeTab("kitchenkarrot:cocktail", e => {
  e.setIcon("kitchenkarrot:mead_base")
  e.add([
    "kitchenkarrot:acorn_wine_base",
    "kitchenkarrot:mead_base",
    "kitchenkarrot:rum_base",
    "kitchenkarrot:vodka_base",
    "kitchenkarrot:ice_cubes",
    "kitchenkarrot:water",
    "kitchenkarrot:milk",
    "kitchenkarrot:birch_sap",
    "kitchenkarrot:sea_salt",
    "kitchenkarrot:rock_salt",
    "kitchenkarrot:fine_salt",
    "kitchenkarrot:acorn_oil",
    "kitchenkarrot:sunflower_oil",
    "kitchenkarrot:chorus_oil"
  ]);
})