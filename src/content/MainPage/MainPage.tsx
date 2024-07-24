import { memo } from "react";
import Company from "./Company";
import Feedback from "./Feedback";
import Intro from "./Intro";
import Project from "./Project";
import Task from "./Task";

function MainPage() {
    return (
        <main>
            <Intro />
            <Company />
            <Task />
            <Project />
            <Feedback />
        </main>
    )
}

export default memo(MainPage)