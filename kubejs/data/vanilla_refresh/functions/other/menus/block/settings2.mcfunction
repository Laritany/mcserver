
tellraw @s [{"text": " "}]

execute if score cropsxp refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"挖掘像胡萝卜、小麦、土豆、甜菜根和其他作物时，你将有20%的几率从一个作物中获得1点经验。挖掘南瓜或西瓜将经验获取几率提高到40%"}]}},{"translate":"作物经验：","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/crops_disable"}}]
execute if score cropsxp refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"挖掘像胡萝卜、小麦、土豆、甜菜根和其他作物时，你将有20%的几率从一个作物中获得1点经验。挖掘南瓜或西瓜将经验获取几率提高到40%"}]}},{"translate":"作物经验：","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/crops_enable"}}]


tellraw @s [{"text": " "}]



execute if score torch refresh_settings matches 1 if score torch_speed refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"通过在主手或副手持有发光方块时放置光源方块，模仿Optifine的动态照明系统\n警告：根据选择的更新速度，可能会导致服务器端延迟"}]}},{"translate":"动态手持照明： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/torch_disable"}},{"translate": " "},{"translate":"更新：慢速（5刻）","color":"yellow","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改火把更新速度"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/torch_speed_2"}}]
execute if score torch refresh_settings matches 1 if score torch_speed refresh_settings matches 2 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"通过在主手或副手持有发光方块时放置光源方块，模仿Optifine的动态照明系统\n警告：根据选择的更新速度，可能会导致服务器端延迟"}]}},{"translate":"动态手持照明： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/torch_disable"}},{"translate": " "},{"translate":"更新：默认（2刻）","color":"yellow","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改火把更新速度"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/torch_speed_1"}}]

execute if score torch refresh_settings matches 0 if score torch_speed refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"通过在主手或副手持有发光方块时放置光源方块，模仿Optifine的动态照明系统\n警告：服务器可能会因为更新速度而出现延迟"}]}},{"translate":"动态手持照明： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/torch_enable"}},{"translate": " "},{"translate":"更新：慢速（5刻）","color":"yellow","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改火把更新速度"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/torch_speed_2"}}]
execute if score torch refresh_settings matches 0 if score torch_speed refresh_settings matches 2 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"通过在主手或副手持有发光方块时放置光源方块，模仿Optifine的动态照明系统\n警告：服务器可能会因为更新速度而出现延迟"}]}},{"translate":"动态手持照明： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/torch_enable"}},{"translate": " "},{"translate":"更新：默认（2刻）","color":"yellow","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改火把更新速度"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/torch_speed_1"}}]


tellraw @s [{"text": " "}]


execute if score path refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"让你在路径上行走更快"}]}},{"translate":"路径冲刺： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/path_disable"}}]
execute if score path refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"让你在路径上行走更快"}]}},{"translate":"路径冲刺： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/path_enable"}}]






tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<--第1页","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/block/settings1"}},{"translate":"    - 2/5 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"第3页 -->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"下一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/block/settings3"}}]


tellraw @s [{"text": " "}]
