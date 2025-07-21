
tellraw @s [{"text": " "}]


execute if score tips refresh_settings matches 1 if score tips_mc refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"每20分钟在聊天中显示一个与Minecraft相关的提示。默认情况下，在某些情况下也会给出Vanilla Refresh的提示，适用于启用的功能。"}]}},{"translate":"聊天提示： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/other/tip_2"}},{"translate": " "},{"translate":"预览","color":"light_purple","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击预览"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other_features/tip/preview_tip"}}]
execute if score tips refresh_settings matches 2 if score tips_mc refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"每20分钟在聊天中显示一个与Minecraft相关的提示。默认情况下，在某些情况下也会给出Vanilla Refresh的提示，适用于启用的功能。"}]}},{"translate":"聊天提示： ","color":"gray"},{"translate":"仅限Vanilla Refresh提示","color":"yellow","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/other/tip_0"}},{"translate": " "},{"translate":"预览","color":"light_purple","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击预览"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other_features/tip/preview_tip"}}]
execute if score tips refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"每20分钟在聊天中显示一个与Minecraft相关的提示。默认情况下，在某些情况下也会给出Vanilla Refresh的提示，适用于启用的功能。"}]}},{"translate":"聊天提示： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/other/tip_1"}},{"translate": " "},{"translate":"预览","color":"light_purple","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击预览"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other_features/tip/preview_tip"}}]

tellraw @s [{"text": " "}]

execute if score giveclearing refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"在从Vanilla Refresh物品套装菜单中给自己一个物品套装时，是否应该清空库存。"}]}},{"translate":"获取物品套装前清空库存： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/other/creative_disable"}},{"translate": " "}]
execute if score giveclearing refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"在从Vanilla Refresh物品套装菜单中给自己一个物品套装时，是否应该清空库存。"}]}},{"translate":"获取物品套装前清空库存： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/other/creative_enable"}},{"translate": " "}]


tellraw @s [{"text": " "}]


execute if score gamerules refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"允许玩家查看世界的游戲规则。查看时，请使用/trigger gamerules命令。"}]}},{"translate":"可查看的游戏规则： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/other/gamerules_disable"}},{"translate": " "},{"translate":"打开菜单","color":"light_purple","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to open menu"}]},"clickEvent":{"action":"run_command","value":"/trigger gamerules"}}]
execute if score gamerules refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"允许玩家查看世界的游戲规则。查看时，请使用/trigger gamerules命令。"}]}},{"translate":"可查看的游戏规则： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/other/gamerules_enable"}}]







tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 第1页","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/other/settings1"}},{"translate":"    - 2/3 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"","color": "yellow"},{"translate":"第3页-->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"下一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/other/settings3"}}]


tellraw @s [{"text": " "}]
