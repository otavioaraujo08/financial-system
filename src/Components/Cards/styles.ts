import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  cards: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    [theme.breakpoints.between(0, 615)]: {
      display: "block",
    },
  },
  card: {
    minWidth: "19rem",
    minHeight: "8rem",
    borderRadius: "1rem",
    [theme.breakpoints.between(0, 615)]: {
      marginBottom: "1.2rem",
    },
  },
  income: {
    backgroundColor: "#7731F1",
  },
  expenses: {
    backgroundColor: "#29CABF",
  },
  balance: {
    backgroundColor: "#504F62",
  },
  contentCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "0.9rem",
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "2.5rem",
    minWidth: "2.5rem",
    borderRadius: "0.5rem",
    color: "#FFFEFF",
  },
  title: {
    color: "#FFFFFE",
    marginLeft: "1rem",
    fontFamily: "Open Sans, sans-serif",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "1.4rem",
    lineHeight: "22px",
  },
  contentMoney: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    marginTop: "1rem",
    marginLeft: "0.9rem",
  },
  money: {
    marginTop: "0.5rem",
    color: "#FFFFFE",
    fontFamily: "Open Sans, sans-serif",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "1.8rem",
    lineHeight: "22px",
  },
  subtitle: {
    marginTop: "1rem",
    color: "#FFFFFE",
    fontFamily: "Open Sans, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "1.2rem",
    lineHeight: "22px",
  },
}));
