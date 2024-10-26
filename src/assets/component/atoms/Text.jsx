const Text = ({ children, className = "", variant = "normal" }) => {
    const styles = {
      normal: "text-base",
      title: "text-2xl font-bold",
      subtitle: "text-xl font-semibold",
      small: "text-sm text-gray-600"
    };
  
    return (
      <div className={`${styles[variant]} ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Text;