export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
