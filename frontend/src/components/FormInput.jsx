export default function FormInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  options,
  required = false,
}) {
  return (
    <div className="mb-4 text-left">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Select an option</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={3}
          className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
      )}

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
