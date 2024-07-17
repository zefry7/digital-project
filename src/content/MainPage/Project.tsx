import { useContext } from "react"
import { DataProvider } from "../.."

function Project() {
    const data = useContext(DataProvider)?.mainPage?.project


    return <section>
        <div className={"padding-content"}>
            <h2 className={"custom-title"}>{data?.title}</h2>
            <div className={"flex flex-wrap gap-[30px] mb-[30px]"}>
                {data?.img?.map((item, i) => (
                    <div className="" key={i}>
                        <img src={item?.src} alt={item?.alt} />
                    </div>
                ))}
            </div>
            <button className={"custom-button bg-greyText text-white after:bg-arrow-right-white mx-auto"}>{data?.button}</button>
        </div>
    </section>
}

export default Project