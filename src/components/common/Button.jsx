import PropTypes from "prop-types";

function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyles = "btn"; // Use the reusable .btn style from Tailwind config
  const variants = {
    primary: "btn-primary", // Solid accent button
    gradient: "btn-gradient", // Gradient style button
    secondary: "bg-white text-accent hover:bg-gray-100", // Fallback for secondary
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "gradient"]),
  className: PropTypes.string,
};

export default Button;
