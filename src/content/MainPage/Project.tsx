import { useContext } from "react"
import { DataProvider } from "../.."

function Project() {
    const data = useContext(DataProvider)?.mainPage?.project


    return <section className={"mb-[120px]"}>
        <div className={"padding-content"}>
            <h2 className={"custom-title"}>{data?.title}</h2>
            <div className={"flex flex-wrap gap-[30px] mb-[30px]"}>
                {data?.img?.map((item, i) => (
                    <div className="" key={i}>
                        <img src={item?.src} alt={item?.alt} />
                    </div>
                ))}
            </div>
            <button className={"custom-button-black mx-auto"}>{data?.button}</button>
        </div>
    </section>
}

export default Project