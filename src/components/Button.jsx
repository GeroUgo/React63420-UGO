import React from "react";

const Button = ({ text, color, size, icon, onClick, disabled }) => {
  const colorClasses = {
    primary: "bg-blue-500 hover:bg-blue-400",
    secondary: "bg-gray-500 hover:bg-gray-400",
    danger: "bg-red-500 hover:bg-red-400",
  };

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const buttonStyles = `
    ${colorClasses[color] || ""} 
    ${sizeClasses[size] || ""} 
    text-white font-bold rounded-md transition duration-200 ease-in-out
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `;

  return (
    <button
      onClick={!disabled ? onClick : undefined} 
      className={buttonStyles}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
