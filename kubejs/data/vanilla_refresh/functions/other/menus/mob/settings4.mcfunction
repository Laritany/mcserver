
tellraw @s [{"text": " "}]


execute if score armorstand refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"所有放置的盔甲架现在都有手臂。你还可以通过使用扳手激活盔甲架来改变其姿势"}]}},{"translate":"更好的盔甲架： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/stand_disable"}}]
execute if score armorstand refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"所有放置的盔甲架现在都有手臂。你还可以通过使用扳手激活盔甲架来改变其姿势"}]}},{"translate":"更好的盔甲架： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/stand_enable"}}]



tellraw @s [{"text": " "}]



execute if score itemsparkle refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"使物品在黑暗中闪光，以便在夜间或草丛中更容易看到怪物掉落的物品\n"},{"translate":"灵感来自《塞尔达传说：荒野之息/王国之泪》","italic": true,"color": "gray"}]}},{"translate":"物品闪光： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/sparkle_disable"}}]
execute if score itemsparkle refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"使物品在黑暗中闪光，以便在夜间或草丛中更容易看到怪物掉落的物品\n"},{"translate":"灵感来自《塞尔达传说：荒野之息/王国之泪》","italic": true,"color": "gray"}]}},{"translate":"物品闪光： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/sparkle_enable"}}]





tellraw @s [{"text": " "}]


execute if score armortrimmed_mobs refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"穿盔甲的猪灵有机会以修剪过的盔甲生成（约占所有猪灵的8%）。\n\n修剪部位：口鼻部、肋骨\n材料：金、铁、下界合金或钻石"}]}},{"translate":"修剪盔甲的猪灵：","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/armortrimmed_disable"}}]
execute if score armortrimmed_mobs refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"穿盔甲的猪灵有机会以修剪过的盔甲生成（约占所有猪灵的8%）。\n\n修剪部位：口鼻部、肋骨\n材料：金、铁、下界合金或钻石"}]}},{"translate":"修剪盔甲的猪灵：","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/armortrimmed_enable"}}]



tellraw @s [{"text": " "}]



tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 第3页","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/mob/settings3"}},{"translate":"    - 4/4 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"}]

tellraw @s [{"text": " "}]
