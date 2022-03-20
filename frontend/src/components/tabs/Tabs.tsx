// import * as React from 'react';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

interface Props { 
  match: { 
    params: { clases: any; }; 
  }; 
}

export default function ColorTabs(props: Props) {
  const [value, setValue] = React.useState('anuncios');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab value="anuncios" label="Anuncios" component={Link} to={`/clases/${props.match.params.clases}/anuncios`}/>
        <Tab value="entregas" label="Entregas" component={Link} to={`/clases/${props.match.params.clases}/entregas`}/>
        <Tab value="preguntas" label="Preguntas" component={Link} to={`/clases/${props.match.params.clases}/preguntas`}/>
      </Tabs>
    </Box>
  );
}
  
