import { useContext } from "react";
import { DataProvider } from "../..";
import { YMaps, Map } from "@pbe/react-yandex-maps";

function ContactPage() {
    const data = useContext(DataProvider)?.contactPage


    return <main>
        <section>
            <div className={"padding-content pt-[63px] pb-[140px] max-tablet:py-[30px] max-tablet:pb-[60px] flex gap-[17px] max-tablet:flex-col-reverse"}>
                <div className={"flex flex-col"}>
                    <h1 className={"intro__title max-laptop:top-[20px] mb-[30px] static flex-col max-tablet:mb-[10px]"}>
                        <span className={"font-TTL text-greyLight max-tablet:font-TTM uppercase"}>{data?.title[0]}</span>
                        {data?.title[1]}
                    </h1>
                    <p className={"flex flex-col text-[16px] font-TTL mb-[45px] max-tablet:mb-[20px]"}>
                        <span className={"text-[18px] font-TTB"}>{data?.name}</span>
                        {data?.address}
                    </p>
                    <a href="tel:" className={"text-[18px] font-TTB mb-[50px] block max-tablet:mb-[20px]"}>
                        {data?.tel}
                    </a>
                    <a href="mailto:" className={"text-[16px] mb-[30px] font-TTL block"}>
                        {data?.email}
                    </a>
                    <button className={"custom-button-black uppercase mt-auto after:hidden max-laptop:max-w-[391px] max-laptop:w-full max-laptop:after:hidden"}>{data?.button}</button>
                </div>
                <div className={"w-full"}>
                    <YMaps>
                        <Map defaultState={{ center: [50, 60], zoom: 3 }} options={{ minZoom: 2, restrictMapArea: [[85, -30], [-85, 329.99]] }} role="presentation" height="100%" width="100%" className="area__map">
                        </Map>
                    </YMaps>
                </div>
            </div>
        </section>
    </main>
}

export default ContactPage;