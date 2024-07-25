import React, { memo, useContext, useEffect, useRef } from "react"
import { DataProvider } from "../.."
import { Link } from "react-router-dom"


function Header() {
    const data = useContext(DataProvider)?.header
    const burgerContent = React.createRef<HTMLElement>()
    const burgerButton = React.createRef<HTMLButtonElement>()

    const clickBurgerMenu = () => {
        const root = document.getElementById("root")

        root?.classList.toggle("lock-block")
        burgerButton.current?.classList.toggle("burger-button_active")
        burgerContent.current?.classList.toggle("burger-content_active")
    }

    const cancelMenu = () => {
        const root = document.getElementById("root")

        root?.classList.remove("lock-block")
        burgerButton.current?.classList.remove("burger-button_active")
        burgerContent.current?.classList.remove("burger-content_active")
    }

    const clickLink = () => {
        if (window.innerWidth <= 767) {
            cancelMenu()
        }
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 767) {
                cancelMenu()
            }
        })
    }, [])


    return <header className={"border-b-[2px] border-greyEase"}>
        <div className={"h-[100px] flex padding-content items-center"}>
            <div className={"min-w-max"}>
                <img src={data?.logo?.src} alt={data?.logo?.alt} />
            </div>
            <nav className={"burger-content ml-auto transition-top"} ref={burgerContent}>
                <ul className={"flex min-[0px]:max-tablet:flex-col min-[0px]:max-tablet:space-y-[20px] tablet:space-x-[30px] laptop:space-x-[60px] min-h-[40px] items-center"}>
                    {data?.links?.map((v, i) => (
                        <li key={i} className={"transition-transform active:translate-y-[5px]"}>
                            <Link to={v.href} tabIndex={0} onClick={() => clickLink()} className={"font-TTR transition-color duration-300 text-greyText border-y-[1px] border-y-transparent cursor-pointer hover:border-y-greyText min-[0px]:text-[28px] tablet:text-[14px]"}>{v.text}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className={"py-[12px] px-[8px] flex flex-col justify-between h-[50px] w-[50px] relative z-[50] rounded-xl ml-auto bg-white border-greyText border-2 transition-transform tablet:hidden active:scale-95"} aria-label="Кнопка для открытия меню" ref={burgerButton} onClick={() => clickBurgerMenu()}>
                <span className={"burger-menu-line"}></span>
                <span className={"burger-menu-line"}></span>
                <span className={"burger-menu-line"}></span>
            </button>
        </div>
    </header>
}

export default memo(Header)