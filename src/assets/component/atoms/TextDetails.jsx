const TextDetail = ({ label, value, className = "" }) => {
    return (
      <div className={`flex flex-col ${className}`}>
        <span className="text-sm text-gray-600">{label}</span>
        <span className="font-medium">{value}</span>
      </div>
    );
  };
  
  export default TextDetail;
  