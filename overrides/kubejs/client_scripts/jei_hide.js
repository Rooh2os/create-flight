RecipeViewerEvents.removeEntries('item', event => {
    const itemsToHide = [
    /^sophisticatedbackpacks:(?!upgrade_base|stack_upgrade_(starter_tier|tier_1|tier_2|tier_3|tier_4)).*upgrade.*/,
    /^.*:.*incomplete.*/,
    /^.*:.*_spawn_egg$/,
    'sophisticatedbackpacks:stack_upgrade_tier_4',
	'sophisticatedbackpacks:stack_downgrade_tier_1',
	'sophisticatedbackpacks:stack_downgrade_tier_2',
	'sophisticatedbackpacks:stack_downgrade_tier_3',
    'easy_villagers:auto_trader',
    'easy_villagers:farmer',
    'easy_villagers:breeder',
    'easy_villagers:converter',
    'easy_villagers:iron_farm',
    'easy_villagers:incubator',
    'easy_villagers:inventory_viewer',
    'minecraft:command_block',
    'minecraft:barrier',
    'minecraft:repeating_command_block',
    'minecraft:chain_command_block',
    'minecraft:structure_void',
    'minecraft:structure_block',
    'minecraft:jigsaw',
    'minecraft:filled_map',
    'minecraft:command_block_minecart',
    'minecraft:knowledge_book',
    'minecraft:debug_stick',
    'sophisticatedcore:xp_bucket'
    ]

    event.remove(itemsToHide)
})

RecipeViewerEvents.removeEntries('fluid', event => {
    event.remove('sophisticatedcore:xp_still')
})