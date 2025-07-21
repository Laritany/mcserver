
tellraw @s [{"text": " "}]


execute as @s[tag=refresh_temp224] if score mob_health refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"玩家靠近怪物时在快捷栏上显示的怪物生命值文本"}]}},{"translate":"怪物生命值显示： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/mob_health_disable"}},{"translate":"  "},{"translate":"优化成功！","italic": true,"color":"gray"}]
execute as @s[tag=refresh_temp224] if score mob_health refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"玩家靠近怪物时在快捷栏上显示的怪物生命值文本"}]}},{"translate":"怪物生命值显示： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/mob_health_enable"}},{"translate":"  "},{"translate":"优化成功！","italic": true,"color":"gray"}]

execute as @s[tag=!refresh_temp224] if score mob_health refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"玩家靠近怪物时在快捷栏上显示的怪物生命值文本"}]}},{"translate":"怪物生命值显示： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/mob_health_disable"}},{"translate":"  "},{"translate":"优化","color":"light_purple","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击运行这个命令\n清除不再存在的实体的所有怪物生命值分数，同时重新加载当前实体分数。有助于减小您世界 scoreboard.dat 文件的大小"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/mob_health_optimize"}}]
execute as @s[tag=!refresh_temp224] if score mob_health refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"玩家靠近怪物时在快捷栏上显示的怪物生命值文本"}]}},{"translate":"怪物生命值显示： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/mob_health_enable"}},{"translate":"  "},{"translate":"优化","color":"light_purple","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击运行这个命令\n清除不再存在的实体的所有怪物生命值分数，同时重新加载当前实体分数。有助于减小您世界 scoreboard.dat 文件的大小"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/mob_health_optimize"}}]

tellraw @s [{"text": " "}]

execute if score spyglass refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"在使用望远镜观察怪物时，将显示怪物的生命值和与您的距离"}]}},{"translate":"望远镜怪物信息： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/spyglass_disable"}}]
execute if score spyglass refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"在使用望远镜观察怪物时，将显示怪物的生命值和与您的距离"}]}},{"translate":"望远镜怪物信息： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/spyglass_enable"}}]



tellraw @s [{"text": " "}]


execute if score witherhead refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"当凋零被击败时，它将掉落其头颅作为您胜利的装饰品奖杯"}]}},{"translate":"凋零头颅掉落： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/wither_disable"}}]
execute if score witherhead refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"当凋零被击败时，它将掉落其头颅作为您胜利的装饰品奖杯"}]}},{"translate":"凋零头颅掉落： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/wither_enable"}}]



tellraw @s [{"text": " "}]



#execute if score stats refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"玩家是否能够在聊天中使用 /trigger stats 命令"}]}},{"translate":"玩家统计信息： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats_disable"}}]
#execute if score stats refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"玩家是否能够在聊天中使用 /trigger stats 命令"}]}},{"translate":"玩家统计信息： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats_enable"}}]



tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 返回","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/main"}},{"translate":"    - 1/4 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"第2页 -->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"下一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/mob/settings2"}}]


tellraw @s [{"text": " "}]



tag @s remove refresh_temp224