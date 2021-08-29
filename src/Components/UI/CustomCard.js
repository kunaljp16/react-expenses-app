import "./CustomCard.scss";

function CustomCard(props) {
  let classes = "custom-card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default CustomCard;
