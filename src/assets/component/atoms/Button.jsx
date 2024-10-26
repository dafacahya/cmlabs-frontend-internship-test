const Button = (props) => {
    const {children, variant = "bg-black", text = "text-white", font="font-serif", onClick}=props;
    return (
        <button
            className={`h-10 px-6 rounded-md ${variant} ${text} ${font} text-white`}
            onClick={onClick}
            >
            {children}
        </button>
    );
};

export default Button;