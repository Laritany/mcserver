tellraw @s [{"text": " "}]


execute unless score process_stats_wasdisabled refresh_settings matches 1 if score process_stats refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"完全禁用统计追踪，不仅仅是显示"}]}},{"translate":"统计追踪： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/process_stats_disable"}}]
execute unless score process_stats_wasdisabled refresh_settings matches 1 if score process_stats refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"完全禁用统计追踪，不仅仅是显示"}]}},{"translate":"统计追踪： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/process_stats_enable"}}]

###########################################################################################################

execute if score process_stats_wasdisabled refresh_settings matches 1 if score process_stats refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "⚠ ","color": "yellow","hoverEvent":{"action":"show_text","contents":[{"text": "","color": "white"},{"text":"⚠ 此设置之前已被禁用，因此某些统计数据不再准确\n","color": "yellow"},{"translate":"完全禁用统计追踪，不仅仅是显示"}]}},{"translate":"统计追踪： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/process_stats_disable"}}]
execute if score process_stats_wasdisabled refresh_settings matches 1 if score process_stats refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "⚠ ","color": "yellow","hoverEvent":{"action":"show_text","contents":[{"text": "","color": "white"},{"text":"⚠ 此设置之前已被禁用，因此某些统计数据不再准确\n","color": "yellow"},{"translate":"完全禁用统计追踪，不仅仅是显示"}]}},{"translate":"统计追踪： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/process_stats_enable"}}]




tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 第3页","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/stats/settings3"}},{"translate":"    - 4/4 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"}]


tellraw @s [{"text": " "}]
