import { memo, useContext } from "react"
import { DataProvider } from "../.."

function Company() {
    const data = useContext(DataProvider)?.mainPage?.company

    return <section className={"mb-[120px] max-tablet:mb-[60px]"}>
        <div className={"padding-content max-tablet:px-0"}>
            <div className={"bg-whiteBg flex py-[30px] px-[30px] justify-center gap-[30px] max-[620px]:flex-col max-tablet:px-[20px]"}>
                <div className={"grid grid-cols-2 gap-[30px] max-laptop:grid-cols-1"}>
                    {data?.img?.map((img, i) => (
                        <div className={"[&:nth-child(2)]:row-end-3 [&:nth-child(2)]:row-start-1 [&:nth-child(2)]:col-start-2 [&:nth-child(2)]:py-[30px] max-laptop:hidden [&:nth-child(1)]:block max-[620px]:mx-auto"} key={i}>
                            <img className={"animate-opacity h-full object-cover"} src={img?.src} alt={img?.alt} loading="lazy" />
                        </div>
                    ))}
                </div>
                <div className={"w-[400px] max-[620px]:w-full max-[620px]:flex max-[620px]:flex-col max-[620px]:items-center"}>
                    <h2 className={"custom-title text-project-name-desktop text-left max-[620px]:mb-[10px]"}>{data?.title}</h2>
                    <p className={"text-[16px] font-TTL mb-[20px] max-[620px]:text-center"}>{data?.text}</p>
                    <a href={data?.button?.href} className={"custom-button max-tablet:border-greyText max-[620px]:w-full"}>{data?.button?.text}</a>
                </div>
            </div>
        </div>
    </section>
}

export default memo(Company)