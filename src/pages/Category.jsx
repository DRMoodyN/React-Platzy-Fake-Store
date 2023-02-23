import { useEffect, useState } from "react";
import { getAll } from "../apis/fackeAxios.js";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";

const CategoryPage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    (async () => {
      const request = await getAll(`/categories`);
      setIsLoad(!isLoad);
      const l = await request.data.map((x) => ({ id: x.id, name: x.name }));
      setCategoryList(l);
    })();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 20 },
    { field: "name", headerName: "Nombre", width: 200 },
  ];

  return (
    <div>
      <h1>Lista de Categorias</h1>
      <Box style={{ height: 400, width: "100%" }}>
        {isLoad ? (
          <DataGrid rows={categoryList} columns={columns} pageSize={5} />
        ) : (
          <h3>Cargando lista</h3>
        )}
      </Box>
    </div>
  );
};

export { CategoryPage };
