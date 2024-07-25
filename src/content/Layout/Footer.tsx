import { memo, useContext } from "react";
import { DataProvider } from "../..";

function Footer() {
    const data = useContext(DataProvider)?.footer


    return (
        <footer className={"bg-blackBg"}>
            <div className={"grid grid-cols-4 gap-y-[30px] gap-x-[15px] text-white font-TTM padding-content py-[60px] max-w-[1440px] mx-auto max-laptop:grid-cols-2 max-[425px]:grid-cols-1"}>
                <div className="">
                    <img src={data?.logo?.src} alt={data?.logo?.alt} />
                </div>
                <div className={""}>
                    <p className={"footer-title"}>Информация</p>
                    <ul className={"flex flex-col gap-[16px]"}>
                        {data?.menu?.map((item, i) => (
                            <li key={i} className={"text-[14px]/[150%] transition-all w-max border-y-[1px] border-y-transparent cursor-pointer hover:border-y-white"}>
                                <a href="" className={""}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <p className={"footer-title"}>Контакты</p>
                    <address className={"flex flex-col gap-[16px] not-italic"}>
                        {data?.contact?.map((item, i) => (
                            <a href={item.href} key={i} className={"footer-contact text-[14px]/[1]"}>{item.text}</a>
                        ))}
                    </address>
                </div>
                <div className="">
                    <p className={"footer-title"}>Социальные сети</p>
                    <ul className={"flex gap-[30px] max-laptop:gap-[25px]"}>
                        {data?.socials?.map((item, i) => (
                            <li key={i}>
                                <a href="" target="_blank" className={"text-[14px] h-[22px] w-[22px] flex items-center justify-center"}>
                                    <img src={item?.src} alt={item?.alt} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={"py-[24px] border-t-[1px] border-t-[#93939380]"}>
                <p className={"text-[#939393] text-center padding-content flex max-big-mobile:flex-col"}>
                    {data?.copyright[0]} 
                    <span> {data?.copyright[1]}</span>
                </p>
            </div>
        </footer>
    )

}

export default memo(Footer)