import AnalyticsIcon from "@mui/icons-material/Analytics";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Box, Card, CardContent, Typography } from "@mui/material";

import { useStyles } from "./styles";

export function Cards() {
  const classes = useStyles();

  return (
    <Box className={classes.cards}>
      <Card className={classes.card}>
        <CardContent className={classes.income}>
          <Box className={classes.contentCard}>
            <Box className={classes.iconBox} style={{ background: "#A56CF6" }}>
              <ArrowCircleUpIcon />
            </Box>

            <Typography className={classes.title}>Receita</Typography>
          </Box>

          <Box className={classes.contentMoney}>
            <Typography className={classes.money}>5000</Typography>

            <Typography className={classes.subtitle}>Total esse mês</Typography>
          </Box>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardContent className={classes.expenses}>
          <Box className={classes.contentCard}>
            <Box className={classes.iconBox} style={{ background: "#7BDBD4" }}>
              <ArrowCircleDownIcon />
            </Box>

            <Typography className={classes.title}>Receita</Typography>
          </Box>

          <Box className={classes.contentMoney}>
            <Typography className={classes.money}>5000</Typography>

            <Typography className={classes.subtitle}>Total esse mês</Typography>
          </Box>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardContent className={classes.balance}>
          <Box className={classes.contentCard}>
            <Box className={classes.iconBox} style={{ background: "#858390" }}>
              <AnalyticsIcon />
            </Box>

            <Typography className={classes.title}>Receita</Typography>
          </Box>

          <Box className={classes.contentMoney}>
            <Typography className={classes.money}>5000</Typography>

            <Typography className={classes.subtitle}>Total esse mês</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
