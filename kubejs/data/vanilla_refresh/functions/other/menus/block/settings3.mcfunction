
tellraw @s [{"text": " "}]

execute if score explosivefurnace refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"觉得你可以这么轻松地冶炼矿石吗？！你的高炉可能会随机爆炸！任何时候都可能！为了救你的炉子，你得往上面倒水让它冷却一点……\n\n如果你没看出来，这个功能是个玩笑，哈哈"}]}},{"translate":"爆炸的高炉：","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/blast_disable"}}]
execute if score explosivefurnace refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"觉得你可以这么轻松地冶炼矿石吗？！你的高炉可能会随机爆炸！任何时候都可能！为了救你的炉子，你得往上面倒水让它冷却一点……\n\n如果你没看出来，这个功能是个玩笑，哈哈"}]}},{"translate":"爆炸的高炉：","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/blast_enable"}}]


tellraw @s [{"text": " "}]

execute if score lodestone refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"使磁石更有用一些。\n在磁石上放置一张命名纸来命名它\n也可以使用染料改变文字的颜色。\n在磁石上丢一个末影珍珠会立即创建一个航点，可以通过末影珍珠立即传送到那里。"}]}},{"translate":"更好的磁石： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/lodestone_disable"}}]
execute if score lodestone refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"使磁石更有用一些。\n在磁石上放置一张命名纸来命名它\n也可以使用染料改变文字的颜色。\n在磁石上丢一个末影珍珠会立即创建一个航点，可以通过末影珍珠立即传送到那里。"}]}},{"translate":"更好的磁石： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/lodestone_enable"}}]




tellraw @s [{"text": " "}]



execute if score recovery refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"使恢复指南针显示死亡坐标"}]}},{"translate":"恢复坐标： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/recovery_disable"}}]
execute if score recovery refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"使恢复指南针显示死亡坐标"}]}},{"translate":"恢复坐标： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/block/recovery_enable"}}]





tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 第2页","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/block/settings2"}},{"translate":"    - 3/5 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"第4页 -->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"下一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/block/settings4"}}]


tellraw @s [{"text": " "}]
