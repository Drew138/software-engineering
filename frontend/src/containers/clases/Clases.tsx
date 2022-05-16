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
import BorrarDialog from '../../components/dialogs/BorrarDialog';
import {User} from "../../models/User";

interface Props {
  user: (User | null);
}

const Clases = ({user} : Props) => {
  const params = useParams();
  const [tab, setTab] = React.useState('anuncios');
  React.useEffect(() => {
    const tab = params.tab ?? '';
    if (['entregas', 'preguntas'].includes(tab)) {
      setTab(tab);
    } else {
      setTab('anuncios');
    }
  }, [params])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mr: "20px", mt: "20px" }}>
        {user?.rol === 'Profesor' && <BorrarDialog tipo="clase" nombre="clase" id={parseInt(params?.idClase ?? "0", 10)} />}
      </Box>
      { user?.rol === 'Profesor' && <EditarClaseDialog idClase={params?.idClase ?? ''} />}
      <TabsClases></TabsClases>
      {tab === "anuncios" && user?.rol === "Profesor" && <CrearAnuncioDialog idClase={params?.idClase ?? ''} />}
      {tab === "entregas" && user?.rol === 'Profesor' && <CrearEntregaDialog idClase={params?.idClase ?? ''} />}
      {tab === "preguntas" && user?.rol === "Estudiante" && <CrearPreguntaDialog idClase={params?.idClase ?? ''} />}
      {tab === "anuncios" && <Anuncios idClase={params?.idClase ?? ''} user={user} />}
      {tab === "entregas" && <Entregas idClase={params?.idClase ?? ''} user={user} />}
      {tab === "preguntas" && <Preguntas idClase={params?.idClase ?? ''} user={user} />}

    </Box>
  )
}

export default Clases;