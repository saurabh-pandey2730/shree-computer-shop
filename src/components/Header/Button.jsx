

const Button = ({className, onClick, type, text, style}) => {

    return (
      <button
        type={type}
        onClick={onClick}
        style={style}
        className={`${className} text-white rounded-full transform transition hover:scale-110 duration-300 ease-in-out z-50`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  