import { useContext } from "react"
import { DataProvider } from "../.."

function Intro() {
    const data = useContext(DataProvider)?.mainPage

    return <section>
        <div className={"padding-content flex items-center space-x-[60px]"}>
            <h1 className={"flex flex-col justify-between text-[64px]/[1] font-TTB text-greyText"}>
                <span className={"font-TTL text-greyLight"}>{data?.intro?.title[0]}</span>
                {data?.intro?.title[1]}
            </h1>
            <div className={"relative"}>
                <img src={data?.intro?.img?.src} alt={data?.intro?.img?.alt} />
                <a href={data?.intro?.anchor?.href} className={"intro__anchor"}>{data?.intro?.anchor?.text}</a>
            </div>
        </div>
    </section>
}

export default Intro