const bigData = [
    {
        id: 1,
        type: 'type_auto_1',
        title: 'Шиномонтаж',
        diameter: 13,
        price: 230,
        isDelete: false
    },
    {
        id: 2,
        type: 'type_auto_1',
        title: 'Балансировка',
        diameter: 13,
        price: 290,
        isDelete: false
    },
    {
        id: 3,
        type: 'type_auto_1',
        title: 'Съем/установка',
        diameter: 13,
        price: 230,
        isDelete: false
    },
    {
        id: 4,
        type: 'type_auto_1',
        title: 'Мойка',
        diameter: 13,
        price: 50,
        isDelete: false
    },
    {
        id: 5,
        type: 'type_auto_1',
        title: '+RunFlat (или низкий профиль до 45)',
        diameter: 13,
        price: 90,
        isDelete: false
    },
    {
        id: 6,
        type: 'type_auto_1',
        title: 'Балансировка грязевых шин ATM/MT/XT (профиль от 65)',
        diameter: 13,
        price: 50,
        isDelete: false
    },
    {
        id: 7,
        type: 'type_auto_1',
        title: 'Вулканизаци (за прокол)',
        diameter: 13,
        price: 1200,
        isDelete: false
    },
    {
        id: 8,
        type: 'type_auto_1',
        title: 'Замена вентиля (черный)',
        diameter: 13,
        price: 50,
        isDelete: false
    },
    {
        id: 9,
        type: 'type_auto_1',
        title: 'Замена вентиля (хром)',
        diameter: 13,
        price: 100,
        isDelete: false
    },
    {
        id: 10,
        type: 'type_auto_1',
        title: 'Герметизация бортов (1 колесо)',
        diameter: 13,
        price: 100,
        isDelete: false
    },
    {
        id: 11,
        type: 'type_auto_1',
        title: 'Ремонт камеры (1 повреждение)',
        diameter: 13,
        price: 200,
        isDelete: false
    },
    {
        id: 12,
        type: 'type_auto_1',
        title: 'Ремонт заплаткой (1 повреждение)',
        diameter: 13,
        price: 350,
        isDelete: false
    },
    {
        id: 13,
        type: 'type_auto_1',
        title: 'Ремонт грибком (1 повреждение)',
        diameter: 13,
        price: 400,
        isDelete: false
    },
    {
        id: 14,
        type: 'type_auto_1',
        title: 'Ремонт кордовой заплаткой (1 повреждение)',
        diameter: 13,
        price: 500,
        isDelete: false
    },
    {
        id: 15,
        type: 'type_auto_1',
        title: 'Ремонт жгутом (1 повреждение)',
        diameter: 13,
        price: 200,
        isDelete: false
    },
    {
        id: 16,
        type: 'type_auto_1',
        title: 'Подкачка (проверка давления)',
        diameter: 13,
        price: 25,
        isDelete: false
    },
    {
        id: 17,
        type: 'type_auto_1',
        title: 'Очистка диска от грязи щеткой',
        diameter: 13,
        price: 25,
        isDelete: false
    },
    {
        id: 18,
        type: 'type_auto_1',
        title: 'Упаковка шин в пакеты',
        diameter: 13,
        price: 50,
        isDelete: false
    },
    {
        id: 19,
        type: 'type_auto_1',
        title: 'Установка камеры',
        diameter: 13,
        price: 100,
        isDelete: false
    },
    {
        id: 20,
        type: 'type_auto_1',
        title: 'Смазка ступиц медной смазкой',
        diameter: 13,
        price: 50,
        isDelete: false
    },
    {
        id: 21,
        type: 'type_auto_1',
        title: 'Глубокая шлифовка бортов диска',
        diameter: 13,
        price: 200,
        isDelete: false
    },
    {
        id: 22,
        type: 'type_auto_1',
        title: 'Установка датчика давления',
        diameter: 13,
        price: 250,
        isDelete: false
    },
    {
        id: 23,
        type: 'type_auto_1',
        title: 'Сбор или разбор колеса',
        diameter: 13,
        price: 70,
        isDelete: false
    },
    {
        id: 24,
        type: 'type_auto_1',
        title: 'Горячая варка',
        diameter: 13,
        price: 2000,
        isDelete: false
    },
    {
        id: 25,
        type: 'type_auto_1',
        title: 'Правка стальных дисков',
        diameter: 13,
        price: 500,
        isDelete: false
    },
    {
        id: 26,
        type: 'type_auto_1',
        title: 'Правка литых дисков',
        diameter: 13,
        price: 500,
        isDelete: false
    },
    {
        id: 27,
        type: 'type_auto_1',
        title: 'Шиномонтаж',
        diameter: 14,
        price: 230,
        isDelete: false
    },
    {
        id: 28,
        type: 'type_auto_1',
        title: 'Балансировка',
        diameter: 14,
        price: 290,
        isDelete: false
    },
    {
        id: 29,
        type: 'type_auto_1',
        title: 'Съем/установка',
        diameter: 14,
        price: 230,
        isDelete: false
    },
    {
        id: 30,
        type: 'type_auto_1',
        title: 'Мойка',
        diameter: 14,
        price: 50,
        isDelete: false
    },
    {
        id: 31,
        type: 'type_auto_1',
        title: '+RunFlat (или низкий профиль до 45)',
        diameter: 14,
        price: 90,
        isDelete: false
    },
    {
        id: 32,
        type: 'type_auto_1',
        title: 'Балансировка грязевых шин ATM/MT/XT (профиль от 65)',
        diameter: 14,
        price: 50,
        isDelete: false
    },
    {
        id: 32,
        type: 'type_auto_1',
        title: 'Вулканизаци (за прокол)',
        diameter: 14,
        price: 1200,
        isDelete: false
    },
    {
        id: 32,
        type: 'type_auto_1',
        title: 'Замена вентиля (черный)',
        diameter: 14,
        price: 50,
        isDelete: false
    },
    {
        id: 32,
        type: 'type_auto_1',
        title: 'Замена вентиля (хром)',
        diameter: 14,
        price: 100,
        isDelete: false
    },
    {
        id: 32,
        type: 'type_auto_1',
        title: 'Герметизация бортов (1 колесо)',
        diameter: 14,
        price: 100,
        isDelete: false
    },
    {
        id: 33,
        type: 'type_auto_1',
        title: 'Ремонт камеры (1 повреждение)',
        diameter: 14,
        price: 200,
        isDelete: false
    },
    {
        id: 34,
        type: 'type_auto_1',
        title: 'Ремонт заплаткой (1 повреждение)',
        diameter: 14,
        price: 350,
        isDelete: false
    },
    {
        id: 35,
        type: 'type_auto_1',
        title: 'Ремонт грибком (1 повреждение)',
        diameter: 14,
        price: 400,
        isDelete: false
    },
    {
        id: 36,
        type: 'type_auto_1',
        title: 'Ремонт кордовой заплаткой (1 повреждение)',
        diameter: 14,
        price: 500,
        isDelete: false
    },
    {
        id: 37,
        type: 'type_auto_1',
        title: 'Ремонт жгутом (1 повреждение)',
        diameter: 14,
        price: 200,
        isDelete: false
    },
    {
        id: 38,
        type: 'type_auto_1',
        title: 'Подкачка (проверка давления)',
        diameter: 14,
        price: 25,
        isDelete: false
    },
    {
        id: 39,
        type: 'type_auto_1',
        title: 'Очистка диска от грязи щеткой',
        diameter: 14,
        price: 25,
        isDelete: false
    },
    {
        id: 40,
        type: 'type_auto_1',
        title: 'Упаковка шин в пакеты',
        diameter: 14,
        price: 50,
        isDelete: false
    },
    {
        id: 41,
        type: 'type_auto_1',
        title: 'Установка камеры',
        diameter: 14,
        price: 100,
        isDelete: false
    },
    {
        id: 42,
        type: 'type_auto_1',
        title: 'Смазка ступиц медной смазкой',
        diameter: 14,
        price: 50,
        isDelete: false
    },
    {
        id: 43,
        type: 'type_auto_1',
        title: 'Глубокая шлифовка бортов диска',
        diameter: 14,
        price: 200,
        isDelete: false
    },
    {
        id: 44,
        type: 'type_auto_1',
        title: 'Установка датчика давления',
        diameter: 14,
        price: 250,
        isDelete: false
    },
    {
        id: 45,
        type: 'type_auto_1',
        title: 'Сбор или разбор колеса',
        diameter: 14,
        price: 70,
        isDelete: false
    },
    {
        id: 46,
        type: 'type_auto_1',
        title: 'Горячая варка',
        diameter: 14,
        price: 2000,
        isDelete: false
    },
    {
        id: 47,
        type: 'type_auto_1',
        title: 'Правка стальных дисков',
        diameter: 14,
        price: 500,
        isDelete: false
    },
    {
        id: 48,
        type: 'type_auto_1',
        title: 'Правка литых дисков',
        diameter: 14,
        price: 500,
        isDelete: false
    },
]

export default bigData