import { memo, useContext } from "react"
import { DataProvider } from "../.."

function Feedback() {
    const data = useContext(DataProvider)?.mainPage?.feedback

    return <section className={"mb-[120px] max-tablet:mb-[60px]"}>
        <div className={"padding-content"}>
            <h2 className={"custom-title mb-[22px]"}>{data?.title}</h2>
            <div className={"flex gap-[30px] max-laptop:justify-center"}>
                <div className={"max-w-[391px] w-full"}>
                    <form action="" id="feedback-form" className={"flex flex-col gap-[10px] mb-[22px] max-w-[391px] w-full"}>
                        <input type="text" name="name" placeholder={data?.form?.name} className={"custom-input"} />
                        <input type="tel" name="tel" placeholder={data?.form?.tel} className={"custom-input after:content-['*']"} required/>
                        <input type="email" name="email" placeholder={data?.form?.email} className={"custom-input"} required/>
                        <input type="text" name="item" placeholder={data?.form?.item} className={"custom-input"} />
                        <textarea name="message" placeholder={data?.form?.message} className={"custom-input h-[145px]"} required></textarea>
                    </form>
                    <p className={"text-[14px] mb-[17px] laptop:pl-[40px] max-laptop:text-center"}>{data?.text}</p>
                    <button type="submit" form="feedback-form" className={"custom-button-black max-laptop:mx-auto max-laptop:w-full max-laptop:after:hidden"}>{data?.button}</button>
                </div>
                <div className={"max-laptop:hidden"}>
                    <img className={"min-h-[369px] object-cover"} src={data?.img?.src} alt={data?.img?.alt} />
                </div>
            </div>
        </div>
    </section>
}

export default memo(Feedback)