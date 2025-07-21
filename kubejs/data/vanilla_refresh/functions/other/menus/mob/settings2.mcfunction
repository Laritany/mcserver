
tellraw @s [{"text": " "}]


execute if score homingxp refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"1秒后，经验球体会自动追踪64格内最近的玩家"}]}},{"translate":"自动追踪的经验球体： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/orb_disable"}}]
execute if score homingxp refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"1秒后，经验球体会自动追踪64格内最近的玩家"}]}},{"translate":"自动追踪的经验球体： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/orb_enable"}}]

tellraw @s [{"text": " "}]

execute if score dragonelytra refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"末影龙被杀死时，它将掉落一套鞘翅"}]}},{"translate":"龙之翼 ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/dragonelytra_disable"}}]
execute if score dragonelytra refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"末影龙被杀死时，它将掉落一套鞘翅"}]}},{"translate":"龙之翼 ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/dragonelytra_enable"}}]


tellraw @s [{"text": " "}]


execute if score dragonegg refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"每次末影龙被杀死时，它都会掉落一个龙蛋，而不仅仅是第一次被杀死时"}]}},{"translate":"可再生的龙蛋： ","color":"gray"},{"translate":"已启用","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/egg_disable"}}]
execute if score dragonegg refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"每次末影龙被杀死时，它都会掉落一个龙蛋，而不仅仅是第一次被杀死时"}]}},{"translate":"可再生的龙蛋： ","color":"gray"},{"translate":"已禁用","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击更改此设置"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/mob/egg_enable"}}]



tellraw @s [{"text": " "}]




tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- 第1页","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"上一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/mob/settings1"}},{"translate":"    - 2/4 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"第3页 -->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"下一页"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/mob/settings3"}}]


tellraw @s [{"text": " "}]
