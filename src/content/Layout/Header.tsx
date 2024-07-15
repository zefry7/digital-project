import React, { useContext, useEffect, useRef } from "react"
import { DataProvider } from "../.."


function Header() {
    const data = useContext(DataProvider)?.header
    const burgerContent = React.createRef<HTMLElement>()
    const burgerButton = React.createRef<HTMLButtonElement>()

    const clickBurgerMenu = () => {
        burgerButton.current?.classList.toggle("burger-button_active")
        burgerContent.current?.classList.toggle("burger-content_active")
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            if(window.innerWidth > 767) {
                burgerButton.current?.classList.remove("burger-button_active")
                burgerContent.current?.classList.remove("burger-content_active")
            }
        })
    }, [])


    return <header className={"max-w-[1440px] mx-auto"}>
        <div className={"h-[100px] flex padding-content items-center"}>
            <div className={"min-w-max"}>
                <img src={data?.logo?.src} alt={data?.logo?.alt} />
            </div>
            <nav className={"burger-content ml-auto transition-top"} ref={burgerContent}>
                <ul className={"flex min-[0px]:max-tablet:flex-col min-[0px]:max-tablet:space-y-[20px] tablet:space-x-[40px] laptop:space-x-[60px]"}>
                    {data?.links?.map((v, i) => (
                        <li className={"font-TTR transition-colors duration-300 text-greyText border-y-[1px] border-y-transparent cursor-pointer hover:border-y-greyText min-[0px]:text-[28px] tablet:text-[14px]"} key={i}>{v}</li>
                    ))}
                </ul>
            </nav>
            <button className={"py-[12px] px-[8px] flex flex-col justify-between h-[50px] w-[50px] relative z-50 rounded-xl ml-auto border-greyText border-2 tablet:hidden"} ref={burgerButton} onClick={() => clickBurgerMenu()}>
                <span className={"burger-menu-line"}></span>
                <span className={"burger-menu-line"}></span>
                <span className={"burger-menu-line"}></span>
            </button>
        </div>
    </header>
}

export default Header