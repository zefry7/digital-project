import { useContext } from "react"
import { DataProvider } from "../.."

function Intro() {
    const data = useContext(DataProvider)?.mainPage

    return <section className={"mb-[120px]"}>
        <div className={"tablet:padding-content relative flex items-center gap-[60px] max-tablet:space-x-[0px] max-tablet:flex-col max-laptop:gap-[40px]"}>
            <h1 className={"intro__title max-laptop:top-[20px]"}>
                <span className={"font-TTL text-greyLight max-tablet:mr-[6px] max-tablet:text-white max-tablet:font-TTM"}>{data?.intro?.title[0]}</span>
                {data?.intro?.title[1]}
            </h1>
            <div className={"relative min-h-[450px] max-tablet:after:bg-gradient-to-t from-black/60 after:content-[''] after:w-full after:h-full after:inline-block after:absolute after:top-0"}>
                <img className={"object-cover object-left min-h-[450px]"} src={data?.intro?.img?.src} alt={data?.intro?.img?.alt} />
                <a href={data?.intro?.anchor?.href} className={"custom-button intro__anchor z-10"}>{data?.intro?.anchor?.text}</a>
            </div>
        </div>
    </section>
}

export default Intro