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

import ancient_apparition from './../img/heroesPictures/ancient_apparition.png'
import ancient_apparition_chilling_touch from './../img/heroesPictures/ancient_apparition_chilling_touch.png'
import ancient_apparition_ice_vortex from './../img/heroesPictures/ancient_apparition_ice_vortex.png'
import ancient_apparition_cold_feet from './../img/heroesPictures/ancient_apparition_cold_feet.png'
import ancient_apparition_ice_blast from './../img/heroesPictures/ancient_apparition_ice_blast.png'

import antimage from './../img/heroesPictures/antimage.png'
import antimage_mana_break from './../img/heroesPictures/antimage_mana_break.png'
import antimage_blink from './../img/heroesPictures/antimage_blink.png'
import antimage_counterspell from './../img/heroesPictures/antimage_counterspell.png'
import antimage_mana_void from './../img/heroesPictures/antimage_mana_void.png'


const heroesList = [
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
    },
    {
        heroName: 'ANCIENT APPARITION',
        roleDesc: 'ЗАПУСКАЕТ МОЩНЫЙ ЛЕДЯНОЙ ШАР В ЛЮБУЮ ТОЧКУ КАРТЫ',
        heroType: "ИНТЕЛЛЕКТ",
        attackType: "ДАЛЬНИЙ БОЙ",
        difficult: "СРЕДНЯЯ",
        description: "Ancient Apparition, способный запустить мощный заряд льда через всё поле битвы, может заморозить раненых врагов до смерти, где бы те ни находились. Он держит врагов в напряжении, замедляя их и помогая своим союзникам.",
        health: "560",
        healthIncrease: "+2.3",
        mana: "351",
        manaIncrease: "+1.1",
        attributes: [
            "20",
            "20",
            "23"
        ],
        attributesIncrease: [
            "+1,9",
            "+2,2",
            "+3,1"
        ],
        roles: [
            0,
            4,
            2,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        attack: [
            "44-54",
            "1.7",
            "675",
            "1250"
        ],
        protection: [
            "2.3",
            "25%"
        ],
        mobility: [
            "285",
            "0.6",
            "1800 / 800"
        ],
        talants: [
            "+40 к урону в секунду от Cold Feet", "+300 к дальности атаки от Chilling Touch",
            "+300 к расстоянию разрыва у Cold Feet", "–2 сек. перезарядки Ice Vortex",
            "+80 к урону от Chilling Touch", "+4 сек. к длительности Ice Vortex",
            "+4% к здоровью для убийства у Ice Blast", "Cold Feet применяется по области радиусом 450"
        ],
        abilitys: [
            "COLD FEET",
            "ICE VORTEX",
            "CHILLING TOUCH",
            "ICE BLAST"
        ],
        abilitysImg: [
            ancient_apparition_cold_feet,
            ancient_apparition_ice_vortex,
            ancient_apparition_chilling_touch,
            ancient_apparition_ice_blast
        ],
        abilityDescription: [
            "Накладывает на врага морозное заклятие, отчего тот получает периодический урон. Эффект развеется, если цель отойдёт достаточно далеко от точки применения способности. В противном случае через 4 секунды цель будет оглушена и приморозится к месту.",
            "Создаёт вихрь ледяной энергии, который наносит врагам в области действия урон, замедляет их и увеличивает получаемый ими магический урон.",
            "Увеличивает дальность следующей атаки. Она наносит значительный магический урон и замедляет жертву.",
            "Отправляет снаряд в направлении выбранной точки на карте. Повторное применение запускает ледяной шар, который взорвётся там, где находился снаряд на момент активации. Чем дальше он пролетит, тем больше будет радиус взрыва. У врагов, которые оказались в радиусе взрыва или на пути ледяного шара, застывает кровь, отчего они не могут лечиться и восстанавливать здоровье. Если здоровье поражённой цели упадёт ниже определённого уровня, она мгновенно разобьётся на осколки."
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
        img: ancient_apparition
    },
    {
        heroName: 'ANTI-MAGE',
        roleDesc: 'ВЫЖИГАЕТ МАНУ ВРАГОВ АТАКАМИ',
        heroType: "ЛОВКОСТЬ",
        attackType: "БЛИЖНИЙ БОЙ",
        difficult: "ПРОСТО",
        description: "Если Anti-Mage наберёт полную силу, мало кто сможет его остановить. Он способен забирать у врагов ману каждым ударом или телепортироваться на небольшие расстояния, что не позволяет врагам загнать его в угол.",
        health: "538",
        healthIncrease: "+2.6",
        mana: "219",
        manaIncrease: "+0.6",
        attributes: [
            "19",
            "24",
            "12"
        ],
        attributesIncrease: [
            "+1,6",
            "+2,8",
            "+1,8"
        ],
        roles: [
            5,
            0,
            2,
            0,
            0,
            0,
            5,
            0,
            0
        ],
        attack: [
            "53-57",
            "1.4",
            "150",
            ""
        ],
        protection: [
            "5.0",
            "25%"
        ],
        mobility: [
            "310",
            "0.6",
            "1800 / 800"
        ],
        talants: [
            "+150 к радиусу Mana Void", "+9 к силе",
            "–1 сек. перезарядки Blink", "+0.6% к сжигаемой макс. мане от Mana Burn",
            "+150 к дальности Blink", "+0.15 к урону за единицу маны от Mana Void",
            "–50 сек. перезарядки Mana Void", "+20% к сопротивлению магии от Counterspell"
        ],
        abilitys: [
            "MANA BREAK",
            "BLINK",
            "COUNTERSPELL",
            "MANA VOID"
        ],
        abilitysImg: [
            antimage_mana_break,
            antimage_blink,
            antimage_counterspell,
            antimage_mana_void
        ],
        abilityDescription: [
            "Каждая атака сжигает ману цели и наносит ей урон, равный доле от сожжённой маны. Замедляет жертв, у которых нет маны.",
            "Перемещение на короткую дистанцию, позволяющее ворваться в схватку или быстро из неё сбежать.",
            "Пассивно увеличивает сопротивление магическому урону. Можно применить, чтобы создать вокруг себя противомагический щит, который полностью блокирует и отражает все направленные заклинания обратно во врага.",
            "Кратковременно оглушает вражескую цель, а затем наносит ей и всем окружающим её противникам урон, пропорциональный числу отсутствующей у неё маны."
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
        img: antimage
    }
];

export { heroesList };