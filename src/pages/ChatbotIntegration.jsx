
// import { useState, useEffect } from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaCopy, FaEnvelope } from "react-icons/fa";
// import Confetti from 'react-confetti';
// import TestChatBot from "../assets/test-chat-bot.jpg"
// import WebInt from "../assets/Website-Integration.jpg"
// import VarifyInt from "../assets/Verify-Integration.jpg"

// export default function ChatbotIntegration() {
//   const [integrationStatus, setIntegrationStatus] = useState(null);
//   const [showCode, setShowCode] = useState(false);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   const dummyChatbotCode = `<script src="https://dummy-chatbot.com/integration.js"></script>`;

//   useEffect(() => {
//     if (showConfetti) {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });
//       const timer = setTimeout(() => setShowConfetti(false), 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [showConfetti]);

//   const testIntegration = () => {
//     const isSuccess = Math.random() > 0.3;
//     setIntegrationStatus(isSuccess ? "success" : "failure");
//     if (isSuccess) setShowConfetti(true);
//   };

//   const IntegrationCard = ({ title, children, image }) => (
//     <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
//       <img src={image} alt={title} className="h-32 w-full object-contain mb-4" />
//       <h3 className="text-xl font-semibold mb-4">{title}</h3>
//       {children}
//     </div>
//   );

//   if (integrationStatus === "success") {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//         {showConfetti && <Confetti {...windowSize} recycle={false} />}
        
//         <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full text-center animate-fade-in-up">
//           <div className="text-green-500 text-6xl mb-4">🎉</div>
//           <h1 className="text-3xl font-bold mb-4">Integration Successful!</h1>
//           <p className="text-gray-600 mb-8">Your chatbot is now live and ready to interact with visitors!</p>

//           <div className="grid gap-4 md:grid-cols-2 mb-8">
//             <button className="bg-blue-500 cursor-pointer text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
//               <span>⚙️</span> Explore Admin Panel
//             </button>
//             <button className="bg-green-500 cursor-pointer text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
//               <span>🤖</span> Start Chatting
//             </button>
//           </div>

//           <div className="border-t pt-6">
//             <h3 className="text-gray-600 mb-4">Share the news!</h3>
//             <div className="flex justify-center gap-4">
//               <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
//                 <FaFacebook size={28} />
//               </a>
//               <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
//                 <FaTwitter size={28} />
//               </a>
//               <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
//                 <FaLinkedin size={28} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (integrationStatus === "failure") {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//         <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center animate-shake">
//           <div className="text-red-500 text-6xl mb-4">⚠️</div>
//           <h1 className="text-2xl font-bold mb-4">Integration Check Failed</h1>
//           <p className="text-gray-600 mb-6">We couldn't detect the chatbot on your website. Please ensure:</p>
//           <ul className="text-left list-disc list-inside mb-6 text-gray-600">
//             <li className="mb-2">The code is placed in &lt;head&gt; section</li>
//             <li className="mb-2">There are no JavaScript errors</li>
//             <li className="mb-2">Website is publicly accessible</li>
//           </ul>
//           <button
//             className="bg-blue-500 cursor-pointer text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
//             onClick={() => setIntegrationStatus(null)}
//           >
//             ← Back to Integration
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto space-y-8">
//         <div className="bg-yellow-100 p-4 rounded-lg text-center">
//           Chatbot not working as intended?{" "}
//           <a href="#" className="text-blue-600 underline hover:text-blue-800">Share feedback</a>
//         </div>

//         <h1 className="text-3xl font-bold text-center">Chatbot Integration</h1>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <IntegrationCard
//             title="Test Chatbot"
//             image={TestChatBot} 
//           >
//             <button
//               className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
//               onClick={() => window.open("https://client-website.com?chatbot=true", "_blank")}
//             >
//               Open Test Environment
//             </button>
//           </IntegrationCard>

//           <IntegrationCard
//             title="Website Integration"
//             image= {WebInt} 
//           >
//             <button
//               className="w-full cursor-pointer bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors mb-2"
//               onClick={() => setShowCode(!showCode)}
//             >
//               Show Integration Code
//             </button>

//             {showCode && (
//               <div className="mt-4 bg-gray-50 p-4 rounded-lg"> 
//                 <pre className="text-sm bg-gray-100 p-2 rounded-md overflow-x-auto">{dummyChatbotCode}</pre>
//                 <div className="flex gap-2 mt-3">
//                   <button
//                     className="flex items-center cursor-pointer gap-2 text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                     onClick={() => navigator.clipboard.writeText(dummyChatbotCode)}
//                   >
//                     <FaCopy /> Copy
//                   </button>
//                   <button className="flex items-center cursor-pointer gap-2 text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
//                     <FaEnvelope /> Email
//                   </button>
//                 </div>
//               </div>
//             )}
//           </IntegrationCard>

//           <IntegrationCard
//             title="Verify Integration"
//             image= {VarifyInt}
//           >
//             <button
//               className="w-full cursor-pointer bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
//               onClick={testIntegration}
//             >
//               Run Integration Test
//             </button>
//           </IntegrationCard>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaCopy, FaEnvelope, FaTimes } from "react-icons/fa";
import Confetti from 'react-confetti';
import TestChatBot from "../assets/test-chat-bot.jpg"
import WebInt from "../assets/Website-Integration.jpg"
import VarifyInt from "../assets/Verify-Integration.jpg"

export default function ChatbotIntegration() {
  const [integrationStatus, setIntegrationStatus] = useState(null);
  const [showCodeModal, setShowCodeModal] = useState(false); // State for modal visibility
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const dummyChatbotCode = `<script src="https://dummy-chatbot.com/integration.js"></script>`;

  useEffect(() => {
    if (showConfetti) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const testIntegration = () => {
    const isSuccess = Math.random() > 0.3;
    setIntegrationStatus(isSuccess ? "success" : "failure");
    if (isSuccess) setShowConfetti(true);
  };

  const IntegrationCard = ({ title, children, image }) => (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
      <img src={image} alt={title} className="h-32 w-full object-contain mb-4" />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );

  // Modal Component
  const CodeModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Integration Code</h3>
          <button
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={() => setShowCodeModal(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>
        <pre className="text-sm bg-gray-100 p-4 rounded-md overflow-x-auto">{dummyChatbotCode}</pre>
        <div className="flex gap-2 mt-4">
          <button
            className="flex items-center gap-2 text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
            onClick={() => navigator.clipboard.writeText(dummyChatbotCode)}
          >
            <FaCopy /> Copy
          </button>
          <button className="flex items-center gap-2 text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 cursor-pointer">
            <FaEnvelope /> Email
          </button>
        </div>
      </div>
    </div>
  );

  if (integrationStatus === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        {showConfetti && <Confetti {...windowSize} recycle={false} />}
        
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full text-center animate-fade-in-up">
          <div className="text-green-500 text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold mb-4">Integration Successful!</h1>
          <p className="text-gray-600 mb-8">Your chatbot is now live and ready to interact with visitors!</p>

          <div className="grid gap-4 md:grid-cols-2 mb-8">
            <button className="bg-blue-500 cursor-pointer text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
              <span>⚙️</span> Explore Admin Panel
            </button>
            <button className="bg-green-500 cursor-pointer text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
              <span>🤖</span> Start Chatting
            </button>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-gray-600 mb-4">Share the news!</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaFacebook size={28} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                <FaTwitter size={28} />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (integrationStatus === "failure") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center animate-shake">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold mb-4">Integration Check Failed</h1>
          <p className="text-gray-600 mb-6">We couldn't detect the chatbot on your website. Please ensure:</p>
          <ul className="text-left list-disc list-inside mb-6 text-gray-600">
            <li className="mb-2">The code is placed in &lt;head&gt; section</li>
            <li className="mb-2">There are no JavaScript errors</li>
            <li className="mb-2">Website is publicly accessible</li>
          </ul>
          <button
            className="bg-blue-500 cursor-pointer text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => setIntegrationStatus(null)}
          >
            ← Back to Integration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-yellow-100 p-4 rounded-lg text-center">
          Chatbot not working as intended?{" "}
          <a href="#" className="text-blue-600 underline hover:text-blue-800">Share feedback</a>
        </div>

        <h1 className="text-3xl font-bold text-center">Chatbot Integration</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <IntegrationCard
            title="Test Chatbot"
            image={TestChatBot} 
          >
            <button
              className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() => window.open("https://client-website.com?chatbot=true", "_blank")}
            >
              Open Test Environment
            </button>
          </IntegrationCard>

          <IntegrationCard
            title="Website Integration"
            image= {WebInt} 
          >
            <button
              className="w-full cursor-pointer bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors mb-2"
              onClick={() => setShowCodeModal(true)}
            >
              Show Integration Code
            </button>
          </IntegrationCard>

          <IntegrationCard
            title="Verify Integration"
            image= {VarifyInt}
          >
            <button
              className="w-full cursor-pointer bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
              onClick={testIntegration}
            >
              Run Integration Test
            </button>
          </IntegrationCard>
        </div>
      </div>

      {/* Render the modal if showCodeModal is true */}
      {showCodeModal && <CodeModal />}
    </div>
  );
}