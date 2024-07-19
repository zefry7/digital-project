export const data = {
    header: {
        logo: {
            src: "./img/MainPage/logo.svg",
            alt: "Логотип"
        },
        links: ["ГЛАВНАЯ", "ГАЛЕРЕЯ", "ПРОЕКТЫ", "СЕРТИФИКАТЫ", "КОНТАКТЫ"]
    },
    footer: {
        logo: {
            src: "./img/Footer/logo-white.svg",
            alt: "Логотип"
        },
        menu: ["Главная", "Галерея", "Проекты", "Сертификаты", "Контакты"],
        contact: ["address 10, street 5, city", "+0(000)0000000", "email@email.com"],
        socials: [
            {
                src: "./img/Footer/facebook.svg",
                alt: "Ссылка на facebook"
            },
            {
                src: "./img/Footer/twitter.svg",
                alt: "Ссылка на twitter"
            },
            {
                src: "./img/Footer/linked-in.svg",
                alt: "Ссылка на linked-in"
            },
            {
                src: "./img/Footer/pinterest.svg",
                alt: "Ссылка на pinterest"
            },
        ],
        copyright: "© 2019 Digital Project. Все права защищены."
    },
    mainPage: {
        intro: {
            title: ["PROJECT", "NURTOWN"],
            img: {
                src: "./img/MainPage/main.jpeg",
                alt: "Элемент оформления"
            },
            anchor: {
                text: "ВЗГЛЯНУТЬ",
                href: "#"
            }
        },
        company: {
            title: "О компании",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            button: "ЧИТАТЬ",
            img: [
                {
                    src: "./img/MainPage/company-item-1.jpeg",
                    alt: "Элемент оформления"
                },
                {
                    src: "./img/MainPage/company-item-2.jpeg",
                    alt: "Элемент оформления"
                },
                {
                    src: "./img/MainPage/company-item-3.jpeg",
                    alt: "Элемент оформления"
                }
            ]
        },
        task: {
            title: "Основные задачи",
            text: ["Создание комфортных условий и повышение качества обслуживания клиентов.", "Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке."]
        },
        project: {
            title: "Наши проекты",
            img: [
                {
                    src: "./img/MainPage/project-1.jpeg",
                    alt: "Пример проекта",
                },
                {
                    src: "./img/MainPage/project-2.jpeg",
                    alt: "Пример проекта",
                },
            ],
            imgBlock2: [
                {
                    src: "./img/MainPage/project-3.jpeg",
                    alt: "Пример проекта",
                },
                {
                    src: "./img/MainPage/project-4.jpeg",
                    alt: "Пример проекта",
                },
                {
                    src: "./img/MainPage/project-5.jpeg",
                    alt: "Пример проекта",
                },
            ],
            button: "ВСЕ ПРОЕКТЫ"
        },
        feedback: {
            title: "Связаться с нами",
            img: {
                src: "./img/MainPage/form-img.jpeg",
                alt: "Элемент оформления"
            },
            form: {
                name: "Имя",
                tel: "Номер телефона",
                email: "E-mail",
                item: "Интересующий товар/услуга",
                message: "Сообщение"
            },
            text: "Отправляя заявку Вы соглашаетесь с политикой конфиденциальности",
            button: "ОТПРАВИТЬ"
        }
    }
}