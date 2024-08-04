import { memo, useContext } from "react"
import { DataProvider } from "../.."

function ProjectPage() {
    const data = useContext(DataProvider)?.projectPage


    return <section>
        <div className={"padding-content pt-[63px] pb-[140px] max-tablet:py-[30px] max-tablet:pb-[60px]"}>
            <h1 className={"intro__title max-laptop:top-[20px] mb-[30px] static flex-col max-tablet:mb-[10px] text-title-page"}>
                <span className={"font-TTL text-greyLight max-tablet:font-TTM uppercase"}>{data?.title[0]}</span>
                {data?.title[1]}
            </h1>
            <hr className={"border-whiteBg mb-[30px] max-tablet:mb-[10px]"} />
            <div className={"space-y-[60px] max-laptop:space-y-[40px] max-big-mobile:space-y-[20px]"}>
                {data?.items?.map((v, i) => (
                    <div className={"bg-whiteBg flex h-[435px] group relative"} key={i}>
                        <div className={"w-full max-laptop:after:bg-gradient-to-t from-black/60 laptop:after:hidden after:content-[''] after:w-full after:h-full after:inline-block after:absolute after:top-0"}>
                            <img className={"animate-opacity w-full h-full object-cover"} src={v?.img?.src} alt={v?.img?.alt} loading="lazy" />
                        </div>
                        <div className={"laptop:max-w-[500px] w-full p-[30px] flex flex-col max-laptop:absolute bottom-0 max-big-mobile:p-[10px]"}>
                            <h2 className={"custom-title text-project-title-desktop/[130%] text-left mb-[10px] max-laptop:text-white"}>{v?.title}</h2>
                            <p className={"text-[16px] font-TTL max-w-[400px] max-laptop:hidden"}>{v?.descr}</p>
                            <button className={"custom-button mt-auto bg-white max-laptop:border-greyText max-[620px]:w-full"}>{v?.button}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

}

export default memo(ProjectPage)