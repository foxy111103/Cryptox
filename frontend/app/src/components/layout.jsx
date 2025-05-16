// components/Layout.jsx
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {children}
      </div>
      
    </div>
  );
}

export default Layout;
