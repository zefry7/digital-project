import { memo, Suspense } from "react";
import Company from "./Company";
import Feedback from "./Feedback";
import Intro from "./Intro";
import Project from "./Project";
import Task from "./Task";


function MainPage() {
    return (
        <>
            <Intro />
            <Company />
            <Task />
            <Project />
            <Feedback />
        </>
    )
}



export default memo(MainPage)