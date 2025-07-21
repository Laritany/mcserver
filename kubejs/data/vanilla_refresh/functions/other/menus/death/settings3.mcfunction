

tellraw @s [{"text": " "}]


execute if score gravestone refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"玩家死亡时，会放置一个装饰性墓碑，上面带有玩家的头像。这作为死亡的标记，但如果它挡住了你的路，你可以破坏它"}]}},{"translate":"墓碑： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/death/gravestone_disable"}}]
execute if score gravestone refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"玩家死亡时，会放置一个装饰性墓碑，上面带有玩家的头像。这作为死亡的标记，但如果它挡住了你的路，你可以破坏它"}]}},{"translate":"墓碑： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/death/gravestone_enable"}}]


tellraw @s [{"text": " "}]

execute if score playerheads refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"死亡时，会掉落玩家头像"}]}},{"translate":"玩家头像掉落： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/death/playerheads_disable"}}]
execute if score playerheads refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"死亡时，会掉落玩家头像"}]}},{"translate":"玩家头像掉落： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/death/playerheads_enable"}}]




tellraw @s [{"text": " "}]



tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 第2页","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/death/settings2"}},{"translate":"    - 3/3 -     ","color": "gray","italic": false}]

tellraw @s [{"text": " "}]
