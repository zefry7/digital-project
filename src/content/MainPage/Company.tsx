import { useContext } from "react"
import { DataProvider } from "../.."

function Company() {
    const data = useContext(DataProvider)?.mainPage?.company

    return <section className={"mb-[120px]"}>
        <div className={"padding-content"}>
            <div className={"bg-whiteBg flex py-[30px] pl-[100px] gap-[30px]"}>
                <div className={"grid grid-cols-2 gap-[30px]"}>
                    {data?.img?.map((img, i) => (
                        <div className={"[&:nth-child(2)]:row-end-3 [&:nth-child(2)]:row-start-1 [&:nth-child(2)]:col-start-2 [&:nth-child(2)]:pt-[30px]"} key={i}>
                            <img src={img?.src} alt={img?.alt} />
                        </div>
                    ))}
                </div>
                <div className={"w-[400px]"}>
                    <h2 className={"text-greyLight text-[64px]/[1] mb-[20px] font-TTL"}>{data?.title}</h2>
                    <p className={"text-[16px] font-TTL mb-[20px]"}>{data?.text}</p>
                    <button className={"custom-button"}>{data?.button}</button>
                </div>
            </div>
        </div>
    </section>
}

export default Company