export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) {
  const baseStyle =
    "px-6 py-2.5 rounded-lg font-medium transition duration-200 disabled:opacity-50";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-700",
    success: "bg-green-600 hover:bg-green-700 text-white shadow-sm",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
