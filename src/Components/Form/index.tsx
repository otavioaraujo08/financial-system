import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { reasons } from "../../Utils/Reasons";
import { useStyles } from "./styles";

export function Form() {
  const classes = useStyles();

  return (
    <Box className={classes.formulario}>
      <Box>
        <InputLabel className={classes.alignText}>Data</InputLabel>

        <input type="date" className={classes.dateInput} />
      </Box>

      <Box>
        <InputLabel className={classes.alignText}>Categoria</InputLabel>

        <Select
          // value={age}
          // onChange={handleChange}
          className={classes.selectInput}
        >
          {reasons.map((reason) => (
            <MenuItem key={reason} value={reason}>
              {reason}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Box>
        <InputLabel className={classes.alignText}>Título</InputLabel>

        <TextField variant="outlined" />
      </Box>

      <Box>
        <InputLabel className={classes.alignText}>Valor</InputLabel>

        <TextField variant="outlined" />
      </Box>

      <Button variant="contained">Confirmar</Button>
    </Box>
  );
}
