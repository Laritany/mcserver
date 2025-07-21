

tellraw @s [{"text": " "}]


execute if score totem_void refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"允许玩家在虚空中使用不死图腾以避免死亡。将玩家置于一种“飞行模式”，他们可以在找到陆地之前悬浮1分钟"}]}},{"translate":"虚空图腾: ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/death/totem_disable"}}]
execute if score totem_void refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"允许玩家在虚空中使用不死图腾以避免死亡。将玩家置于一种“飞行模式”，他们可以在找到陆地之前悬浮1分钟"}]}},{"translate":"虚空图腾: ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/death/totem_enable"}}]


tellraw @s [{"text": " "}]


execute if score death_items refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"你的死亡时掉落的物品将不会消失，除非被捡起"}]}},{"translate":"持续的死亡掉落物: ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/death/death_items_disable"}}]
execute if score death_items refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"你的死亡时掉落的物品将不会消失，除非被捡起"}]}},{"translate":"持续的死亡掉落物: ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/death/death_items_enable"}}]




tellraw @s [{"text": " "}]


execute if score soul refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":""},{"translate":"死后以灵魂的形式存储你的物品和经验值，当被其所有者触摸时，会掉落物品和经验值。."},{"color":"gray","text":"\n\n- 灵魂链接中存储的经验值和物品在灵魂过期之前，除了其所有者外，其他人无法捡起\n- 灵魂链接过期后，物品和经验值将会掉落\n- 灵魂不会在岩浆/火中燃烧\n- 如果它们最终落入虚空，会尝试着陆，如果失败，将传送到y96"}]}},{"translate":"灵魂链接： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/death/soul_enable"}}]

execute if score soul refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":""},{"translate":"死后以灵魂的形式存储你的物品和经验值，当被其所有者触摸时，会掉落物品和经验值。."},{"color":"gray","text":"\n\n- 灵魂链接中存储的经验值和物品在灵魂过期之前，除了其所有者外，其他人无法捡起\n- 灵魂链接过期后，物品和经验值将会掉落\n- 灵魂不会在岩浆/火中燃烧\n- 如果它们最终落入虚空，会尝试着陆，如果失败，将传送到y96"}]}},{"translate":"灵魂链接： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"color":"white","translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/death/soul_disable"}},{"translate": " "},{"translate":"配置","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击配置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/death/soul/1"}}]


tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 第1页","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/death/settings1"}},{"translate":"    - 2/3 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"第3页 -->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"下一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/death/settings3"}}]


tellraw @s [{"text": " "}]
