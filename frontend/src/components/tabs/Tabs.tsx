// import * as React from 'react';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function TabsClases() {
  const params = useParams();

  const [value, setValue] = React.useState('anuncios');
  React.useEffect(() => {
    const tab = params.tab ?? '';
    if (['entregas', 'preguntas'].includes(tab)) {
      setValue(tab);
    } else {
      setValue('anuncios');
    }
  }, [params]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'right', flexDirection: 'row', marginTop: "10px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        sx={{width: "27%"}}
      >
        <Tab value="anuncios" label="Anuncios" component={Link} to={`/clase/${params.idClase}/anuncios`}/>
        <Tab value="entregas" label="Entregas" component={Link} to={`/clase/${params.idClase}/entregas`}/>
        <Tab value="preguntas" label="Preguntas" component={Link} to={`/clase/${params.idClase}/preguntas`}/>
      </Tabs>
    </Box>
  );
}
  
