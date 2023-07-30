import React from "react";
import { useTheme } from "@mui/system";
import { Grid, Paper, Typography, Card } from "@mui/material";
import sass from "../../../../styles/Transcation.module.scss";
import DataChart from "../DataChart";
import { lineChartData } from "../../mockData";

export type TranscationCardType = {
  title: string;
  value: string;
  changeValue: string;
};
export type TranscationPerDayProps = {
  data?: string;
};
export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};

const TranscationPerDay = () => {
  const theme = useTheme();

  return (
    <Grid container gap={2} className={sass.wrapper}>
      <Paper className={sass.transaction}>
        <div className={sass.chart}>
          <Typography>TransActions per day</Typography>
          <DataChart type={"line"} data={lineChartData} />
        </div>
        <div className={sass.cardWrapper}>
          <Card className={sass.card} variant={"outlined"}>
            <div className={sass.cardTitle}>
              <Typography>Total Products</Typography>
            </div>
            <div className={sass.cardValue}>
              <Typography>1.275</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                428.7%
              </Typography>
            </div>
          </Card>
          <Card className={sass.card} variant={"outlined"}>
            <div className={sass.cardTitle}>
              <Typography>Buy-to-detail</Typography>
            </div>
            <div className={sass.cardValue}>
              <Typography>4.40%</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                899.4%
              </Typography>
            </div>
          </Card>
          <Card className={sass.card} variant={"outlined"}>
            <div className={sass.cardTitle}>
              <Typography>Refunds</Typography>
            </div>
            <div className={sass.cardValue}>
              <Typography>0</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                0
              </Typography>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
};

export default TranscationPerDay;
