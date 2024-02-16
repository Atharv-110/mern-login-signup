const FTypography = (props) => {
  // eslint-disable-next-line react/prop-types
  const { variant, text } = props;
  switch (variant) {
    case "heading":
      return (
        <h1 className="font-semibold text-gray-800 text-3xl tracking-wide">
          {text}
        </h1>
      );
    case "sub-heading":
      return <p className="sub-title">{text}</p>;

    default:
      return null;
  }
};

export default FTypography;
