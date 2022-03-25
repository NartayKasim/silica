import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.left}>input</div>
      <div className={classes.right}>output</div>
    </div>
  );
}
