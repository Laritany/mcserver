ItemEvents.rightClicked("farmingtales:blind_box_cloth", (e) => {
  const { server, player, item } = e;
  
  // 播放打开盒子的音效
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );

  // 获取标签中的物品列表并验证
  const blind = Ingredient.of("@selfexpression").itemIds;
  if (!blind || blind.length === 0) {
    player.tell("§c无法获取selfexpression标签中的物品列表！");
    return;
  }

  // 减少物品数量（非创造模式）
  if (!player.isCreative()) item.count--;
  
  // 随机选择一个物品
  const selectedItem = blind[Math.floor(Math.random() * blind.length)];
  
  // 创建并生成物品实体
  let reward = player.level.createEntity("minecraft:item");
  reward.x = player.x;
  reward.y = player.y;
  reward.z = player.z;
  reward.item = selectedItem;
  reward.spawn();
  
  // 播放完成音效
  server.runCommandSilent(
    `playsound meadow:click_camera block @a ${player.x} ${player.y} ${player.z}`
  );
  
  // 添加冷却时间（假设单位是游戏刻，20刻=1秒）
  player.addItemCooldown("farmingtales:blind_box_cloth", 15);
});







ItemEvents.rightClicked("farmingtales:blind_box_trim_templates", (e) => {
  const { server, player, item } = e;
  
  // 播放打开盒子的音效
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );

  // 获取标签中的物品列表并验证
  const blind = Ingredient.of("#minecraft:trim_templates").itemIds;
  if (!blind || blind.length === 0) {
    player.tell("§c无法获取selfexpression标签中的物品列表！");
    return;
  }

  // 减少物品数量（非创造模式）
  if (!player.isCreative()) item.count--;
  
  // 随机选择一个物品
  const selectedItem = blind[Math.floor(Math.random() * blind.length)];
  
  // 创建并生成物品实体
  let reward = player.level.createEntity("minecraft:item");
  reward.x = player.x;
  reward.y = player.y;
  reward.z = player.z;
  reward.item = selectedItem;
  reward.spawn();
  
  // 播放完成音效
  server.runCommandSilent(
    `playsound meadow:click_camera block @a ${player.x} ${player.y} ${player.z}`
  );
  
  // 添加冷却时间（假设单位是游戏刻，20刻=1秒）
  player.addItemCooldown("farmingtales:blind_box_trim_templates", 15);
});







ItemEvents.rightClicked("farmingtales:blind_box_banner_pattern", (e) => {
  const { server, player, item } = e;
  
  // 播放打开盒子的音效
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );

  // 获取标签中的物品列表并验证
  const blind = Ingredient.of("#kubejs:banner").itemIds;
  if (!blind || blind.length === 0) {
    player.tell("§c无法获取selfexpression标签中的物品列表！");
    return;
  }

  // 减少物品数量（非创造模式）
  if (!player.isCreative()) item.count--;
  
  // 随机选择一个物品
  const selectedItem = blind[Math.floor(Math.random() * blind.length)];
  
  // 创建并生成物品实体
  let reward = player.level.createEntity("minecraft:item");
  reward.x = player.x;
  reward.y = player.y;
  reward.z = player.z;
  reward.item = selectedItem;
  reward.spawn();
  
  // 播放完成音效
  server.runCommandSilent(
    `playsound meadow:click_camera block @a ${player.x} ${player.y} ${player.z}`
  );
  
  // 添加冷却时间（假设单位是游戏刻，20刻=1秒）
  player.addItemCooldown("farmingtales:blind_box_banner_pattern", 15);
});






ItemEvents.rightClicked("farmingtales:blind_box_flower", (e) => {
  const { server, player, item } = e;
  
  // 播放打开盒子的音效
  server.runCommandSilent(
    `playsound minecraft:ui.stonecutter.take_result block @a ${player.x} ${player.y} ${player.z}`
  );

  // 获取标签中的物品列表并验证
  const blind = Ingredient.of("#minecraft:flowers").itemIds;
  if (!blind || blind.length === 0) {
    player.tell("§c无法获取selfexpression标签中的物品列表！");
    return;
  }

  // 减少物品数量（非创造模式）
  if (!player.isCreative()) item.count--;
  
  // 随机选择一个物品
  const selectedItem = blind[Math.floor(Math.random() * blind.length)];
  
  // 创建并生成物品实体
  let reward = player.level.createEntity("minecraft:item");
  reward.x = player.x;
  reward.y = player.y;
  reward.z = player.z;
  reward.item = selectedItem;
  reward.spawn();
  
  // 播放完成音效
  server.runCommandSilent(
    `playsound meadow:click_camera block @a ${player.x} ${player.y} ${player.z}`
  );
})


ItemEvents.rightClicked(event => {
    if (event.player.mainHandItem.id == "farmingtales:house_zahuoshangdian") {
        const player = event.player;
        const x = player.x; const y = player.y; const z = player.z;
        const command = `/capsule giveLinked zahuoshangdian.nbt @p[x=${x},y=${y},z=${z}]`;
        event.server.runCommandSilent(command);
        event.item.count--;
        player.tell("§a兑换成功！");
    }
    
    if (event.player.mainHandItem.id == "farmingtales:house_zc") {
        const player = event.player;
        const x = player.x; const y = player.y; const z = player.z;
        const command = `/capsule giveLinked zc.nbt @p[x=${x},y=${y},z=${z}]`;
        event.server.runCommandSilent(command);
        event.item.count--;
        player.tell("§a兑换成功！");
    }

    if (event.player.mainHandItem.id == "farmingtales:house_niangjiuxiaowu") {
        const player = event.player;
        const x = player.x; const y = player.y; const z = player.z;
        const command = `/capsule giveLinked niangjiuxiaowu.nbt @p[x=${x},y=${y},z=${z}]`;
        event.server.runCommandSilent(command);
        event.item.count--;
        player.tell("§a兑换成功！");
    }

    if (event.player.mainHandItem.id == "farmingtales:house_mianbaoxiaodian") {
        const player = event.player;
        const x = player.x; const y = player.y; const z = player.z;
        const command = `/capsule giveLinked mianbaoxiaodian.nbt @p[x=${x},y=${y},z=${z}]`;
        event.server.runCommandSilent(command);
        event.item.count--;
        player.tell("§a兑换成功！");
    }

    if (event.player.mainHandItem.id == "farmingtales:house_kafei") {
        const player = event.player;
        const x = player.x; const y = player.y; const z = player.z;
        const command = `/capsule giveLinked kafei.nbt @p[x=${x},y=${y},z=${z}]`;
        event.server.runCommandSilent(command);
        event.item.count--;
        player.tell("§a兑换成功！");
    }

    if (event.player.mainHandItem.id == "farmingtales:house_juminxiaowu") {
        const player = event.player;
        const x = player.x; const y = player.y; const z = player.z;
        const command = `/capsule giveLinked juminxiaowu.nbt @p[x=${x},y=${y},z=${z}]`;
        event.server.runCommandSilent(command);
        event.item.count--;
        player.tell("§a兑换成功！");
    }

    if (event.player.mainHandItem.id == "farmingtales:house_jiuguan") {
        const player = event.player;
        const x = player.x; const y = player.y; const z = player.z;
        const command = `/capsule giveLinked jiuguan.nbt @p[x=${x},y=${y},z=${z}]`;
        event.server.runCommandSilent(command);
        event.item.count--;
        player.tell("§a兑换成功！");
    }

    if (event.player.mainHandItem.id == "farmingtales:house_gaibancangku") {
        const player = event.player;
        const x = player.x; const y = player.y; const z = player.z;
        const command = `/capsule giveLinked gaibancangku.nbt @p[x=${x},y=${y},z=${z}]`;
        event.server.runCommandSilent(command);
        event.item.count--;
        player.tell("§a兑换成功！");
    }

    if (event.player.mainHandItem.id == "farmingtales:house_dangaodian") {
        const player = event.player;
        const x = player.x; const y = player.y; const z = player.z;
        const command = `/capsule giveLinked dangaodian.nbt @p[x=${x},y=${y},z=${z}]`;
        event.server.runCommandSilent(command);
        event.item.count--;
        player.tell("§a兑换成功！");
    }

    if (event.player.mainHandItem.id == "farmingtales:house_caodianxiaowu") {
        const player = event.player;
        const x = player.x; const y = player.y; const z = player.z;
        const command = `/capsule giveLinked caodianxiaowu.nbt @p[x=${x},y=${y},z=${z}]`;
        event.server.runCommandSilent(command);
        event.item.count--;
        player.tell("§a兑换成功！");
    }

    if (event.player.mainHandItem.id == "farmingtales:house_cesuo") {
        const player = event.player;
        const x = player.x; const y = player.y; const z = player.z;
        const command = `/capsule giveLinked cesuo.nbt @p[x=${x},y=${y},z=${z}]`;
        event.server.runCommandSilent(command);
        event.item.count--;
        player.tell("§a兑换成功！");
    }
});





