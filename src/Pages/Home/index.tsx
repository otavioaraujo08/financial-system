import { Box } from "@mui/material";

import { Cards } from "../../Components/Cards";
import { Header } from "../../Layout/Header";

export function Home() {
  return (
    <Box style={{ background: "#24293E" }}>
      <Header />
      <Cards />
    </Box>
  );
}
