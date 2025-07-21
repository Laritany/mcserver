StartupEvents.registry('item', e => {
	const Tool = (
		Name, // Item id
		Type, // 类型
		Damage, // 基础伤害(所填数值+3=游戏内面板数值)
		Use, // 耐久
		Speed, // 挖掘速度
		Setlevel // 工具等级
	) => {
		e.create(Name, Type)
			.attackDamageBaseline(Damage)
			.unstackable()
			.modifyTier(tier => {
				tier.uses = Use
				tier.speed = Speed
				tier.setLevel(Setlevel)
			})
	}
	// 铜剑
	Tool('copper_sword', 'sword', 3, 150, 5.0, 2)
	// 铜镐
	Tool('copper_pickaxe', 'pickaxe', 1, 150, 5.0, 2)
	// 铜斧
	Tool('copper_axe', 'axe', 6, 150, 5.0, 2)
	// 铜锹
	Tool('copper_shovel', 'shovel', 1.5, 150, 5.0, 2)
	// 铜锄
	Tool('copper_hoe', 'hoe', 1, 150, 5.0, 2)
})

StartupEvents.registry('item', e => {
	const Tool = (
		Name, // Item id
		Type, // 类型
		Damage, // 基础伤害(所填数值+3=游戏内面板数值)
		Use, // 耐久
		Speed, // 挖掘速度
		Setlevel // 工具等级
	) => {
		e.create(Name, Type)
			.attackDamageBaseline(Damage)
			.unstackable()
			.modifyTier(tier => {
				tier.uses = Use
				tier.speed = Speed
				tier.setLevel(Setlevel)
			})
	}
	// 紫水晶剑
	Tool('zsj_sword', 'sword', 3, 60, 6.0, 3)
	// 紫水晶镐
	Tool('zsj_pickaxe', 'pickaxe', 1, 60, 6.0, 3)
	// 紫水晶斧
	Tool('zsj_axe', 'axe', 6, 60, 6.0, 3)
	// 紫水晶锹
	Tool('zsj_shovel', 'shovel', 1.5, 60, 6.0, 3)
	// 紫水晶锄
	Tool('zsj_hoe', 'hoe', 1, 60, 6.0, 3)
})

StartupEvents.registry('item', e => {
	const Tool = (
		Name, // Item id
		Type, // 类型
		Damage, // 基础伤害(所填数值+3=游戏内面板数值)
		Use, // 耐久
		Speed, // 挖掘速度
		Setlevel // 工具等级
	) => {
		e.create(Name, Type)
			.attackDamageBaseline(Damage)
			.unstackable()
			.modifyTier(tier => {
				tier.uses = Use
				tier.speed = Speed
				tier.setLevel(Setlevel)
			})
	}
	// 强化下界合金剑
	Tool('ne_sword', 'sword', 7, 2048, 6.0, 5)
	// 强化下界合金镐
	Tool('ne_pickaxe', 'pickaxe', 2, 2048, 6.0, 5)
	// 强化下界合金斧
	Tool('ne_axe', 'axe', 8, 2048, 6.0, 5)
	// 强化下界合金锹
	Tool('ne_shovel', 'shovel', 2, 2048, 6.0, 5)
	// 强化下界合金锄
	Tool('ne_hoe', 'hoe', 2, 2048, 6.0, 5)
})

StartupEvents.registry('item', e => {
	const Tool = (
		Name, // Item id
		Type, // 类型
		Damage, // 基础伤害(所填数值+3=游戏内面板数值)
		Use, // 耐久
		Speed, // 挖掘速度
		Setlevel // 工具等级
	) => {
		e.create(Name, Type)
			.attackDamageBaseline(Damage)
			.unstackable()
			.modifyTier(tier => {
				tier.uses = Use
				tier.speed = Speed
				tier.setLevel(Setlevel)
			})
	}
	// 黑曜石剑
	Tool('obsidian_sword', 'sword', 3, 1024, 5.0, 3)
	// 黑曜石镐
	Tool('obsidian_pickaxe', 'pickaxe', 1, 1024, 5.0, 3)
	// 黑曜石斧
	Tool('obsidian_axe', 'axe', 6, 1024, 5.0, 3)
	// 黑曜石锹
	Tool('obsidian_shovel', 'shovel', 1.5, 1024, 5.0, 3)
	// 黑曜石锄
	Tool('obsidian_hoe', 'hoe', 1, 1024, 5.0, 3)
})

StartupEvents.registry("item",event=>{
    event.create("kubejs:mubang","sword")
	.maxDamage(98)
	.attackDamageBonus(1)
})