const FButton = (props) => {
    // eslint-disable-next-line react/prop-types
    const {variant, text, type} = props
  switch (variant) {
    case "filled":
      return <button type={type} className="btn bg-violet-600 text-white">{text}</button>;
    case "bordered":
      return <button className="btn border-2">{text}</button>;

    default:
      break;
  }
};

export default FButton;
