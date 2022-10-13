import { Box } from "@mui/material";

import { Cards } from "../../Components/Cards";
import { Form } from "../../Components/Form";
import { Header } from "../../Layout/Header";

export function Home() {
  return (
    <Box
      style={{
        background: "#24293E",
        height: "100vh",
      }}
    >
      <Header />

      <Box style={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
        <Cards />
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <Form />
      </Box>
    </Box>
  );
}
