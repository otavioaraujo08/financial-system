import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  formulario: {
    width: "80%",
    minHeight: "7rem",
    background: "#FEFEFE",
    borderRadius: "1rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  alignText: {
    textAlign: "center",
  },
  dateInput: {
    width: "15rem",
    height: "3rem",
  },
  selectInput: {
    width: "15rem",
    height: "3rem",
  },
}));
