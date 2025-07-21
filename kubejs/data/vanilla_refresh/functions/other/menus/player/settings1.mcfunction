
tellraw @s [{"text": " "}]


execute if score sitting refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"玩家是否可以在任何地方使用坐下机制\n可以通过向下直视、潜行，然后使用空手点击右键来坐下"}]}},{"translate":"玩家坐下: ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/sitting_disable"}}]
execute if score sitting refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"玩家是否可以在任何地方使用坐下机制\n可以通过向下直视、潜行，然后使用空手点击右键来坐下"}]}},{"translate":"玩家坐下: ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/sitting_enable"}}]

tellraw @s [{"text": " "}]


execute if score banner refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"允许在头部装备非头盔物品。启用后，要装备非头盔物品，需要在潜行状态下连续点击并持有该物品\n\n"},{"translate":"特殊装备: glass_blocks, azalea, flowering_azalea, banners, jack_o_lantern, composter, honey_block, slime_block, ice, fences, end_rod, dispenser, observer, dropper","color":"gray"}]}},{"translate":"头部特殊装备： ","color":"gray"},{"translate":"旗帜","color":"yellow","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/banners_2"}}]
execute if score banner refresh_settings matches 2 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"允许在头部装备非头盔物品。启用后，要装备非头盔物品，需要在潜行状态下连续点击并持有该物品\n\n"},{"translate":"特殊装备: glass_blocks, azalea, flowering_azalea, banners, jack_o_lantern, composter, honey_block, slime_block, ice, fences, end_rod, dispenser, observer, dropper","color":"gray"}]}},{"translate":"头部特殊装备： ","color":"gray"},{"translate":"旗帜，特殊方块","color":"yellow","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/banners_0"}}]
execute if score banner refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"允许在头部装备非头盔物品。启用后，要装备非头盔物品，需要在潜行状态下连续点击并持有该物品\n\n"},{"translate":"特殊装备: glass_blocks, azalea, flowering_azalea, banners, jack_o_lantern, composter, honey_block, slime_block, ice, fences, end_rod, dispenser, observer, dropper","color":"gray"}]}},{"translate":"头部特殊装备： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/banners_1"}}]


tellraw @s [{"text": " "}]


execute if score healthsound refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"在低生命值受到伤害时会播放一次心跳音效"}]}},{"translate":"低生命值音效: ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/health_disable"}}]
execute if score healthsound refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"在低生命值受到伤害时会播放一次心跳音效"}]}},{"translate":"低生命值音效: ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/health_enable"}}]


tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 返回","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/main"}},{"translate":"    - 1/4 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"第2页 -->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"下一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/player/settings2"}}]


tellraw @s [{"text": " "}]
