import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import emailjs from "@emailjs/browser";
import Astra from "../assets/Astra.png";
const SERVICE_ID = import.meta.env.VITE_SERVICE;
const TEMPLATE_ID = import.meta.env.VITE_TEMP;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: ""
  })

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "budget" && value && !/^\d+$/.test(value)) return;
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email || !validEmail.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.service) newErrors.service = "Service is required";
    if (!formData.budget) newErrors.budget = "Budget is required";
    if (!formData.idea.trim()) newErrors.idea = "Project idea is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("sending");
    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            ...formData,
            from_name: formData.name,
            reply_to: formData.email
          },
          PUBLIC_KEY
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setStatus("success");
      setFormData({ name: "", email: "", service: "", budget: "", idea: "" });
      setTimeout(() => setStatus(""), 4000);
    } catch (error) {
      setStatus("error");
      console.error("Error:", error);
      setTimeout(() => setStatus(""), 4000);
    }
  };
  return (
    <section id="contact" className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 flex flex-col md:flex-row items-center gap-10">

      <ParticlesBackground />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        <motion.div className="w-full md:w-1/2 flex justify-center" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <motion.img
            src={Astra}
            alt="astranautimg"
            className="w-72 md:w-[32rem] max-w-full rounded-2xl shadow-lg object-contain select-none pointer-events-none"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.div className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
         initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]">
              Let's Work Together
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="text-white mb-2" htmlFor="name">Your Name<span className="text-red-500">*</span></label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#1cd8d2]" placeholder="Your Name" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="flex flex-col">
                <label className="text-white mb-2" htmlFor="email">Your Email<span className="text-red-500">*</span></label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#1cd8d2]" placeholder="Your Email" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="flex flex-col">
                <label className="text-white mb-2" htmlFor="service">Your Service<span className="text-red-500">*</span></label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#1cd8d2]">
                  <option value="" disabled className="text-gray-400 bg-gray-900">Something in mind?</option>
                  <option value="web" className="text-white bg-gray-900">Web Development</option>
                  <option value="app" className="text-white bg-gray-900">App Development</option>
                  <option value="other" className="text-white bg-gray-900">Other</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>

              {formData.service && formData.service !== "other" && (
                <div className="flex flex-col">
                  <label className="text-white mb-2" htmlFor="budget">Your Budget<span className="text-red-500">*</span></label>
                  <input 
                    type="text"
                    id="budget"
                    name="budget"
                    placeholder="Your Budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#1cd8d2]"
                  />
                  {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                </div>
              )}

              <div className="flex flex-col">
                <label className="text-white mb-2" htmlFor="idea">Project Idea<span className="text-red-500">*</span></label>
                <textarea
                  id="idea"
                  name="idea"
                  rows="4"
                  placeholder="Tell me about your project"
                  value={formData.idea}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#1cd8d2] resize-none"
                />
                {errors.idea && <p className="text-red-500 text-sm mt-1">{errors.idea}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full mt-2 py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <div className={`p-3 rounded-lg text-center text-sm font-medium ${
                  status === "sending" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" :
                  status === "success" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" :
                  "bg-red-500/20 text-red-300 border border-red-500/30"
                }`}>
                  {status === "sending" ? "Sending your message..." :
                   status === "success" ? "Message sent successfully! ✅" :
                   "Something went wrong! ❌ Please try again or reach out via LinkedIn/GitHub."}
                </div>
              )}
            </form>
        </motion.div>
      </div>

    </section>
  );
}
