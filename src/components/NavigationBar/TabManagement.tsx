import { Index, JSX, Show } from "solid-js";

export default function TabManagement (): JSX.Element
{
    // Bahan untuk di loop dari 1 - 3
    const tabs: string[] = ["About Me", "Logo's", "Project List"]

    return (
        <>
            <Index each={tabs}>
                {(v, i) => 
                    (
                        <Show
                            when={i === 1}
                            fallback={
                                <a
                                    href={v()}
                                    class='no-underline font-sans text-sm antialiased text-[#6EACDA]'
                                >
                                    {v()}
                                </a>
                            }
                        >
                            <div class='flex flex-row items-center justify-center space-x-6'>
                                <h4 class='font-montserrat font-extrabold antialiased text-[#E2E2B6]'>
                                    FOLIO
                                    <span class='text-[#6EACDA]'>ONE</span>
                                </h4>
                            </div>
                        </Show>
                    )
                }
            </Index>
        </>
    );
}