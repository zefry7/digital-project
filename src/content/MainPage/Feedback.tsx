import { useContext } from "react"
import { DataProvider } from "../.."

function Feedback() {
    const data = useContext(DataProvider)?.mainPage?.feedback

    return <section>
        <div className={"padding-content"}>
            <h2 className={"custom-title mb-[22px]"}>{data?.title}</h2>
            <div className={"flex gap-[30px]"}>
                <div className={"max-w-[391px]"}>
                    <form action="" id="feedback-form" className={"flex flex-col gap-[10px] mb-[22px]"}>
                        <input type="text" name="name" placeholder={data?.form?.name} className={"custom-input"} />
                        <input type="tel" name="tel" placeholder={data?.form?.tel} className={"custom-input after:content-['*']"} />
                        <input type="email" name="email" placeholder={data?.form?.email} className={"custom-input"} />
                        <input type="text" name="item" placeholder={data?.form?.item} className={"custom-input"} />
                        <textarea name="message" placeholder={data?.form?.message} className={"custom-input h-[145px]"}></textarea>
                    </form>
                    <p className={"text-[14px] mb-[17px] pl-[40px]"}>{data?.text}</p>
                    <button type="submit" form="feedback-form" className={"custom-button-black"}>{data?.button}</button>
                </div>
                <div className={"max-laptop:hidden"}>
                    <img className={"min-h-[369px] object-cover"} src={data?.img?.src} alt={data?.img?.alt} />
                </div>
            </div>
        </div>
    </section>
}

export default Feedback