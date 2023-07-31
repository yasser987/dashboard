import * as React from "react";
import Box from "@mui/material/Box";
//import { DataGridPro } from "@mui/x-data-grid-pro";
//import { useDemoData } from "@mui/x-data-grid-generator";
//import { useMediaQuery } from "@mui/material";

export default function analytics() {
  //  const { data } = useDemoData({
  //    dataSet: "Commodity",
  //    rowLength: 100000,
  //    editable: true,
  //  });
  //
  //  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Box sx={{ height: 520, width: "75%", margin: "0 auto" }}>
      {/*<DataGridPro
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableRowSelectionOnClick
      />*/}
      <h1>Analytics</h1>
    </Box>
  );
}
