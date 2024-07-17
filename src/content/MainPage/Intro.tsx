import { useContext } from "react"
import { DataProvider } from "../.."

function Intro() {
    const data = useContext(DataProvider)?.mainPage

    return <section className={"mb-[120px]"}>
        <div className={"padding-content relative flex items-center space-x-[60px] min-[0px]:max-tablet:space-x-[0px] min-[0px]:max-tablet:flex-col min-[0px]:max-tablet:mx-[-20px]"}>
            <h1 className={"intro__title top-[20px]"}>
                <span className={"font-TTL text-greyLight min-[0px]:max-tablet:mr-[6px] min-[0px]:max-tablet:text-white min-[0px]:max-tablet:font-TTM"}>{data?.intro?.title[0]}</span>
                {data?.intro?.title[1]}
            </h1>
            <div className={"relative min-h-[450px] min-[0px]:max-tablet:after:bg-gradient-to-t from-black/60 after:content-[''] after:w-full after:h-full after:inline-block after:absolute after:top-0"}>
                <img className={"object-cover min-h-[450px]"} src={data?.intro?.img?.src} alt={data?.intro?.img?.alt} />
                <a href={data?.intro?.anchor?.href} className={"custom-button intro__anchor z-10"}>{data?.intro?.anchor?.text}</a>
            </div>
        </div>
    </section>
}

export default Intro