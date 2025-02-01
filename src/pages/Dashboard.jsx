import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) navigate("/");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Welcome to the Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
          }}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
