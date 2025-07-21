ItemEvents.armorTierRegistry(e => {
	e.add('wood', tier => {
		tier.durabilityMultiplier = 5 // 耐久系数,具体得上wiki看公式
		tier.slotProtections = [1, 2, 3, 1] // 护甲值,分别对应[鞋子 裤腿 胸甲 头盔]
		tier.enchantmentValue = 6  // 附魔等级
	})
})
// 物品贴图照常放在item
// 身上的贴图要放在assets\kubejs\textures\models\armor
StartupEvents.registry('item', e => {
	const Item = (
		Name,  // Item ID
		Type, // 类型
		Rarity,  // 稀有度
		Tire,  // 盔甲图层
		Glow  // 是否发光
	) => {
		e.create(Name, Type)
			.rarity(Rarity)
			.tier(Tire)
			.glow(Glow)
	}
	// 木头
	Item('wood_helmet', 'helmet', 'common', 'wood', false)
	Item('wood_chestplate', 'chestplate', 'common', 'wood', false)
	Item('wood_leggings', 'leggings', 'common', 'wood', false)
	Item('wood_boots', 'boots', 'common', 'wood', false)
})
ItemEvents.armorTierRegistry(e => {
	e.add('turtle', tier => {
		tier.durabilityMultiplier = 12 // 耐久系数,具体得上wiki看公式
		tier.slotProtections = [2, 5, 6, 2] // 护甲值,分别对应[鞋子 裤腿 胸甲 头盔]
		tier.toughness = 2  // 韧性
		tier.knockbackResistance = 0.1  // 防击退,钻石0.3,同时代表着每件各0.3(30%)
		tier.enchantmentValue = 6  // 附魔等级
		tier.repairIngredient = '#forge:plates/scute'  // 修复材料(填写#Tag)
		tier.equipSound = 'minecraft:item.armor.equip_iron'  // 穿戴音效
	})
})
// 物品贴图照常放在item
// 身上的贴图要放在assets\kubejs\textures\models\armor
StartupEvents.registry('item', e => {
	const Item = (
		Name,  // Item ID
		Type, // 类型
		Rarity,  // 稀有度
		Tire,  // 盔甲图层
		Glow  // 是否发光
	) => {
		e.create(Name, Type)
			.rarity(Rarity)
			.tier(Tire)
			.glow(Glow)
	}
	// 海龟
	Item('turtle_chestplate', 'chestplate', 'common', 'turtle', false)
	Item('turtle_leggings', 'leggings', 'common', 'turtle', false)
	Item('turtle_boots', 'boots', 'common', 'turtle', false)
})
ItemEvents.armorTierRegistry(e => {
	e.add('copper', tier => {
		tier.durabilityMultiplier = 12 // 耐久系数,具体得上wiki看公式
		tier.slotProtections = [2, 4, 3, 2] // 护甲值,分别对应[鞋子 裤腿 胸甲 头盔]
		tier.enchantmentValue = 6  // 附魔等级
		tier.equipSound = 'minecraft:item.armor.equip_iron'  // 穿戴音效
	})
})
// 物品贴图照常放在item
// 身上的贴图要放在assets\kubejs\textures\models\armor
StartupEvents.registry('item', e => {
	const Item = (
		Name,  // Item ID
		Type, // 类型
		Rarity,  // 稀有度
		Tire,  // 盔甲图层
		Glow  // 是否发光
	) => {
		e.create(Name, Type)
			.rarity(Rarity)
			.tier(Tire)
			.glow(Glow)
	}
	// 铜
	Item('copper_helmet', 'helmet', 'common', 'copper', false)
	Item('copper_chestplate', 'chestplate', 'common', 'copper', false)
	Item('copper_leggings', 'leggings', 'common', 'copper', false)
	Item('copper_boots', 'boots', 'common', 'copper', false)
})
ItemEvents.armorTierRegistry(e => {
	e.add('copper', tier => {
		tier.durabilityMultiplier = 5 // 耐久系数,具体得上wiki看公式
		tier.slotProtections = [1, 2, 3, 1] // 护甲值,分别对应[鞋子 裤腿 胸甲 头盔]
		tier.enchantmentValue = 6  // 附魔等级
		tier.repairIngredient = '#c:copper_ingots'  // 修复材料(填写#Tag)
	})
})
// 物品贴图照常放在item
// 身上的贴图要放在assets\kubejs\textures\models\armor
ItemEvents.armorTierRegistry(e => {
	e.add('obsidian', tier => {
		tier.durabilityMultiplier = 30 // 耐久系数,具体得上wiki看公式
		tier.slotProtections = [2, 4, 6, 2] // 护甲值,分别对应[鞋子 裤腿 胸甲 头盔]
		tier.enchantmentValue = 6  // 附魔等级
		tier.toughness = 1  // 韧性
	})
})
// 物品贴图照常放在item
// 身上的贴图要放在assets\kubejs\textures\models\armor
StartupEvents.registry('item', e => {
	const Item = (
		Name,  // Item ID
		Type, // 类型
		Rarity,  // 稀有度
		Tire,  // 盔甲图层
		Glow  // 是否发光
	) => {
		e.create(Name, Type)
			.rarity(Rarity)
			.tier(Tire)
			.glow(Glow)
	}
	//黑曜石
	Item('obsidian_helmet', 'helmet', 'common', 'obsidian', false)
	Item('obsidian_chestplate', 'chestplate', 'common', 'obsidian', false)
	Item('obsidian_leggings', 'leggings', 'common', 'obsidian', false)
	Item('obsidian_boots', 'boots', 'common', 'obsidian', false)
})
//黑曜石锭
StartupEvents.registry("item",event=>{
    event.create("kubejs:obsidian_ingot","basic")
})

// 物品贴图照常放在item
// 身上的贴图要放在assets\kubejs\textures\models\armor
ItemEvents.armorTierRegistry(e => {
	e.add('ne', tier => {
		tier.durabilityMultiplier = 45 // 耐久系数,具体得上wiki看公式
		tier.slotProtections = [5, 8, 10, 5] // 护甲值,分别对应[鞋子 裤腿 胸甲 头盔]
		tier.enchantmentValue = 6  // 附魔等级
		tier.knockbackResistance = 0.2
		tier.toughness = 4  // 韧性
	})
})
// 物品贴图照常放在item
// 身上的贴图要放在assets\kubejs\textures\models\armor
StartupEvents.registry('item', e => {
	const Item = (
		Name,  // Item ID
		Type, // 类型
		Rarity,  // 稀有度
		Tire,  // 盔甲图层
		Glow  // 是否发光
	) => {
		e.create(Name, Type)
			.rarity(Rarity)
			.tier(Tire)
			.glow(Glow)
			
	}
	//特制下界合金
	Item('ne_helmet', 'helmet', 'common', 'ne', false)
	Item('ne_chestplate', 'chestplate', 'common', 'ne', false)
	Item('ne_leggings', 'leggings', 'common', 'ne', false)
	Item('ne_boots', 'boots', 'common', 'ne', false)
})
//特制下界合金锭
StartupEvents.registry("item",event=>{
    event.create("kubejs:ne_ingot","basic")
})

//紫水晶
ItemEvents.armorTierRegistry(e => {
	e.add('zsj', tier => {
		tier.durabilityMultiplier = 4 // 耐久系数,具体得上wiki看公式
		tier.slotProtections = [2, 6, 6, 2] // 护甲值,分别对应[鞋子 裤腿 胸甲 头盔]
		tier.enchantmentValue = 30  // 附魔等级
	})
})
// 物品贴图照常放在item
// 身上的贴图要放在assets\kubejs\textures\models\armor
StartupEvents.registry('item', e => {
	const Item = (
		Name,  // Item ID
		Type, // 类型
		Rarity,  // 稀有度
		Tire,  // 盔甲图层
		Glow  // 是否发光
	) => {
		e.create(Name, Type)
			.rarity(Rarity)
			.tier(Tire)
			.glow(Glow)
	}
	//紫水晶
	Item('zsj_helmet', 'helmet', 'common', 'zsj', false)
	Item('zsj_chestplate', 'chestplate', 'common', 'zsj', false)
	Item('zsj_leggings', 'leggings', 'common', 'zsj', false)
	Item('zsj_boots', 'boots', 'common', 'zsj', false)
})
//紫水晶锭
StartupEvents.registry("item",event=>{
    event.create("kubejs:zsj_ingot","basic")
})
