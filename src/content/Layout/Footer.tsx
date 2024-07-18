import { useContext } from "react";
import { DataProvider } from "../..";

function Footer() {
    const data = useContext(DataProvider)?.footer


    return (
        <footer className={"bg-blackBg"}>
            <div className={"flex text-white justify-between font-TTM padding-content py-[60px] max-w-[1440px] mx-auto"}>
                <div className="">
                    <img src={data?.logo?.src} alt={data?.logo?.alt} />
                </div>
                <div className={""}>
                    <p className={"mb-[25px] font-TTB"}>Информация</p>
                    <ul className={"flex flex-col gap-[16px]"}>
                        {data?.menu?.map((item, i) => (
                            <li key={i}>
                                <a href="" className={"text-[14px]"}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <p className={"mb-[25px] font-TTB"}>Контакты</p>
                    <address className={"flex flex-col gap-[16px] not-italic"}>
                        {data?.contact?.map((item, i) => (
                            <a href="" className={"footer-contact"}>{item}</a>
                        ))}
                    </address>
                </div>
                <div className="">
                    <p className={"mb-[25px] font-TTB"}>Социальные сети</p>
                    <ul className={"flex gap-[40px]"}>
                        {data?.socials?.map((item, i) => (
                            <li key={i}>
                                <a href="" className={"text-[14px]"}>
                                    <img src={item?.src} alt={item?.alt} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={"py-[24px] border-t-[1px] border-t-[#C8C8C880]"}>
                <p className={"text-[#C8C8C880] text-center"}>{data?.copyright}</p>
            </div>
        </footer>
    )

}

export default Footer