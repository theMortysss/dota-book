import strength from '../img/icons/hero_strength.png'
import agility from '../img/icons/hero_agility.png'
import intelligence from '../img/icons/hero_intelligence.png'
import universal from '../img/icons/hero_universal.png'

import melee from '../img/icons/melee.svg'
import ranged from '../img/icons/ranged.svg'

import abbadon from './../img/heroesPictures/abaddon.png'
import abbadonBig from './../img/heroesPictures/abaddonBig.png'
import abaddon_aphotic_shield from './../img/heroesPictures/abaddon_aphotic_shield.png'
import abaddon_borrowed_time from './../img/heroesPictures/abaddon_borrowed_time.png'
import abaddon_death_coil from './../img/heroesPictures/abaddon_death_coil.png'
import abaddon_frostmourne from './../img/heroesPictures/abaddon_frostmourne.png'

import alchemist from './../img/heroesPictures/alchemist.png'
import alchemistBig from './../img/heroesPictures/alchemistBig.png'
import alchemist_acid_spray from './../img/heroesPictures/alchemist_acid_spray.png'
import alchemist_chemical_rage from './../img/heroesPictures/alchemist_chemical_rage.png'
import alchemist_corrosive_weaponry from './../img/heroesPictures/alchemist_corrosive_weaponry.png'
import alchemist_unstable_concoction from './../img/heroesPictures/alchemist_unstable_concoction.png'

import ancient_apparition from './../img/heroesPictures/ancient_apparition.png'
import ancient_apparitionBig from './../img/heroesPictures/ancient_apparitionBig.png'
import ancient_apparition_chilling_touch from './../img/heroesPictures/ancient_apparition_chilling_touch.png'
import ancient_apparition_ice_vortex from './../img/heroesPictures/ancient_apparition_ice_vortex.png'
import ancient_apparition_cold_feet from './../img/heroesPictures/ancient_apparition_cold_feet.png'
import ancient_apparition_ice_blast from './../img/heroesPictures/ancient_apparition_ice_blast.png'

import antimage from './../img/heroesPictures/antimage.png'
import antimageBig from './../img/heroesPictures/antimageBig.png'
import antimage_mana_break from './../img/heroesPictures/antimage_mana_break.png'
import antimage_blink from './../img/heroesPictures/antimage_blink.png'
import antimage_counterspell from './../img/heroesPictures/antimage_counterspell.png'
import antimage_mana_void from './../img/heroesPictures/antimage_mana_void.png'

const heroesList = [
    {
        abilitysImg: [
            abaddon_death_coil,
            abaddon_aphotic_shield,
            abaddon_frostmourne,
            abaddon_borrowed_time
        ],
        strongAgainst: [
            "Silencer",
            "Spectre",
            "Arc Warden",
            "Bane",
            "Puck"
        ],
        weakAgainst: [
            "Marci",
            "Dark Seer",
            "Slark",
            "Ancient Apparation",
            "Doom"
        ],
        img: abbadon,
        imgBig: abbadonBig,
        typeImg: universal,
        atkImg: melee
    },
    {
        abilitysImg: [
            alchemist_acid_spray,
            alchemist_unstable_concoction,
            alchemist_corrosive_weaponry,
            alchemist_chemical_rage
        ],
        strongAgainst: [
            "Wraith King",
            "Brewmaster",
            "Lycan",
            "Puck",
            "Templar Assassin"
        ],
        weakAgainst: [
            "Omniknight",
            "Batrider",
            "Ancient Apparition",
            "Slark",
            "Leshrac"
        ],
        img: alchemist,
        imgBig: alchemistBig,
        typeImg: strength,
        atkImg: melee
    },
    {
        abilitysImg: [
            ancient_apparition_cold_feet,
            ancient_apparition_ice_vortex,
            ancient_apparition_chilling_touch,
            ancient_apparition_ice_blast
        ],
        strongAgainst: [
            "Huskar",
            "Necrophos",
            "Bristleback",
            "Leshrac",
            "Sand King"
        ],
        weakAgainst: [
            "Lycan",
            "Void Spirit",
            "Anti-Mage",
            "Storm Spirit",
            "Arc Warden"
        ],
        img: ancient_apparition,
        imgBig: ancient_apparitionBig,
        typeImg: intelligence,
        atkImg: ranged
    },
    {
        abilitysImg: [
            antimage_mana_break,
            antimage_blink,
            antimage_counterspell,
            antimage_mana_void
        ],
        strongAgainst: [
            "Medusa",
            "Phantom Lancer",
            "Zeus",
            "Ancient Apparition",
            "Winter Wyvern"
        ],
        weakAgainst: [
            "Meepo",
            "Lone Druid",
            "Legion Commander",
            "Phantom Assassin",
            "Troll Warlord"
        ],
        img: antimage,
        imgBig: antimageBig,
        typeImg: agility,
        atkImg: melee
    }
];

export { heroesList };