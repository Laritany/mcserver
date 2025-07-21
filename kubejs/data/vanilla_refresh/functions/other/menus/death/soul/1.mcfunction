

tellraw @s [{"text": " "}]

tellraw @s [{"text": "灵魂链接设置","color": "aqua"}]



tellraw @s [{"text": " "}]


execute if score soul_takeitems refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"灵魂链接在死亡时是否拾取并存储物品。如果禁用，它们将只拾取经验等级。"}]}},{"translate":"拾取/存储物品： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/death/soul_takeitems_disable"}}]
execute if score soul_takeitems refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"灵魂链接在死亡时是否拾取并存储物品。如果禁用，它们将只拾取经验等级。"}]}},{"translate":"拾取/存储物品： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/death/soul_takeitems_enable"}}]



tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"当收集灵魂链接时，返还玩家死亡前拥有的经验等级的百分比"}]}},{"translate":"返还的经验等级百分比： ","color":"gray"},{"score":{"name": "soul_percentxp","objective": "refresh_settings"},"color":"light_purple","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改"}]},"clickEvent":{"action":"suggest_command","value":"/scoreboard players set @s refresh_soul_percent_xp 80"}},{"translate":"%","color":"light_purple","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改"}]},"clickEvent":{"action":"suggest_command","value":"/scoreboard players set @s refresh_soul_percent_xp 65"}}]



tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"灵魂链接过期并在地上掉落其存储的物品和经验值的时间长度"}]}},{"translate":"过期时间： ","color":"gray"},{"score":{"name": "soul_despawntime","objective": "refresh_settings"},"color":"light_purple","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改"}]},"clickEvent":{"action":"suggest_command","value":"/scoreboard players set @s refresh_soul_despawntime_minutes 120"}},{"translate":" 分钟","color":"light_purple","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改"}]},"clickEvent":{"action":"suggest_command","value":"/scoreboard players set @s refresh_soul_despawntime_minutes 240"}}]

tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 返回","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/death/settings2"}}]

tellraw @s [{"text": " "}]
