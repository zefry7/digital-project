import React, { useContext, useEffect, useState } from "react";
import { DataProvider } from "../..";


function GalleryPage() {
    const data = useContext(DataProvider)?.galleryPage

    return <section className="gallery">
        <div className={"padding-content pt-[63px] pb-[140px] max-tablet:py-[30px] max-tablet:pb-[60px]"}>
            <h1 className={"intro__title max-laptop:top-[20px] mb-[30px] static flex-col max-tablet:mb-[10px] text-title-page"}>
                <span className={"font-TTL text-greyLight max-tablet:font-TTM uppercase"}>{data?.title[0]}</span>
                {data?.title[1]}
            </h1>
            <div className={""}>
                <div className={"grid grid-cols-4 gap-[30px] max-[1240px]:grid-cols-3 max-tablet:grid-cols-2 max-laptop:gap-[20px] max-tablet:gap-[15px] max-big-mobile:grid-cols-1"}>
                    {data?.list?.map((item, i) => (
                        <div key={i} data-text={"Должен быть текст"} className={'overflow-hidden transition-transform cursor-pointer relative after:transition-all after:content-[attr(data-text)] after:p-[15px] after:text-greyEase after:text-[20px]/[1] after:inline-block after:w-full after:h-[50%] after:bg-blackBg/[0.5] after:absolute after:bottom-[-100%] max-laptop:after:text-[18px] max-big-mobile::after:text-[14px] hover:after:bottom-0 hover:scale-105'}>
                            <img className={"w-full h-auto"} src={item?.src} alt={item?.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}

export default GalleryPage