const MainTitle = (props) =>{
    const {name} = props;
    return(
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-5">
            {name}
        </h1>
    );
};

export default MainTitle;