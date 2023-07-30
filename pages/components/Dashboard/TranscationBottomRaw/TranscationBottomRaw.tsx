import React from "react";
import { Paper, Stack, useMediaQuery } from "@mui/material";
import sass from "../../../../styles/TranscationBottomRaw.module.scss";
import DataChart from "../../../components/Dashboard/DataChart";
import { doughnutChartData } from "../../../components/mockData";

export default function TranscationBottomRaw() {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Stack direction={`${isMobile ? "column" : "row"}`} spacing={"2.5%"}>
      <Stack
        direction="column"
        sx={isMobile ? { width: "80%" } : { width: "23%" }}
      >
        <Paper>
          <p>Transcations per user type</p>
          <DataChart type="doughnut" data={doughnutChartData} />
        </Paper>
      </Stack>
      <Stack sx={isMobile ? { width: "80%" } : { width: "23%" }}>
        <Paper>
          <p>Transcations per user type</p>
          <DataChart type="doughnut" data={doughnutChartData} />
        </Paper>
      </Stack>
      <Stack sx={isMobile ? { width: "80%" } : { width: "23%" }}>
        <Paper>
          <p>Transcations per user type</p>
          <DataChart type="doughnut" data={doughnutChartData} />
        </Paper>
      </Stack>
      <Stack sx={isMobile ? { width: "80%" } : { width: "23%" }}>
        <Paper>
          <p>Transcations per user type</p>
          <DataChart type="doughnut" data={doughnutChartData} />
        </Paper>
      </Stack>
    </Stack>
  );
}
