BlockEvents.rightClicked((e) => {
  const { item, block, player } = e;
  if (item.getId() !== "farmingtales:car_key") return;
  if (item.nbt && block) {
    let car = e.player.level.createEntity("automobility:automobile");
    item.nbt.Pos[0] = Number(block.getX());
    item.nbt.Pos[1] = Number(block.getY() + 1.5);
    item.nbt.Pos[2] = Number(block.getZ());
    car.nbt = item.nbt;
    car.spawn();
    item.nbt = null;
  }
});
ItemEvents.entityInteracted("farmingtales:car_key", (e) => {
  const { item, target } = e;
  if (target.type !== "automobility:automobile") {
    return;
  }
  item.nbt = target.getNbt();
  target.setRemoved("unloaded_to_chunk");
  e.cancel();
});









//创造蛋糕消耗
BlockEvents.rightClicked((e) => {
  const { item, block, player } = e;
  if (block.getId() === "create:blaze_burner" && item.getId() === "create:creative_blaze_cake") {
    if (!player.isCreative()) {
      item.count--;
    }
  }
});