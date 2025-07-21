
tellraw @s [{"text": " "}]


execute if score trident refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"带有忠诚附魔的三叉戟在进入虚空时会返回给玩家"}]}},{"translate":"额外忠诚的三叉戟： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/trident_disable"}}]
execute if score trident refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"带有忠诚附魔的三叉戟在进入虚空时会返回给玩家"}]}},{"translate":"额外忠诚的三叉戟： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/trident_enable"}}]

tellraw @s [{"text": " "}]

execute if score invis refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"允许你通过投掷隐形药水使物品展示框和盔甲架隐形。用水瓶可以使它们重新可见."}]}},{"translate":"隐藏的展示架和盔甲架： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/invis_disable"}}]
execute if score invis refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"允许你通过投掷隐形药水使物品展示框和盔甲架隐形。用水瓶可以使它们重新可见."}]}},{"translate":"隐藏的展示架和盔甲架： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/invis_enable"}}]



tellraw @s [{"text": " "}]


execute if score babyzombie refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"减半幼年僵尸的生命值，但使它们更加活跃（跳得更多，速度略快）"}]}},{"translate":"更好的幼年僵尸： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/zombie_disable"}}]
execute if score babyzombie refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"减半幼年僵尸的生命值，但使它们更加活跃（跳得更多，速度略快）"}]}},{"translate":"更好的幼年僵尸： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/zombie_enable"}}]






tellraw @s [{"text": " "}]





tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 第2页","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/mob/settings2"}},{"translate":"    - 3/4 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"第4页-->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"下一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/mob/settings4"}}]


tellraw @s [{"text": " "}]
