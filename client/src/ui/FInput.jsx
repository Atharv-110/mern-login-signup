const FInput = (props) => {
  // eslint-disable-next-line react/prop-types
  const { label, place, variant, val, setVal } = props;
  return (
    <div>
      <label className="text-sm text-gray-500 capitalize" htmlFor="">
        {label}
      </label>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        type={variant}
        className="block outline-none border-2 rounded-md px-3 py-2 w-full"
        placeholder={place}
      />
    </div>
  );
};

export default FInput;
