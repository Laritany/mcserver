
tellraw @s [{"text": " "}]


execute if score ladder refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"允许在另一把梯子连接的情况下在半空中放置梯子。要放置一个下降梯子，同时按住潜行键并拿着梯子爬上去以放下梯子"}]}},{"translate":"下降梯子： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/ladder_disable"}}]
execute if score ladder refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"允许在另一把梯子连接的情况下在半空中放置梯子。要放置一个下降梯子，同时按住潜行键并拿着梯子爬上去以放下梯子"}]}},{"translate":"下降梯子： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/ladder_enable"}}]

tellraw @s [{"text": " "}]




execute if score jukebox refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"唱片机将会继续播放并循环它们的唱片，直到被移除或破坏"}]}},{"translate":"循环播放唱片机唱片： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/jukebox_disable"}}]
execute if score jukebox refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"唱片机将会继续播放并循环它们的唱片，直到被移除或破坏"}]}},{"translate":"循环播放唱片机唱片： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/jukebox_enable"}}]



tellraw @s [{"text": " "}]




execute if score blockanims refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"为附魔台、龙蛋、信标、凋零骷髅头颅、唱片机和酿造台添加了新的更有趣的方块粒子/动画效果"}]}},{"translate":"改进的方块动画效果： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/blockanims_disable"}}]
execute if score blockanims refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"为附魔台、龙蛋、信标、凋零骷髅头颅、唱片机和酿造台添加了新的更有趣的方块粒子/动画效果"}]}},{"translate":"改进的方块动画效果： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/blockanims_enable"}}]





tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 返回","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/main"}},{"translate":"    - 1/5 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"第2页 -->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"下一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/block/settings2"}}]


tellraw @s [{"text": " "}]
