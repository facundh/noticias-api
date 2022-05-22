import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const NoticiasContext = createContext();

const NoticiasProvider = ({children}) => {
    const [categorias, setCategorias] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categorias}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url);

           setNoticias(data.articles);
           setTotalNoticias(data.totalResults)
           setPagina(1)
        }

        consultarAPI()
    },[categorias])
    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categorias}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url);

           setNoticias(data.articles);
           setTotalNoticias(data.totalResults)
           
        }

        consultarAPI()
    },[pagina])

    const handleChangeCategoria = e => {
        setCategorias(e.target.value);
    }

    const handleChangePage = (e, valor) => {
        setPagina(valor);
    }

    return(
        <NoticiasContext.Provider value={{categorias, handleChangeCategoria, noticias, totalNoticias, handleChangePage, pagina}}>
            {children}
        </NoticiasContext.Provider>
    )
}

export default NoticiasProvider;