
tellraw @s [{"text": " "}]


execute if score stoptime refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"当没有玩家在线时，白天的光照周期和天数计数器会停止，只有在玩家上线后才会继续。这对于希望天数计数器不要过快增加的小服务器很有帮助。"}]}},{"translate":"离线时间停止器： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/other/stoptime_disable"}},{"translate": " "}]
execute if score stoptime refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"当没有玩家在线时，白天的光照周期和天数计数器会停止，只有在玩家上线后才会继续。这对于希望天数计数器不要过快增加的小服务器很有帮助。"}]}},{"translate":"离线时间停止器： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/other/stoptime_enable"}},{"translate": " "}]



tellraw @s [{"text": " "}]


tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 第2页","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/other/settings2"}},{"translate":"    - 3/3 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"","color": "yellow"}]

tellraw @s [{"text": " "}]
