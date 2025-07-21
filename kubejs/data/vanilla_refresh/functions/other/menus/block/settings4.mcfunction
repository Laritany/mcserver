
tellraw @s [{"text": " "}]


execute if score clock refresh_settings matches 2 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"手持时钟时，将显示日期和时间。将时钟放置在物品展示框上，它将向附近的玩家显示时间。"}]}},{"translate":"可读时钟： ","color":"gray"},{"translate":"已启用；类型：刻","color":"yellow","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"类型：刻","color":"yellow"},{"translate":" - 基于确切的白天时刻刻度\n点击更改此设置","color": "white"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/clock_disable"}}]
execute if score clock refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"手持时钟时，将显示日期和时间。将时钟放置在物品展示框上，它将向附近的玩家显示时间。"}]}},{"translate":"可读时钟： ","color":"gray"},{"translate":"已启用；类型：现实","color":"yellow","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"类型：现实","color":"yellow"},{"translate":" - 基于现实世界的时钟类型\n点击更改此设置","color": "white"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/clock_2"}}]
execute if score clock refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"手持时钟时，将显示日期和时间。将时钟放置在物品展示框上，它将向附近的玩家显示时间。"}]}},{"translate":"可读时钟： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/clock_1"}}]



tellraw @s [{"text": " "}]

execute if score compass refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"使指南针显示您的位置坐标以及您面向的方向"}]}},{"translate":"指南针坐标： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/compass_disable"}}]
execute if score compass refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"使指南针显示您的位置坐标以及您面向的方向"}]}},{"translate":"指南针坐标： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/compass_enable"}}]



tellraw @s [{"text": " "}]



execute if score echo refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"将回声碎片投掷到生物上以使其沉默。您可以通过在其上放置水或杀死它来取消沉默。"}]}},{"translate":"回声碎片沉默：","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/echo_disable"}}]
execute if score echo refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"将回声碎片投掷到生物上以使其沉默。您可以通过在其上放置水或杀死它来取消沉默。"}]}},{"translate":"回声碎片沉默：","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/echo_enable"}}]




tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 第3页","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/block/settings3"}},{"translate":"    - 4/5 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"第5页 -->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"下一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/block/settings5"}}]


tellraw @s [{"text": " "}]
