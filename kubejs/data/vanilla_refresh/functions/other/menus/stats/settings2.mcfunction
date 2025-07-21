tellraw @s [{"text": " "}]



execute if score stats_time refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"追踪玩家在世界中的时间\n(00:0:0) / (小时:分钟:秒)"}]}},{"translate":"统计信息；游戏时间：","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/time_disable"}}]
execute if score stats_time refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"追踪玩家在世界中的时间\n(00:0:0) / (小时:分钟:秒)"}]}},{"translate":"统计信息；游戏时间：","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/time_enable"}}]




tellraw @s [{"text": " "}]


 
execute if score stats_mobkills refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"追踪怪物击杀数"}]}},{"translate":"统计信息；怪物击杀： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/mob_disable"}}]
execute if score stats_mobkills refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"追踪怪物击杀数"}]}},{"translate":"统计信息；怪物击杀： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/mob_enable"}}]
 




tellraw @s [{"text": " "}]


execute if score stats_deaths refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"追踪玩家死亡次数"}]}},{"translate":"统计信息；死亡次数： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/death_disable"}}]
execute if score stats_deaths refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"追踪玩家死亡次数"}]}},{"translate":"统计信息；死亡次数： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/death_enable"}}]


tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 第1页","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/stats/settings1"}},{"translate":"    - 2/4 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"第3页 -->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"下一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/stats/settings3"}}]


tellraw @s [{"text": " "}]
