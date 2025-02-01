
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import OrganiSetup from "../assets/computer-chair.jpg"
import ChatBot from "../assets/Chatbot-Integration&Testing.jpg"

function Home() {
  const navigate = useNavigate();

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome to the Home Page</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Setup Organisation Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.3 }}
            onClick={() => navigate('/setup')}
            className="bg-blue-50 rounded-lg cursor-pointer overflow-hidden"
          >
            <div className="p-6">
              <img
                src={OrganiSetup}
                alt="Setup Organisation"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-800">Setup Organisation</h2>
              <p className="text-sm text-blue-600 mt-2">
                Configure your organisation settings and preferences.
              </p>
            </div>
          </motion.div>

          {/* Chatbot Integration & Testing Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.3, delay: 0.2 }} // Slight delay for staggered animation
            onClick={() => navigate('/integration')}
            className="bg-green-50 rounded-lg cursor-pointer overflow-hidden"
          >
            <div className="p-6">
              <img
                src={ChatBot} 
                alt="Chatbot Integration"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-green-800">Chatbot Integration & Testing</h2>
              <p className="text-sm text-green-600 mt-2">
                Integrate and test your chatbot with your platform.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;