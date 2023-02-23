import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { getAll } from "../apis/fackeAxios";

const ProductPage = () => {
  const [productList, setProductList] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    (async () => {
      const request = await getAll("/products");
      const list = await request.data.map((x) => ({
        id: x.id,
        title: x.title,
        price: x.price,
        category: x.category.name,
      }));
      setProductList(list);
      console.table(productList);
      setIsLoad(!isLoad);
    })();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 20 },
    { field: "category", headerName: "Categoria", width: 200 },
    { field: "title", headerName: "Nombre", width: 200 },
    { field: "price", headerName: "Precio", width: 100 },
  ];

  return (
    <div>
      <h1>Lista de productos</h1>
      <Box style={{ height: 400, with: "100%" }}>
        {isLoad ? (
          <DataGrid columns={columns} rows={productList} pageSize={5} />
        ) : (
          <h3>Cargando lista</h3>
        )}
      </Box>
    </div>
  );
};

export { ProductPage };
