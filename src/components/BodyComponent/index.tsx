import data from "../../utils/csvjson.json";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./index.css";

interface Producto {
  marca: string;
  precio: number | string; // Puedes usar string si el precio viene como cadena
}
export const BodyComponent = () => {
  const obtenerProductos = (): Producto[] => {
    return data as Producto[];
  };

  const listaProductos = obtenerProductos();
  console.log(listaProductos);
  return (
    <div className="bodyContainer">
      <p>
        El proceso de extracción ha demostrado ser eficiente, resaltando la
        importancia de implementar técnicas de web scraping para la recopilación
        de datos en tiempo real. Los resultados obtenidos son valiosos para el
        análisis de tendencias del mercado de portátiles y pueden servir como
        base para futuras investigaciones o decisiones de compra. Es
        recomendable realizar un análisis más profundo de los datos extraídos
        para identificar patrones de precios y preferencias de marca.
      </p>

      <div className="card">
        <DataTable
          value={listaProductos}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field="marca"
            header="Marca"
            sortable
            style={{ width: "25%" }}
          ></Column>
          <Column
            field="precio"
            header="Precio"
            sortable
            style={{ width: "25%" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};
