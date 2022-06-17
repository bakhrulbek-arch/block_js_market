let body = document.body
let block = document.createElement('div')
body.append(block)

// Цыкл для увелечения объектов 
for (let i = 0; i <= 4; i++) {
    block.classList.add('set')
    // Див body и блоки
    let blc_product = document.createElement('div')
    let blc_pr_blc = document.createElement('div')

    // Классы для главных блоков
    blc_product.classList.add('blc_product')
    blc_pr_blc.classList.add('blc_pr_blc')
    // блоки внутры продукта вверх и вниз
    let blc_pr_t = document.createElement('div')
    let blc_pr_b = document.createElement('div')

    // Классы для главных блоков
    blc_pr_t.classList.add('blc_pr_t')
    blc_pr_b.classList.add('blc_pr_b')

    // блоки внутры продукта вверхняя часть
    // разделяется на вверх и вниз
    let blc_pr_t_t = document.createElement('div')
    let blc_pr_t_b = document.createElement('div')

    // Классы для главных блоков
    blc_pr_t_t.classList.add('blc_pr_t_t')
    blc_pr_t_b.classList.add('blc_pr_t_b')

    // Блоки внутри продукта верхняя часть
    // 3 блока Левый, правый и центр 
    let blc_pr_t_t_l = document.createElement('div')
    let blc_pr_t_t_c = document.createElement('div')
    let blc_pr_t_t_r = document.createElement('div')

    // Классы для главных блоков
    blc_pr_t_t_l.classList.add('blc_pr_t_t_l')
    blc_pr_t_t_c.classList.add('blc_pr_t_t_c')
    blc_pr_t_t_r.classList.add('blc_pr_t_t_r')

    // изображение товара центральное фото
    let img_phone = document.createElement('img')
    img_phone.src = "./img/img_phone.png"
    img_phone.classList.add('img_phone')

    // иконка авто left btn
    let icon_auto = document.createElement('img')
    icon_auto.src = "./icon/auto_icon.png"
    icon_auto.classList.add('icon_auto')

    // блок для иконок
    // иконка favorite/like & share
    let blc_icon = document.createElement('div')
    let favorite = document.createElement('img')
    let share = document.createElement('img')

    let liked = document.createElement('div')
    liked.classList.add('liked')
    blc_product.append(liked)
    // ссылки иконок
    favorite.src = './icon/favorite.svg'
    share.src = './icon/share.svg'

    //liked div // click
    favorite.onclick = () => {
        favorite.src = './icon/favorite_likeD.svg'

        setTimeout(() => {
            liked.classList.add('liked_act')
        }, 50)
        setTimeout(() => {
            liked.classList.remove('liked_act')
        }, 600)
    }

    //share click
    let share_clc = document.createElement('div')
    share_clc.classList.add('share_clc')

    let share_clc_img_tg = document.createElement('img')
    let share_clc_img_fc = document.createElement('img')
    let share_clc_img_ytube = document.createElement('img')

    share_clc_img_tg.src = './icon/social/telegram.svg'
    share_clc_img_fc.src = './icon/social/facebook.svg'
    share_clc_img_ytube.src = './icon/social/ytube.svg'

    share_clc_img_tg.classList.add('set_img_share')
    share_clc_img_fc.classList.add('set_img_share')
    share_clc_img_ytube.classList.add('set_img_share')

    share_clc.append(share_clc_img_tg, share_clc_img_fc, share_clc_img_ytube)

    share.onclick = () => {
        if (share_clc.classList.contains('act_share')) {
            share_clc.classList.remove('act_share')
            share.src = './icon/share.svg'
        } else {
            share.src = './icon/share_resent.svg'
            share_clc.classList.add('act_share')
        }
    }
    // класс для блока иконок
    blc_icon.classList.add('blc_icon')

    // class для иконок
    favorite.classList.add('favorite')
    share.classList.add('share')

    // тип описания товара 'h2'
    h2_pr_t_b = document.createElement('h2')
    h2_pr_t_b.classList.add('h2_pr_t_b')
    h2_pr_t_b.innerHTML = 'Смартфоны'

    // Соединение Блоков с body & HTML и класса
    block.append(blc_product)
    blc_product.append(blc_pr_blc)
    blc_pr_blc.append(blc_pr_t, blc_pr_b)
    blc_pr_t.append(blc_pr_t_t, blc_pr_t_b)
    blc_pr_t_t.append(blc_pr_t_t_l, blc_pr_t_t_c, blc_pr_t_t_r)

    // Соединение товаров
    blc_pr_t_t_c.append(img_phone)
    blc_pr_t_t_l.append(icon_auto)
    blc_pr_t_t_r.append(blc_icon, share_clc)
    blc_icon.append(favorite, share)
    blc_pr_t_b.append(h2_pr_t_b)

    // Нижний раздел
    // добавление класса второму блоку товара
    blc_pr_b.classList.add('blc_pr_b')

    // часть внутренного объекта
    // создание обекта блоков
    let blc_pr_b_t = document.createElement('div')
    let blc_pr_b_c = document.createElement('div')
    let blc_pr_b_b = document.createElement('div')

    // добавление классов обекта
    blc_pr_b_t.classList.add('blc_pr_b_t')
    blc_pr_b_c.classList.add('blc_pr_b_c')
    blc_pr_b_b.classList.add('blc_pr_b_b')

    // создание блоков покупки & рейтинга
    let blc_pr_b_b_btn = document.createElement('div')
    let blc_pr_b_b_rating = document.createElement('div')

    //Классы для btn & rating // и настройки
    blc_pr_b_b_btn.classList.add('blc_pr_b_b_btn')
    blc_pr_b_b_rating.classList.add('blc_pr_b_b_rating')

    let h3_pr_b_t = document.createElement('h3')
    h3_pr_b_t.innerHTML = '2 560 000 сум'

    let p_pr_b_t = document.createElement('p')
    p_pr_b_t.innerHTML = 'от 267 000 сум/месяц'

    let p_pr_b_c = document.createElement('p')
    p_pr_b_c.innerHTML = '<b>Смартфон</b> Xiaomi Redmi <br> Note 11 6 GB 128GB...'

    let pr_b_b_btn = document.createElement('button')
    pr_b_b_btn.classList.add('pr_b_b_btn')
    pr_b_b_btn.innerHTML = "Купить"

    //rating
    let pr_b_b_rating = document.createElement('img')
    pr_b_b_rating.src = "./icon/graphic.svg"
    pr_b_b_rating.classList.add('pr_b_b_rating')

    // соединение обектов & блоков
    blc_pr_b.append(blc_pr_b_t, blc_pr_b_c, blc_pr_b_b)
    //btn & rating
    blc_pr_b_t.append(h3_pr_b_t, p_pr_b_t)
    blc_pr_b_b.append(blc_pr_b_b_btn, blc_pr_b_b_rating)

    blc_pr_b_c.append(p_pr_b_c)
    blc_pr_b_b_btn.append(pr_b_b_btn)
    blc_pr_b_b_rating.append(pr_b_b_rating)
}

// Копия кодов
let blc_open = document.createElement('img')
blc_open.classList.add('blc_open')
blc_open.src = './icon/bottom.png'
blc_open.innerHTML = 'Показать ещё'
let num = 1
blc_open.onclick = () => {
    num = 0
    num = num + 4
    // Цыкл для увелечения объектов 
    console.log(num);

    for (let i = 0; i <= num; i++) {
        block.classList.add('set')
    // Див body и блоки
    let blc_product = document.createElement('div')
    let blc_pr_blc = document.createElement('div')

    // Классы для главных блоков
    blc_product.classList.add('blc_product')
    blc_pr_blc.classList.add('blc_pr_blc')
    // блоки внутры продукта вверх и вниз
    let blc_pr_t = document.createElement('div')
    let blc_pr_b = document.createElement('div')

    // Классы для главных блоков
    blc_pr_t.classList.add('blc_pr_t')
    blc_pr_b.classList.add('blc_pr_b')

    // блоки внутры продукта вверхняя часть
    // разделяется на вверх и вниз
    let blc_pr_t_t = document.createElement('div')
    let blc_pr_t_b = document.createElement('div')

    // Классы для главных блоков
    blc_pr_t_t.classList.add('blc_pr_t_t')
    blc_pr_t_b.classList.add('blc_pr_t_b')

    // Блоки внутри продукта верхняя часть
    // 3 блока Левый, правый и центр 
    let blc_pr_t_t_l = document.createElement('div')
    let blc_pr_t_t_c = document.createElement('div')
    let blc_pr_t_t_r = document.createElement('div')

    // Классы для главных блоков
    blc_pr_t_t_l.classList.add('blc_pr_t_t_l')
    blc_pr_t_t_c.classList.add('blc_pr_t_t_c')
    blc_pr_t_t_r.classList.add('blc_pr_t_t_r')

    // изображение товара центральное фото
    let img_phone = document.createElement('img')
    img_phone.src = "./img/img_phone.png"
    img_phone.classList.add('img_phone')

    // иконка авто left btn
    let icon_auto = document.createElement('img')
    icon_auto.src = "./icon/auto_icon.png"
    icon_auto.classList.add('icon_auto')

    // блок для иконок
    // иконка favorite/like & share
    let blc_icon = document.createElement('div')
    let favorite = document.createElement('img')
    let share = document.createElement('img')

    let liked = document.createElement('div')
    liked.classList.add('liked')
    blc_product.append(liked)
    // ссылки иконок
    favorite.src = './icon/favorite.svg'
    share.src = './icon/share.svg'

    //liked div // click
    favorite.onclick = () => {
        favorite.src = './icon/favorite_likeD.svg'

        setTimeout(() => {
            liked.classList.add('liked_act')
        }, 50)
        setTimeout(() => {
            liked.classList.remove('liked_act')
        }, 600)
    }

    //share click
    let share_clc = document.createElement('div')
    share_clc.classList.add('share_clc')

    let share_clc_img_tg = document.createElement('img')
    let share_clc_img_fc = document.createElement('img')
    let share_clc_img_ytube = document.createElement('img')

    share_clc_img_tg.src = './icon/social/telegram.svg'
    share_clc_img_fc.src = './icon/social/facebook.svg'
    share_clc_img_ytube.src = './icon/social/ytube.svg'

    share_clc_img_tg.classList.add('set_img_share')
    share_clc_img_fc.classList.add('set_img_share')
    share_clc_img_ytube.classList.add('set_img_share')

    share_clc.append(share_clc_img_tg, share_clc_img_fc, share_clc_img_ytube)

    share.onclick = () => {
        if (share_clc.classList.contains('act_share')) {
            share_clc.classList.remove('act_share')
            share.src = './icon/share.svg'
        } else {
            share.src = './icon/share_resent.svg'
            share_clc.classList.add('act_share')
        }
    }
    // класс для блока иконок
    blc_icon.classList.add('blc_icon')

    // class для иконок
    favorite.classList.add('favorite')
    share.classList.add('share')

    // тип описания товара 'h2'
    h2_pr_t_b = document.createElement('h2')
    h2_pr_t_b.classList.add('h2_pr_t_b')
    h2_pr_t_b.innerHTML = 'Смартфоны'

    // Соединение Блоков с body & HTML и класса
    block.append(blc_product)
    blc_product.append(blc_pr_blc)
    blc_pr_blc.append(blc_pr_t, blc_pr_b)
    blc_pr_t.append(blc_pr_t_t, blc_pr_t_b)
    blc_pr_t_t.append(blc_pr_t_t_l, blc_pr_t_t_c, blc_pr_t_t_r)

    // Соединение товаров
    blc_pr_t_t_c.append(img_phone)
    blc_pr_t_t_l.append(icon_auto)
    blc_pr_t_t_r.append(blc_icon, share_clc)
    blc_icon.append(favorite, share)
    blc_pr_t_b.append(h2_pr_t_b)

    // Нижний раздел
    // добавление класса второму блоку товара
    blc_pr_b.classList.add('blc_pr_b')

    // часть внутренного объекта
    // создание обекта блоков
    let blc_pr_b_t = document.createElement('div')
    let blc_pr_b_c = document.createElement('div')
    let blc_pr_b_b = document.createElement('div')

    // добавление классов обекта
    blc_pr_b_t.classList.add('blc_pr_b_t')
    blc_pr_b_c.classList.add('blc_pr_b_c')
    blc_pr_b_b.classList.add('blc_pr_b_b')

    // создание блоков покупки & рейтинга
    let blc_pr_b_b_btn = document.createElement('div')
    let blc_pr_b_b_rating = document.createElement('div')

    //Классы для btn & rating // и настройки
    blc_pr_b_b_btn.classList.add('blc_pr_b_b_btn')
    blc_pr_b_b_rating.classList.add('blc_pr_b_b_rating')

    let h3_pr_b_t = document.createElement('h3')
    h3_pr_b_t.innerHTML = '2 560 000 сум'

    let p_pr_b_t = document.createElement('p')
    p_pr_b_t.innerHTML = 'от 267 000 сум/месяц'

    let p_pr_b_c = document.createElement('p')
    p_pr_b_c.innerHTML = '<b>Смартфон</b> Xiaomi Redmi <br> Note 11 6 GB 128GB...'

    let pr_b_b_btn = document.createElement('button')
    pr_b_b_btn.classList.add('pr_b_b_btn')
    pr_b_b_btn.innerHTML = "Купить"

    //rating
    let pr_b_b_rating = document.createElement('img')
    pr_b_b_rating.src = "./icon/graphic.svg"
    pr_b_b_rating.classList.add('pr_b_b_rating')

    // соединение обектов & блоков
    blc_pr_b.append(blc_pr_b_t, blc_pr_b_c, blc_pr_b_b)
    //btn & rating
    blc_pr_b_t.append(h3_pr_b_t, p_pr_b_t)
    blc_pr_b_b.append(blc_pr_b_b_btn, blc_pr_b_b_rating)

    blc_pr_b_c.append(p_pr_b_c)
    blc_pr_b_b_btn.append(pr_b_b_btn)
    blc_pr_b_b_rating.append(pr_b_b_rating)
    }
}
block.append(blc_open)

