tellraw @s [{"text": " "}]


execute if score stats_deathaverage refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"追踪平均每小时的死亡次数，结果中包含小数"}]}},{"translate":"统计信息；每小时死亡次数： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/death_average_disable"}}]
execute if score stats_deathaverage refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"追踪平均每小时的死亡次数，结果中包含小数"}]}},{"translate":"统计信息；每小时死亡次数： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/death_average_enable"}}]


tellraw @s [{"text": " "}]


execute if score stats_kills refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"追踪直接玩家击杀"}]}},{"translate":"统计信息；玩家击杀： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/player_disable"}}]
execute if score stats_kills refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"追踪直接玩家击杀"}]}},{"translate":"统计信息；玩家击杀： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/player_enable"}}]


tellraw @s [{"text": " "}]

execute if score stats_deathtime refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"追踪玩家自上次死亡以来的生存时间\n这也被称为生存小时数"}]}},{"translate":"统计信息；自上次死亡以来的时间： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/death_time_disable"}}]
execute if score stats_deathtime refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"追踪玩家自上次死亡以来的生存时间\n这也被称为生存小时数"}]}},{"translate":"统计信息；自上次死亡以来的时间： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/death_time_enable"}}]



#execute if score process_stats refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"The code required to track stats. When disabling just the stats feature on page 1, stats are still tracked in the background, allowing you to re-enable it at anytime and still have accurate stats. Disabling stats processing"}]}},{"translate":"统计信息；每小时死亡次数： ","color":"gray"},{"translate":"已启用","color":"gray","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/death_average_disable"}}]
#execute if score process_stats refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"追踪平均每小时的死亡次数，结果中包含小数"}]}},{"translate":"统计信息；每小时死亡次数： ","color":"gray"},{"translate":"已禁用","color":"gray","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/death_average_enable"}}]


tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 第2页","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/stats/settings2"}},{"translate":"    - 3/4 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"第4页 -->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"下一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/stats/settings4"}}]


tellraw @s [{"text": " "}]
