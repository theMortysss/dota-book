import abbadon from './../img/heroesPictures/abaddon.png'
import abaddon_aphotic_shield from './../img/heroesPictures/abaddon_aphotic_shield.png'
import abaddon_borrowed_time from './../img/heroesPictures/abaddon_borrowed_time.png'
import abaddon_death_coil from './../img/heroesPictures/abaddon_death_coil.png'
import abaddon_frostmourne from './../img/heroesPictures/abaddon_frostmourne.png'

import alchemist from './../img/heroesPictures/alchemist.png'
import alchemist_acid_spray from './../img/heroesPictures/alchemist_acid_spray.png'
import alchemist_chemical_rage from './../img/heroesPictures/alchemist_chemical_rage.png'
import alchemist_corrosive_weaponry from './../img/heroesPictures/alchemist_corrosive_weaponry.png'
import alchemist_unstable_concoction from './../img/heroesPictures/alchemist_unstable_concoction.png'


const heroes = [
    {
        heroName: 'ABBADON',
        roleDesc: 'ЗАЩИЩАЕТ СОЮЗНИКОВ ИЛИ СЕБЯ САМОГО',
        heroType: "УНИВЕРСАЛЬНЫЙ",
        attackType: "БЛИЖНИЙ БОЙ",
        difficult: "ПРОСТО",
        description: "Abaddon, способный лечиться за счёт вражеских атак, может пережить почти любое нападение. Он всегда готов вклиниться в битву, закрывая союзников щитом и запуская обоюдоострые витки мглы, которыми он увечит врагов и исцеляет товарищей.",
        health: "604",
        healthIncrease: "+3.2",
        mana: "303",
        manaIncrease: "+1.2",
        attributes: [
            "22",
            "23",
            "19"
        ],
        attributesIncrease: [
            "+2,2",
            "+1,3",
            "+1,6"
        ],
        roles: [
            2,
            4,
            0,
            0,
            0,
            4,
            0,
            0,
            0
        ],
        attack: [
            "46-56",
            "1.5",
            "150",
            "900"
        ],
        protection: [
            "2.8",
            "25%"
        ],
        mobility: [
            "325",
            "0.6",
            "1800 / 800"
        ],
        talants: [
            "+7 к силе", "+15% к замедлению передв. от Curse of Avernus",
            "+40 к урону/лечению от Mist Coil", "+55 к урону",
            "Borrowed Time сжигает 95 здоровья в секунду", "+100 к здоровью барьера от Aphotic Shield",
            "Mist Coil применяется по области радиусом 400", "–1 атака для срабатывания Curse of Avernus"
        ],
        abilitys: [
            "MIST COIL",
            "APHOTIC SHIELD",
            "CURSE OF AVERNUS",
            "BORROWED TIME"
        ],
        abilitysImg: [
            abaddon_death_coil,
            abaddon_aphotic_shield,
            abaddon_frostmourne,
            abaddon_borrowed_time
        ],
        abilityDescription: [
            "Ценой собственного здоровья герой выпускает смертельный туман, который наносит урон врагу или лечит союзника.",
            "Окружает союзника барьером из тёмной энергии, который поглощает некоторое количество урона. Если барьер пропадёт или его уничтожат, он взорвётся и нанесёт врагам вокруг урон, равный здоровью барьера. Применение снимает с цели оглушение и большинство отрицательных эффектов.",
            "Атаки героя замедляют передвижение жертвы. Если атаковать врага 4.0 раза, его окутают ледяные чары: они накладывают безмолвие и замедление, а все атакующие этого врага существа получают дополнительную скорость атаки.",
            "Обращает весь получаемый урон в лечение. Применение снимает большинство отрицательных эффектов. Если способность готова, то она сработает автоматически, как только здоровье владельца упадёт ниже 400.0."
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
        img: abbadon
    },
    {
        heroName: 'ALCHEMIST',
        roleDesc: 'ПОЛУЧАЕТ БОЛЬШЕ ЗОЛОТА ЗА РУНЫ БОГАТСТВА И УБИЙСТВО СУЩЕСТВ',
        heroType: "СИЛА",
        attackType: "БЛИЖНИЙ БОЙ",
        difficult: "ПРОСТО",
        description: "Alchemist, синтезирующий дополнительные средства за каждое убийство, с лёгкостью получает необходимое вооружение. Он сражается во имя своей жадности, используя едкую кислоту и запас нестабильных химикатов.",
        health: "626",
        healthIncrease: "+2.5",
        mana: "375",
        manaIncrease: "+1.3",
        attributes: [
            "23",
            "22",
            "25"
        ],
        attributesIncrease: [
            "+2,7",
            "+1,5",
            "+1,8"
        ],
        roles: [
            4,
            2,
            2,
            2,
            0,
            4,
            0,
            0,
            2
        ],
        attack: [
            "50-56",
            "1.7",
            "150",
            "900"
        ],
        protection: [
            "3.7",
            "25%"
        ],
        mobility: [
            "295",
            "0.6",
            "1800 / 800"
        ],
        talants: [
            "+125 к радиусу взрыва у Unstable Concoction", "+1 к снижению брони от Acid Spray",
            "+{?} к урону за эффект Greevil's Greed", "Acid Spray даёт броню союзникам",
            "+400 к макс. урону от Unstable Concoction", "–0.1 сек. от интервала атак у Chemical Rage",
            "+50 к восстановлению здоровья от Chemical Rage", "+50 к скорости передв. от Chemical Rage"
        ],
        abilitys: [
            "ACID SPRAY",
            "UNSTABLE CONCOCTION",
            "CORROSIVE WEAPONRY",
            "CHEMICAL RAGE"
        ],
        abilitysImg: [
            alchemist_acid_spray,
            alchemist_unstable_concoction,
            alchemist_corrosive_weaponry,
            alchemist_chemical_rage
        ],
        abilityDescription: [
            "Распыляет в указанной области облако кислоты, которое наносит врагам периодический урон и снижает их броню.",
            "Герой начинает встряхивать колбу с гремучей смесью, которую можно бросить во вражеского героя. При попадании колба взорвётся, оглушив всех противников в радиусе взрыва и нанеся им урон. Чем дольше смесь встряхивать, тем больше урона она нанесёт и тем дольше будет оглушение. Пока герой не бросит колбу, он передвигается быстрее. Максимальный эффект достигается после 5.0 сек., однако если не выбросить колбу через 5.5 секунды, она взорвётся в руках героя, подействовав и на него самого.",
            "Покрытое кислотой оружие героя каждой атакой снижает сопротивление эффектам и скорость передвижения жертв. Замедление и снижение сопротивления становятся сильнее под действием способности Chemical Rage.",
            "Особая химическая смесь разъяряет героя, отчего задержка перед его атакой уменьшается, а скорость его передвижения и восстановление здоровья увеличиваются."
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
        img: alchemist
    }
];

export { heroes }