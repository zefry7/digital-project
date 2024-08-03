import React, { ChangeEvent, createRef, FormEvent, memo, RefObject, useCallback, useContext } from "react"
import { DataProvider } from "../.."

function Feedback() {
    const data = useContext(DataProvider)?.mainPage?.feedback
    const spanStarTel = createRef<HTMLSpanElement>()
    const spanStarEmail = createRef<HTMLSpanElement>()
    const spanStarMessage = createRef<HTMLSpanElement>()
    const successElement = createRef<HTMLDivElement>()

    const starElement = useCallback((e: ChangeEvent<HTMLTextAreaElement> | FormEvent<HTMLInputElement>, elem: RefObject<HTMLSpanElement>) => {
        const { value } = e.currentTarget

        if (value == "" && elem.current) {
            elem.current.style.display = "inline"
        } else if (elem.current) {
            elem.current.style.display = "none"
        }
    }, [])

    const changeInputName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget

        if (!value[value.length - 1]?.match(/[a-zа-я]/i)) {
            e.currentTarget.value = value.slice(0, value.length - 1);
        }
    }, [])

    const blurInputName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget
        e.currentTarget.value = value.slice(0, 1).toUpperCase() + "" + value.slice(1, value.length).toLowerCase()
    }, [])

    const changeInputTel = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget

        if (!value[value.length - 1]?.match(/[0-9+]/)) {
            e.currentTarget.value = value.slice(0, value.length - 1);
        }
    }, [])

    const changeInputEmail = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget

        if (!value[value.length - 1]?.match(/[a-z0-9._%+-]/)) {
            e.currentTarget.value = value.slice(0, value.length - 1);
        }
    }, [])


    const submitForm = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        e.currentTarget.reset()

        if (spanStarTel.current) {
            spanStarTel.current.style.display = "inline"
        }

        if (spanStarEmail.current) {
            spanStarEmail.current.style.display = "inline"
        }

        if (spanStarMessage.current) {
            spanStarMessage.current.style.display = "inline"
        }

        if (successElement.current) {
            successElement.current.style.display = "block"
        }
    }, [])

    const cancelSuccessElement = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        if (successElement.current) {
            successElement.current.style.display = "none"
        }
    }, [])

    return <section className={"mb-[120px] max-tablet:mb-[60px]"}>
        <div className={"padding-content"}>
            <h2 className={"custom-title mb-[30px]"}>{data?.title}</h2>
            <div className={"flex gap-[30px] max-laptop:justify-center"}>
                <div className={"max-w-[391px] w-full"}>
                    <form action="" id="feedback-form" className={"flex flex-col gap-[10px] mb-[22px] max-w-[391px] w-full"} onSubmit={(e) => submitForm(e)}>
                        <input type="text" name="name" placeholder={data?.form?.name} className={"custom-input"} maxLength={20} onChange={(e) => changeInputName(e)} onBlur={(e) => blurInputName(e)} />
                        <div className={"relative"}>
                            <input type="tel" name="tel" placeholder={data?.form?.tel} maxLength={12} onInput={(e) => { changeInputTel(e); starElement(e, spanStarTel); }} className={"custom-input w-full"} required />
                            <span className={"absolute text-red-700 top-[12px] left-[130px]"} ref={spanStarTel}>*</span>
                        </div>
                        <div className={"relative"}>
                            <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder={data?.form?.email} onInput={(e) => { changeInputEmail(e); starElement(e, spanStarEmail) }} className={"custom-input w-full"} required />
                            <span className={"absolute text-red-700 top-[12px] left-[60px]"} ref={spanStarEmail}>*</span>
                        </div>
                        <input type="text" name="item" placeholder={data?.form?.item} className={"custom-input"} />
                        <div className={"relative"}>
                            <textarea name="message" placeholder={data?.form?.message} onChange={(e) => starElement(e, spanStarMessage)} className={"custom-input h-[145px] w-full resize-none"} required></textarea>
                            <span className={"absolute text-red-700 top-[12px] left-[98px]"} ref={spanStarMessage}>*</span>
                        </div>
                    </form>
                    <p className={"text-[14px] mb-[17px] laptop:pl-[40px] max-laptop:text-center"}>{data?.text}</p>
                    <button type="submit" form="feedback-form" className={"custom-button-black max-laptop:mx-auto max-laptop:w-full max-laptop:after:hidden"}>{data?.button}</button>
                </div>
                <div className={"max-laptop:hidden"}>
                    <img className={"min-h-[369px] object-cover"} src={data?.img?.src} alt={data?.img?.alt} />
                </div>
            </div>
            <div className={"fixed top-0 left-0 w-full h-full backdrop-blur-sm z-50 hidden"} ref={successElement}>
                <div className={"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[516px] px-[45px] max-big-mobile:px-[20px] h-[421px] w-full bg-white flex flex-col pt-[44px] pb-[22px] items-center border-[1px] border-greyText"}>
                    <div className={"mb-[24px]"}>
                        <img src={data?.sumbit?.img?.src} alt={data?.sumbit?.img?.alt} loading="lazy"/>
                    </div>
                    <span className={"text-[24px] font-TTB mb-[27px]"}>{data?.sumbit?.title}</span>
                    <p className={"text-[14px] font-TTB text-greyText mb-[41px] text-center"}>{data?.sumbit?.text}</p>
                    <button className={"custom-button-black after:hidden w-full"} onClick={(e) => cancelSuccessElement(e)}>{data?.sumbit?.button}</button>
                </div>
            </div>
        </div>
    </section>
}

export default memo(Feedback)