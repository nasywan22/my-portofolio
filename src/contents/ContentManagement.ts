import { createSignal, JSX, Signal } from "solid-js"

// CONTENT
import AboutMe from "./AboutMe";
import ProjectList from "./ProjectList";

const contentList: (() => JSX.Element)[] = [AboutMe, ProjectList];
const currentActiveContent: Signal<() => JSX.Element> = createSignal(contentList[0])

function changeCurrentActiveContent (contentIndex: number)
{
    currentActiveContent[1](prevContent => prevContent = contentList[contentIndex])
}

export {currentActiveContent, changeCurrentActiveContent};