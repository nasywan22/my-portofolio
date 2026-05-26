import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div class='max-w-screen w-screen min-h-screen h-screen flex flex-col bg-[#021526]'>
      {/* navbar */}
      <div class='max-w-screen w-screen max-h-12 h-12 flex flex-row justify-center'>
        {/* tabs */}
        <div class='min-w-sm w-fit h-full flex flex-row space-x-6 items-center justify-center'>
          {
            Array.from
            ( //   key     |     value
              { length: 8 }, (_, i) => i + 1
            )            
            .map
            (
              n => 
              {
                if ( n === 5 ) 
                {
                  return (
                    <div class='flex flex-row items-center justify-center space-x-6'>
                      <h4 class='font-montserrat font-extrabold antialiased text-[#E2E2B6]'>
                        FOLIO
                        <span class='text-[#6EACDA]'>ONE</span>
                      </h4>
                      <a href={"/tab" + n} class='no-underline font-montserrat text-sm antialiased text-[#6EACDA]'>tab{n}</a>
                    </div>
                  )
                }

                return <a href={"/tab" + n} class='no-underline font-sans text-sm antialiased text-[#6EACDA]'>tab{n}</a>
              }
            )
          }
        </div>
      </div>

      <div class='max-w-full w-full max-h-full h-full flex flex-col bg-amber-50 rounded-t-3xl'>
        <h1>Main Content</h1>
      </div>
    </div>
  );
};

export default App;
