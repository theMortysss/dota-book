import abbadon from './../img/heroesPictures/abaddon.png'
import abaddon_aphotic_shield from './../img/heroesPictures/abaddon_aphotic_shield.png'
import abaddon_borrowed_time from './../img/heroesPictures/abaddon_borrowed_time.png'
import abaddon_death_coil from './../img/heroesPictures/abaddon_death_coil.png'
import abaddon_frostmourne from './../img/heroesPictures/abaddon_frostmourne.png'

const heroes = [
    {
        heroName: 'ABBADON',
        roleDesc: 'ЗАЩИЩАЕТ СОЮЗНИКОВ ИЛИ СЕБЯ САМОГО',
        heroType: "УНИВЕРСАЛЬНЫЙ",
        attackType: "БЛИЖНИЙ БОЙ",
        difficult: "ПРОСТО",
        description: "Abaddon, способный лечиться за счёт вражеских атак, может пережить почти любое нападение. Он всегда готов вклиниться в битву, закрывая союзников щитом и запуская обоюдоострые витки мглы, которыми он увечит врагов и исцеляет товарищей.",
        attributes: [
            22,
            23,
            19
        ],
        attributesIncrease: [
            "+2,2",
            "+1,3",
            "+1,6"
        ],
        roles: [

        ],
        indicators:[

        ],
        talants: [
            "+7 к силе","+15% к замедлению передв. от Curse of Avernus",
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
    // {
    //     Name: 'Name2',
    //     Role: 'Role2',
    //     Img: Dota
    // },
    // {
    //     Name: 'Name3',
    //     Role: 'Role3',
    //     Img: Dota
    // },
    // {
    //     Name: 'Name4',
    //     Role: 'Role4',
    //     Img: Dota
    // },
    // {
    //     Name: 'Name5',
    //     Role: 'Role5',
    //     Img: Dota
    // },
    // {
    //     Name: 'Name6',
    //     Role: 'Role6',
    //     Img: Dota
    // },
];

export {heroes}