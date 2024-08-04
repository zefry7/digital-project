import { memo, useContext } from "react"
import { DataProvider, handleClickLink } from "../.."
import { Link } from "react-router-dom"

function Intro() {
    const data = useContext(DataProvider)?.mainPage

    return <section className={"mb-[120px] max-laptop:mb-[100px] max-tablet:mb-[0px]"}>
        <div className={"tablet:padding-content relative flex items-center gap-[60px] max-tablet:space-x-[0px] max-tablet:flex-col max-laptop:gap-[40px] max-h-[840px]"}>
            <h1 className={"intro__title max-laptop:top-[20px]"}>
                <span className={"font-TTL text-greyLight max-tablet:mr-[6px] max-tablet:text-white max-tablet:font-TTM"}>{data?.intro?.title[0]}</span>
                {data?.intro?.title[1]}
            </h1>
            <div className={"animate-opacity func relative max-tablet:after:bg-gradient-to-t from-black/60 after:content-[''] after:w-full after:h-full after:inline-block after:absolute after:top-0"}>
                <img className={"object-cover object-left func"} src={data?.intro?.img?.src} alt={data?.intro?.img?.alt} />
                <Link to={data?.intro?.anchor?.href} onClick={handleClickLink} className={"custom-button intro__anchor z-10"}>{data?.intro?.anchor?.text}</Link>
            </div>
        </div>
    </section>
}

export default memo(Intro)