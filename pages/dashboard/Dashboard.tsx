import { Stack } from "@mui/material";
import React from "react";
import DataRibbon from "../components/Dashboard/DataRibbon";
import sass from "../../styles/Dashboard.module.scss";
import TranscationPerDay from "../components/Dashboard/TranscationPerDay";
import TranscationBottomRaw from "../components/Dashboard/TranscationBottomRaw";

function Dashboard() {
  return (
    <Stack direction="column" spacing={4} className={sass.dashboardParent}>
      <DataRibbon />
      <TranscationPerDay />
      <TranscationBottomRaw />
    </Stack>
  );
}
export default Dashboard;
