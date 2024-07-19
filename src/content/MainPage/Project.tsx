import { useContext } from "react"
import { DataProvider } from "../.."

function Project() {
    const data = useContext(DataProvider)?.mainPage?.project


    return <section className={"mb-[120px]"}>
        <div className={"padding-content"}>
            <h2 className={"custom-title"}>{data?.title}</h2>
            <div className={"project__block-img "}>
                {data?.img?.map((item, i) => (
                    <div className={"project__item-img group"} key={i}>
                        <img className={"w-full max-laptop:h-img-project object-cover"} src={item?.src} alt={item?.alt} />
                        <div className={"project__item-wrapper-text"}>
                            <h3 className={"project__item-name"}>ДОСУГОВЫЙ ЦЕНТР</h3>
                            <button className={"project__item-button"}>ПОДРОБНЕЕ</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"project__block-img "}>
                {data?.imgBlock2?.map((item, i) => (
                    <div className={"project__item-img group"} key={i}>
                        <img className={"w-full max-laptop:h-img-project object-cover"} src={item?.src} alt={item?.alt} />
                        <div className={"project__item-wrapper-text"}>
                            <h3 className={"project__item-name"}>ДОСУГОВЫЙ ЦЕНТР</h3>
                            <button className={"project__item-button"}>ПОДРОБНЕЕ</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className={"custom-button-black mx-auto"}>{data?.button}</button>
        </div>
    </section>
}

export default Project