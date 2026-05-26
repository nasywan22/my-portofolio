import { JSX } from "solid-js/jsx-runtime"
import TabManagement from "./TabManagement"

export default function NavigationBar (): JSX.Element
{
    return (
        <div class='max-w-screen w-screen max-h-12 h-12 flex flex-row justify-center'>
            {/* tabs */}
            <div class='min-w-sm w-fit h-full flex flex-row space-x-12 items-center justify-center'>
                <TabManagement />
            </div>
        </div>
    )
}