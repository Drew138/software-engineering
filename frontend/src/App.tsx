import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Box from '@mui/material/Box';
import Navbar from './components/navigation/Navbar';
import Clases from './containers/clases/Clases';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import { User } from './models/User';
import { QueryClient, QueryClientProvider } from 'react-query';
import { baseURL } from './config';
import axios from 'axios';
import Typography from '@mui/material/Typography';

const queryClient = new QueryClient()

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [user, setUser] = useState<User | null>(null);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
        },
      }),
    [prefersDarkMode],
  );
  useEffect(() => {
    const getUser = async (token: string) => {
      const res = await axios.get<User[]>(`${baseURL}auth/users`, { headers: { Authorization: `Token ${token}` } });
      setUser(res.data[0]);
    }
    const token = localStorage.getItem('user_tk');
    if (token) getUser(token || '');
  }, []);

  console.log(user)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Navbar user={user} />
            <Box sx={{ display: 'flex', flexDirection: 'row ' }}>
              {/* <AnuncioCard anuncio={{id: 2, clase: 1, autor: 1, titulo: "Fundamentos de Programacion", cuerpo: "Alejo es un hpta"}}/> */}
              {user && <Sidebar user={user} />}
              {/* <Clases/> */}
              <Routes>
                <Route path="/" element={
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                  >
                    Bienvenid@ a DaVinci!
                  </Typography>
                } />
                <Route path="auth">
                  <Route path="login" element={<LogIn />} />
                  <Route path="signup" element={<SignUp />} />
                </Route>
                <Route path="clase/:idClase/:tab" element={<Clases user={user} />} />
                <Route path="/404" />
                <Route path="*" element={<Navigate to="/404" />} />
              </Routes>

            </Box>


          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
