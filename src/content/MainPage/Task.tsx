import { memo, useContext } from "react"
import { DataProvider } from "../.."

function Task() {
    const data = useContext(DataProvider)?.mainPage?.task

    return <section className={"mb-[84px] max-tablet:mb-[60px]"}>
        <div className={"padding-content"}>
            <h2 className={"custom-title"}>{data?.title}</h2>
            <div className={"flex justify-between gap-[30px] max-[1240px]:flex-col max-[1240px]:items-center"}>
                {data?.text?.map((item, i) => (
                    <p className={"flex gap-[30px] text-greyText text-[22px]/[150%] items-center [&:nth-child(2)]:flex-[54%] [&:nth-child(1)]:flex-[35%] max-tablet:text-[18px] max-big-mobile:text-[16px] max-tablet:flex-col max-tablet:text-center max-[1240px]:max-w-[700px] max-tablet:max-w-[500px] "} key={i}>
                        <span className={"text-[200px]/[150px] min-w-[116px] text-center font-TTB text-greyEase max-tablet:text-[150px]/[120px] max-tablet:min-w-[70px]"} aria-hidden>{i + 1}</span>{item}
                    </p>
                ))}
            </div>
        </div>
    </section>
}

export default memo(Task)