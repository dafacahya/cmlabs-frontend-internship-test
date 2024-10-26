const Subtitle = (props) =>{
    const {name} = props;
    return(
        <p className="text-gray-600 text-center text-sm mb-6">
            {name}
        </p>
    );
};

export default Subtitle;