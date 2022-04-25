import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Box from '@mui/material/Box';
import Navbar  from './components/navigation/Navbar';
import Clases from './containers/clases/Clases';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Navbar/>
          <Box sx={{ display: 'flex', flexDirection: 'row ' }}>
            {/* <AnuncioCard anuncio={{id: 2, clase: 1, autor: 1, titulo: "Fundamentos de Programacion", cuerpo: "Alejo es un hpta"}}/> */}
            <BrowserRouter>
              <Sidebar/>
            {/* <Clases/> */}
              <Routes>
                <Route path="/"/>
                <Route path="login"/>
                <Route path="clase/:idClase/:tab" element={<Clases/>}/>
                <Route path="/404"/>
                <Route path="*" element={<Navigate to="/404" />}/>
              </Routes>
            </BrowserRouter>

          </Box>


        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
