
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// function OrganisationSetup() {
//   const [company, setCompany] = useState({
//     name: "",
//     website: "",
//     description: "",
//   });
//   const [metaDescription, setMetaDescription] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [selectedPage, setSelectedPage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Dummy webpage scraping data
//   const webpages = [
//     { url: "https://example.com/about", status: "Scraped", chunks: ["Company history", "Team details"] },
//     { url: "https://example.com/services", status: "Scraped", chunks: ["Service 1 details", "Service 2 details"] },
//     { url: "https://example.com/contact", status: "Pending", chunks: [] },
//     { url: "https://example.com/blog", status: "Detected", chunks: [] },
//   ];

//   // Simulate fetching meta description
//   const fetchMetaDescription = async () => {
//     if (company.website) {
//       setMetaDescription(`Meta description for ${company.website} (Simulated)`);
//       setCompany({ ...company, description: `Meta description for ${company.website} (Simulated)` });
//     }
//   };

//   useEffect(() => {
//     fetchMetaDescription();
//   }, [company.website]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true); 
//     setTimeout(() => {
//       setIsSubmitted(true); 
//       setIsLoading(false); 
//     }, 2000); 
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
//       {/* Background Animation */}
//       <motion.div
//         className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 opacity-20"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.2 }}
//         transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//       />

//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative z-10">
//         <h1 className="text-2xl font-bold mb-6 text-center">Setup Organisation</h1>

//         {/* Form */}
//         <AnimatePresence>
//           {!isSubmitted && !isLoading && (
//             <motion.form
//               onSubmit={handleSubmit}
//               className="space-y-4"
//               initial={{ opacity: 1 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.input
//                 type="text"
//                 placeholder="Company Name"
//                 value={company.name}
//                 onChange={(e) => setCompany({ ...company, name: e.target.value })}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <motion.input
//                 type="url"
//                 placeholder="Company Website URL"
//                 value={company.website}
//                 onChange={(e) => setCompany({ ...company, website: e.target.value })}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//               />
//               <motion.textarea
//                 placeholder="Company Description"
//                 value={company.description || metaDescription}
//                 onChange={(e) => setCompany({ ...company, description: e.target.value })}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//               />
//               <motion.button
//                 type="submit"
//                 className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.6 }}
//               >
//                 Submit
//               </motion.button>
//             </motion.form>
//           )}
//         </AnimatePresence>

//         {/* Webpage Scraping Status */}
//         {isSubmitted && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Webpage Scraping Status</h2>
//             <ul className="space-y-2">
//               {webpages.map((page, index) => (
//                 <motion.li
//                   key={index}
//                   onClick={() => setSelectedPage(page)}
//                   className={`p-2 border rounded-lg cursor-pointer ${
//                     page.status === "Scraped"
//                       ? "bg-green-200"
//                       : page.status === "Pending"
//                       ? "bg-yellow-200"
//                       : "bg-gray-200"
//                   }`}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                 >
//                   {page.url} - {page.status}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Loading Animation */}
//       <AnimatePresence>
//         {isLoading && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white p-8 rounded-lg shadow-lg text-center"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0 }}
//             >
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4" />
//               <p className="text-lg font-semibold">Loading...</p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Selected Page Details */}
//       {selectedPage && (
//         <div className="bg-white p-6 mt-4 rounded-lg shadow-lg w-full max-w-md relative z-10">
//           <h2 className="text-lg font-semibold">Scraped Data for: {selectedPage.url}</h2>
//           <ul className="list-disc pl-6">
//             {selectedPage.chunks.length > 0 ? (
//               selectedPage.chunks.map((chunk, i) => <li key={i}>{chunk}</li>)
//             ) : (
//               <p className="text-gray-500">No data scraped yet.</p>
//             )}
//           </ul>
//           <button
//             onClick={() => setSelectedPage(null)}
//             className="mt-3 cursor-pointer w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-300"
//           >
//             Close
//           </button>
//         </div>
//       )}

//       {/* Proceed to Next Step Button */}
//       {isSubmitted && (
//         <motion.button
//           className="mt-4 bg-blue-500 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Proceed to Next Step
//         </motion.button>
//       )}
//     </div>
//   );
// }

// export default OrganisationSetup;



import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function OrganisationSetup() {
  const [company, setCompany] = useState({
    name: "",
    website: "",
    description: "",
  });
  const [metaDescription, setMetaDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Dummy webpage scraping data
  const webpages = [
    { url: "https://example.com/about", status: "Scraped", chunks: ["Company history", "Team details"] },
    { url: "https://example.com/services", status: "Scraped", chunks: ["Service 1 details", "Service 2 details"] },
    { url: "https://example.com/contact", status: "Pending", chunks: [] },
    { url: "https://example.com/blog", status: "Detected", chunks: [] },
  ];

  // Simulate fetching meta description
  const fetchMetaDescription = async () => {
    if (company.website) {
      setMetaDescription(`Meta description for ${company.website} (Simulated)`);
      setCompany({ ...company, description: `Meta description for ${company.website} (Simulated)` });
    }
  };

  useEffect(() => {
    fetchMetaDescription();
  }, [company.website]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6 relative overflow-hidden">
      {/* Full-screen background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Container for form and animation */}
      <div className="flex flex-row bg-white rounded-lg shadow-lg w-full max-w-4xl relative z-10 overflow-hidden">
        {/* Left side: Form */}
        <div className="w-1/2 p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Setup Organisation</h1>

          <AnimatePresence>
            {!isSubmitted && !isLoading && (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.input
                  type="text"
                  placeholder="Company Name"
                  value={company.name}
                  onChange={(e) => setCompany({ ...company, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.input
                  type="url"
                  placeholder="Company Website URL"
                  value={company.website}
                  onChange={(e) => setCompany({ ...company, website: e.target.value })}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.textarea
                  placeholder="Company Description"
                  value={company.description || metaDescription}
                  onChange={(e) => setCompany({ ...company, description: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
                <motion.button
                  type="submit"
                  className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Submit
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Right side: Professional Animation */}
        <div className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="absolute w-64 h-64 bg-white rounded-full opacity-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute w-48 h-48 bg-white rounded-full opacity-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
          <motion.div
            className="absolute w-32 h-32 bg-white rounded-full opacity-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          />
        </div>
      </div>

      {/* Webpage Scraping Status */}
      {isSubmitted && (
        <div className="mt-8 bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl relative z-10">
          <h2 className="text-xl font-semibold mb-4">Webpage Scraping Status</h2>
          <ul className="space-y-2">
            {webpages.map((page, index) => (
              <motion.li
                key={index}
                onClick={() => setSelectedPage(page)}
                className={`p-2 border rounded-lg cursor-pointer ${
                  page.status === "Scraped"
                    ? "bg-green-200"
                    : page.status === "Pending"
                    ? "bg-yellow-200"
                    : "bg-gray-200"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {page.url} - {page.status}
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4" />
              <p className="text-lg font-semibold">Loading...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Page Details */}
      {selectedPage && (
        <div className="bg-white p-6 mt-4 rounded-lg shadow-lg w-full max-w-md relative z-10">
          <h2 className="text-lg font-semibold">Scraped Data for: {selectedPage.url}</h2>
          <ul className="list-disc pl-6">
            {selectedPage.chunks.length > 0 ? (
              selectedPage.chunks.map((chunk, i) => <li key={i}>{chunk}</li>)
            ) : (
              <p className="text-gray-500">No data scraped yet.</p>
            )}
          </ul>
          <button
            onClick={() => setSelectedPage(null)}
            className="mt-3 cursor-pointer w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Close
          </button>
        </div>
      )}

      {/* Proceed to Next Step Button */}
      {isSubmitted && (
        <motion.button
          className="mt-4 bg-blue-500 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Proceed to Next Step
        </motion.button>
      )}
    </div>
  );
}

export default OrganisationSetup;