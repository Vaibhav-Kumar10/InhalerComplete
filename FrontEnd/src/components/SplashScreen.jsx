import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const userId = localStorage.getItem("user_id");
      if (userId) {
        navigate("/dashboard"); // If user exists, go to dashboard
      } else {
        navigate("/signup"); // Otherwise, go to signup
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg"
      >
        <img src="../assets/image1.png" alt="HridayaVayu" className="w-40 mb-2" />
        <h1 className="text-2xl font-bold">HridayaVayu</h1>
        <p className="text-gray-600">WHERE HEART MEETS BREATH.</p>
      </motion.div>
    </div>
  );
}
