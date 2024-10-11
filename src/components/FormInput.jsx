const FormInput = ({ type, name, value, onChange, className, ...rest }) => {
  const changeHandler = (event) => {
    const currentText = event.target.value;
    if (name === "title" && currentText.length > 50) {
      return; 
    }

    onChange(currentText); 
  };

  const commonProps = {
    className,
    value,
    spellCheck: false,
    onChange: changeHandler,
    ...rest,
  };

  return (
    <>
      {type === "textarea" ? (
        <textarea {...commonProps} />
      ) : (
        <input type={type} {...commonProps} />
      )}
    </>
  );
};

export default FormInput;
