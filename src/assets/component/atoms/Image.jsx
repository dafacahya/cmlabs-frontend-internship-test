const Image = (props) => {
    const {src, alt, className = " "} = props;
    return(
        <img 
        src={src} 
        alt={alt} 
        className={`object-cover rounded-lg ${className}`}
        />
    );
};

export default Image;