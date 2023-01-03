import React from "react";
import { Container, Header, Loader, Segment, Dimmer } from "semantic-ui-react";
import DataGrid, { textEditor } from "react-data-grid";
import { read, utils } from "xlsx";
import HeaderPage from "./components/HeaderPage";

const wb_to_rdg = (workbook) => {
  /* create an array of arrays */
  const rows = utils.sheet_to_json(workbook, { header: 1 });

  /* create column array */
  const range = utils.decode_range(workbook["!ref"] || "A1");
  const columns = Array.from({ length: range.e.c + 1 }, (_, i) => ({
    key: String(i), // RDG will access row["0"], row["1"], etc
    name: utils.encode_col(i), // the column labels will be A, B, etc
    editor: textEditor, // enable cell editing
  }));

  return { rows, columns }; // these can be fed to setRows / setColumns
};

const App = () => {
  const [table, setTable] = React.useState();

  React.useEffect(() => {
    fetch("source.xlsx")
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const wb = read(ab.toString(), { type: "base64" });
        setTable(wb_to_rdg(wb));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <React.Fragment>
      <HeaderPage />
      <Container>
        {!table && (
          <Segment basic>
            <p />
            <Dimmer active inverted>
              <Loader state="active">Caricamento in corso...</Loader>
            </Dimmer>
          </Segment>
        )}
        {table && <DataGrid columns={table.columns} rows={table.rows} />}
      </Container>
    </React.Fragment>
  );
};

export default App;
