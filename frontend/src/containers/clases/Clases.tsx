import * as React from 'react';
import TabsClases from '../../components/tabs/Tabs';
import Anuncios from '../../components/anuncios/Anuncios';
import Entregas from '../../components/entregas/Entregas';
import Preguntas from '../../components/preguntas/Preguntas';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import CrearAnuncioDialog from '../../components/dialogs/CrearAnuncioDialog';
import CrearEntregaDialog from '../../components/dialogs/CrearEntregaDialog';
import CrearPreguntaDialog from '../../components/dialogs/CrearPreguntaDialog';
import EditarClaseDialog from '../../components/dialogs/EditarClaseDialog';

const Clases = () => {
  const params = useParams();
  const [tab, setTab] = React.useState('anuncios');
  React.useEffect(() => {
    const tab = params.tab ?? '';
    if (['entregas', 'preguntas'].includes(tab)) {
      setTab(tab);
    } else {
      setTab('anuncios');
    }
  },[params])
  
  return (
    <Box sx={{ width: '100%' }}>
      <EditarClaseDialog idClase={params?.idClase ?? ''} />
      <TabsClases></TabsClases>
      {tab === "anuncios" && <CrearAnuncioDialog idClase={params?.idClase ?? ''}/>}
      {tab === "entregas" && <CrearEntregaDialog idClase={params?.idClase ?? ''}/>}
      {tab === "preguntas" && <CrearPreguntaDialog idClase={params?.idClase ?? ''}/>}
      {tab === "anuncios" && <Anuncios idClase={params?.idClase ?? ''}/>}
      {tab === "entregas" && <Entregas idClase={params?.idClase ?? ''}/>}
      {tab === "preguntas" && <Preguntas idClase={params?.idClase ?? ''}/>}
      
    </Box>
  )
}

export default Clases;