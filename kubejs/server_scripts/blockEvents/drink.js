console.info("[farmingtales] drink.js loaded");

BlockEvents.leftClicked(
  [
    "farmingtales:poop_wine",
  ],
  (e) => {
    const { player, block, server } = e;

    player.give(block.id);
    block.set("minecraft:air")    
    server.runCommandSilent(
      `playsound minecraft:item.bottle.fill block @a ${player.x} ${player.y} ${player.z}`
    );
  }
);
