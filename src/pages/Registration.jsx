
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import PageBackground from "../components/PageBackGround"

// function Registration() {
//   const { register, handleSubmit } = useForm();
//   const [verificationCode, setVerificationCode] = useState(null);
//   const [userCode, setUserCode] = useState('');
//   const [isVerified, setIsVerified] = useState(false);
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   const generateVerificationCode = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
//   };

//   const onSubmit = (data) => {
//     const code = generateVerificationCode();
//     setVerificationCode(code);
//     setEmail(data.email);
//     alert(`Your verification code is: ${code}`); // Simulating email sending
//   };

//   const handleVerify = () => {
//     if (userCode === verificationCode) {
//       setIsVerified(true);
//       alert('Email verified successfully!');
//       navigate('/home'); // Navigate to Home Page after verification
//     } else {
//       alert('Incorrect code. Try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-50 p-4">
//       <PageBackground/>
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md"
//       >
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h1>

//         {!verificationCode ? (
//           <motion.form
//             key="form"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 50 }}
//             onSubmit={handleSubmit(onSubmit)}
//             className="space-y-4"
//           >
//             <input
//               {...register('name')}
//               placeholder="Name"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//             <input
//               {...register('email')}
//               placeholder="Email"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//             <input
//               {...register('password')}
//               placeholder="Password"
//               type="password"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//             >
//               Get Verification Code
//             </motion.button>
//           </motion.form>
//         ) : !isVerified ? (
//           <motion.div
//             key="verification"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 50 }}
//             className="space-y-4"
//           >
//             <p className="text-center text-gray-700">Enter the verification code sent to {email}</p>
//             <input
//               type="text"
//               placeholder="Verification Code"
//               value={userCode}
//               onChange={(e) => setUserCode(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleVerify}
//               className="w-full cursor-pointer bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               Verify Code
//             </motion.button>
//           </motion.div>
//         ) : (
//           <motion.div
//             key="success"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <p className="text-green-600 font-bold text-xl">Email Verified Successfully!</p>
//           </motion.div>
//         )}

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full mt-4 cursor-pointer bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
//         >
//           Continue with Google
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// }

// export default Registration;



// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import PageBackground from '../components/PageBackGround';

// function Registration() {
//   const { register, handleSubmit } = useForm();
//   const [verificationCode, setVerificationCode] = useState(null);
//   const [userCode, setUserCode] = useState('');
//   const [isVerified, setIsVerified] = useState(false);
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   const generateVerificationCode = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
//   };

//   const onSubmit = (data) => {
//     const code = generateVerificationCode();
//     setVerificationCode(code);
//     setEmail(data.email);
//     alert(`Your verification code is: ${code}`); // Simulating email sending
//   };

//   const handleVerify = () => {
//     if (userCode === verificationCode) {
//       setIsVerified(true);
//       alert('Email verified successfully!');
//       navigate('/home'); // Navigate to Home Page after verification
//     } else {
//       alert('Incorrect code. Try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-50 p-4">
//       <PageBackground />
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md"
//         style={{ position: 'relative', zIndex: 1 }} // Add this line
//       >
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h1>

//         {!verificationCode ? (
//           <motion.form
//             key="form"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 50 }}
//             onSubmit={handleSubmit(onSubmit)}
//             className="space-y-4"
//           >
//             <input
//               {...register('name')}
//               placeholder="Name"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//             <input
//               {...register('email')}
//               placeholder="Email"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//             <input
//               {...register('password')}
//               placeholder="Password"
//               type="password"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//             >
//               Get Verification Code
//             </motion.button>
//           </motion.form>
//         ) : !isVerified ? (
//           <motion.div
//             key="verification"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 50 }}
//             className="space-y-4"
//           >
//             <p className="text-center text-gray-700">Enter the verification code sent to {email}</p>
//             <input
//               type="text"
//               placeholder="Verification Code"
//               value={userCode}
//               onChange={(e) => setUserCode(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//             />
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleVerify}
//               className="w-full cursor-pointer bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
//             >
//               Verify Code
//             </motion.button>
//           </motion.div>
//         ) : (
//           <motion.div
//             key="success"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <p className="text-green-600 font-bold text-xl">Email Verified Successfully!</p>
//           </motion.div>
//         )}

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full mt-4 cursor-pointer bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
//         >
//           Continue with Google
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// }

// export default Registration;



import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageBackground from '../components/PageBackGround';

function Registration() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const [verificationCode, setVerificationCode] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
  };

  const onSubmit = (data) => {
    const code = generateVerificationCode();
    setVerificationCode(code);
    setEmail(data.email);
    alert(`Your verification code is: ${code}`); // Simulating email sending
  };

  const handleVerify = () => {
    if (userCode === verificationCode) {
      setIsVerified(true);
      alert('Email verified successfully!');
      navigate('/home'); // Navigate to Home Page after verification
    } else {
      alert('Incorrect code. Try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-50 p-4">
      <PageBackground />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h1>

        {!verificationCode ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <input
              {...register('name')}
              placeholder="Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <input
              {...register('email')}
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <input
              {...register('password')}
              placeholder="Password"
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Get Verification Code
            </motion.button>
          </motion.form>
        ) : !isVerified ? (
          <motion.div
            key="verification"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="space-y-4"
          >
            <p className="text-center text-gray-700">Enter the verification code sent to  {email}</p>
            <input
              type="text"
              placeholder="Verification Code"
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleVerify}
              className="w-full cursor-pointer bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Verify Code
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-green-600 font-bold text-xl">Email Verified Successfully!</p>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-4 cursor-pointer bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Continue with Google
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Registration;