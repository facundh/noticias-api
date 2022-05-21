import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Menu,
} from "@mui/material";
import useNoticias from "../hooks/useNoticias";

const CATEGORIAS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];
const Formulario = () => {

    const {categorias, handleChangeCategoria} = useNoticias()
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select label="Categoría" onChange={handleChangeCategoria} value={categorias}>
          {CATEGORIAS.map((categoria) => (
            <MenuItem key={categoria.value} value={categoria.value}>
              {categoria.label}
            </MenuItem>
          ))}
        </Select>

        <Box sx={{marginTop:2}}>
          <Button fullWidth variant="contained" color="primary">
            Buscar cateogría
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default Formulario;
