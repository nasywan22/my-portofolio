// TYPE
import type { Component } from 'solid-js';

// COMPONENT
import NavigationBar from './components/NavigationBar/NavigationBar';

import { Dynamic } from 'solid-js/web';
import { currentActiveContent } from './contents/ContentManagement';

const App: Component = () => {
  return (
    <div class='max-w-screen w-screen min-h-screen h-screen flex flex-col bg-[#021526]'>
      {/* navbar */}
      <NavigationBar />

      <div class='max-w-full w-full max-h-full h-full flex flex-col bg-amber-50 rounded-t-3xl'>
        <Dynamic component={currentActiveContent[0]()} />
      </div>
    </div>
  );
};

export default App;
