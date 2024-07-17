import { useContext } from "react"
import { DataProvider } from "../.."

function Task() {
    const data = useContext(DataProvider)?.mainPage?.task


    return <section className={"mb-[84px]"}>
        <div className={"padding-content"}>
            <h2 className={"custom-title"}>{data?.title}</h2>
            <div className={"flex justify-between gap-[30px]"}>
                {data?.text?.map((item, i) => (
                    <p className={"flex gap-[30px] text-greyText text-[22px]/[150%] items-center [&:nth-child(2)]:flex-[50%] [&:nth-child(1)]:flex-[35%]"} key={i}>
                        <span className={"text-[200px]/[140px] font-TTB text-greyEase"}>{i + 1}</span>{item}
                    </p>
                ))}
            </div>
        </div>
    </section>
}

export default Task