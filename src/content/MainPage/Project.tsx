import { memo, useContext } from "react"
import { DataProvider } from "../.."

function Project() {
    const data = useContext(DataProvider)?.mainPage?.project


    return <section className={"mb-[120px] max-tablet:mb-[60px]"}>
        <div className={"padding-content"}>
            <h2 className={"custom-title"}>{data?.title}</h2>
            <div className={"mb-[30px] flex flex-col gap-[30px] max-big-mobile:gap-[10px]"}>
                <div className={"project__block-img "}>
                    {data?.img?.map((item, i) => (
                        <div className={"project__item-img group"} key={i}>
                            <img className={"w-full max-laptop:h-img-project object-cover"} src={item?.src} alt={item?.alt} loading="lazy"/>
                            <div className={"project__item-wrapper-text"}>
                                <h3 className={"project__item-name"}>{item?.text}</h3>
                                <a href={data?.href} className={"project__item-button"}>ПОДРОБНЕЕ</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={"project__block-img "}>
                    {data?.imgBlock2?.map((item, i) => (
                        <div className={"project__item-img group"} key={i}>
                            <img className={"w-full max-laptop:h-img-project object-cover"} src={item?.src} alt={item?.alt} loading="lazy"/>
                            <div className={"project__item-wrapper-text"}>
                                <h3 className={"project__item-name"}>{item?.text}</h3>
                                <a href={data?.href} className={"project__item-button"}>ПОДРОБНЕЕ</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <a href={data?.href} className={"custom-button-black mx-auto max-laptop:max-w-[391px] max-laptop:w-full max-laptop:after:hidden"}>{data?.button}</a>
        </div>
    </section>
}

export default memo(Project)