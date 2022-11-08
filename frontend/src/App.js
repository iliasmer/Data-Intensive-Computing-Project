import { useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './themes';

import Topbar from './screens/global/Topbar';
import Sidebar from './screens/global/Sidebar';

import Dashboard from './screens/dashboard';
import UniqueHosts from './screens/line/UniqueHosts';
import StatusCodeOccurence from './screens/bar/StatusCodeOccurence';
import AverageDailyRequests from './screens/line/AverageDailyRequests';
import Pie from './screens/pie';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar isSidebar={isSidebar} />
          <main className='content'>
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/unique' element={<UniqueHosts />} />
              <Route path='/statuscode' element={<StatusCodeOccurence />} />
              <Route path='/avg' element={<AverageDailyRequests />} />
              <Route path='/topfive' element={<Pie />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
