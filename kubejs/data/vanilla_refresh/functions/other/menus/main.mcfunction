
tellraw @s [{"text": " "}]

tellraw @s [{"translate":"选择一个配置进行设置","color": "yellow"},{"translate": "    ","strikethrough": true},{"translate": "  "},{"translate":"重置设置","color":"#787e8a","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击将设置重置为默认"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/reset_settings"}},{"translate": "  "},{"translate":"全部禁用","color":"#787e8a","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击禁用所有设置（如果您只想使用Vanilla Refresh的创造模式工具，请选择此项）"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/disable_settings"}}]



tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"与玩家相关或由玩家执行的动作配置"}]}},{"translate":"玩家","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击打开"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/player/settings1"}},{"translate":"  "},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"与玩家死亡相关的配置"}]}},{"translate":"死亡","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击打开"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/death/settings1"}},{"translate":"  "},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"与方块和物品相关的配置"}]}},{"translate":"方块/物品","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击打开"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/block/settings1"}},{"translate": "  ","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"允许你禁用常见的破坏方法的配置"}]}},{"translate":"破坏","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击打开"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/antigrief/settings1"}}]




tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"与实体相关的配置"}]}},{"translate":"实体","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击打开"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/mob/settings1"}},{"translate":"   "},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"与统计信息显示相关的配置"}]}},{"translate":"玩家统计","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击打开"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/stats/settings1"}},{"translate":"  "},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"其他随机配置"}]}},{"translate":"其他","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"点击打开"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/other/settings1"}}]


tellraw @s [{"text": " "}]
