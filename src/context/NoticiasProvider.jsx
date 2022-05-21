import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const NoticiasContext = createContext();

const NoticiasProvider = ({children}) => {
    const [categorias, setCategorias] = useState('general');
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&vategory=${categorias}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url);

           setNoticias(data.articles);
        }

        consultarAPI()
    },[categorias])

    const handleChangeCategoria = e => {
        setCategorias(e.target.value);
    }

    return(
        <NoticiasContext.Provider value={{categorias, handleChangeCategoria}}>
            {children}
        </NoticiasContext.Provider>
    )
}

export default NoticiasProvider;