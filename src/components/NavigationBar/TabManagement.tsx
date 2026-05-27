import { Index, JSX, Show } from "solid-js";

export default function TabManagement (): JSX.Element
{
    const tabs = Array.of(
        { name: "About Me", isActive: true },
        { name: "Project List", isActive: false}
    );

    return (
        <>
            <Index each={tabs}>
                {(t, i) => 
                    (
                        <>
                            <h6
                                class='no-underline font-sans text-sm antialiased text-[#6EACDA] hover:text-[#E2E2B6] transition-colors duration-300'
                                classList={{"text-[#E2E2B6]": t().isActive}}
                                
                            >
                                {t().name}
                            </h6>

                            <Show when={i === 0}>
                                <div class='flex flex-row items-center justify-center space-x-6'>
                                    <h4 class='font-montserrat font-extrabold antialiased text-[#E2E2B6]'>
                                        FOLIO
                                        <span class='text-[#6EACDA]'>ONE</span>
                                    </h4>
                                </div>
                            </Show>
                        </>
                    )
                }
            </Index>
        </>
    );
}