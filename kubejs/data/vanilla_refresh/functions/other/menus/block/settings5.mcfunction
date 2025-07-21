
tellraw @s [{"text": " "}]


execute if score command_block refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"在命令方块上方放置粒子信标，以便它们容易被定位"}]}},{"translate":"标记命令方块： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/command_disable"}}]
execute if score command_block refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"在命令方块上方放置粒子信标，以便它们容易被定位"}]}},{"translate":"标记命令方块： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/command_enable"}}]


tellraw @s [{"text": " "}]

execute if score cake refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"将烟花物品丢在蛋糕上会将其变成派对蛋糕，当被破坏或吃掉时会爆炸并散落彩带\n蜡烛可以安全地放在它们上面"}]}},{"translate":"派对蛋糕： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/cake_disable"}}]
execute if score cake refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"将烟花物品丢在蛋糕上会将其变成派对蛋糕，当被破坏或吃掉时会爆炸并散落彩带\n蜡烛可以安全地放在它们上面"}]}},{"translate":"派对蛋糕： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/cake_enable"}}]



tellraw @s [{"text": " "}]

execute if score anvil refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"将铁砧丢在蓝冰、石砖或去皮原木等方块上时，会将它们转化为原始形态"}]}},{"translate":"铁砧研磨：","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/anvil_disable"}}]
execute if score anvil refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"将铁砧丢在蓝冰、石砖或去皮原木等方块上时，会将它们转化为原始形态"}]}},{"translate":"铁砧研磨：","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/anvil_enable"}}]





tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 第4页","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/block/settings4"}},{"translate":"    - 5/5 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"}]


tellraw @s [{"text": " "}]
