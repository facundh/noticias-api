import { useState, useEffect, createContext } from "react";

export const NoticiasContext = createContext();

const NoticiasProvider = ({children}) => {
    const [categorias, setCategorias] = useState('general');

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