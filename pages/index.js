export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🚀 Investment Platform
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to your investment platform
        </p>
        <div className="space-y-4">
          <a 
            href="/user/login" 
            className="block w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            User Login
          </a>
          <a 
            href="/admin/login" 
            className="block w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Admin Login
          </a>
        </div>
      </div>
    </div>
  );
}
