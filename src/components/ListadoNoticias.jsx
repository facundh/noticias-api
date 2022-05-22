import { Pagination, Stack } from "@mui/material";
import  Grid  from "@mui/material/Grid";
import  Typography  from "@mui/material/Typography";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";


const ListadoNoticias = () => {

    const {noticias, totalNoticias, handleChangePage, pagina} = useNoticias();
   
    const totalPaginas = Math.ceil(totalNoticias / 20);
  return (
   <>
    <Typography textAlign='center' marginY={5} variant='h3' component={'h2'} color={'skyblue'}>
        Ultimas noticias
    </Typography>

    <Grid container spacing={2}>
        {
            noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))
        }
    </Grid>

    <Stack
    sx={{
        marginY: 5
        
    }}
    spacing={2}
    direction='row'
    justifyContent={'center'}
    alignItems={'center'}
    >
        <Pagination color="primary" count={totalPaginas} onChange={handleChangePage} page={pagina}/>

       
    </Stack>
   </>
  )
}

export default ListadoNoticias