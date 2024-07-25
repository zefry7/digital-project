import { useContext } from "react";
import { DataProvider } from "../..";



function CertPage() {
    const data = useContext(DataProvider)?.сertPage

    return <main>
        <section className={"w-full h-max"}>
            <div className={"padding-content pt-[63px] pb-[140px] max-tablet:p-[30px] max-tablet:pb-[60px] text-title-page"}>
                <h1 className={"intro__title max-laptop:top-[20px] mb-[42px] static flex-col max-tablet:mb-[10px]"}>
                    <span className={"font-TTL text-greyLight max-tablet:font-TTM uppercase"}>{data?.title[0]}</span>
                    {data?.title[1]}
                </h1>
                <div className={"flex justify-between max-tablet:flex-col items-center max-tablet:gap-[10px]"}>
                    {data?.img?.map((v, i) => (
                        <div className={"max-w-[337px]"} key={i}>
                            <img src={v?.src} alt={v?.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </main>
}

export default CertPage;