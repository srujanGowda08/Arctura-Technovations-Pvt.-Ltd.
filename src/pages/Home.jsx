import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CodeIcon,
  LightbulbIcon,
  ServerIcon,
  ArrowRightIcon,
} from "lucide-react";
import heroImage from "../assets/hero.jpg";
import Button from "../components/common/Button";
import Section from "../components/common/Section";
import FeatureCard from "../components/home/FeatureCard";
import Testimonials from "./Testimonials";

const features = [
  {
    title: "Expert Consulting",
    description: "Strategic guidance from industry veterans",
    icon: ServerIcon,
  },
  {
    title: "Innovative Solutions",
    description: "Cutting-edge technology implementation",
    icon: LightbulbIcon,
  },
  {
    title: "Dedicated Support",
    description: "24/7 professional assistance",
    icon: CodeIcon,
  },
];

function Home() {
  return (
    <>
      {/* Enhanced Hero Section with Responsive Image */}
      <Section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Gradient Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 z-0"></div>

        {/* Dynamic Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="grid grid-cols-20 h-full">
            {[...Array(400)].map((_, index) => (
              <div
                key={index}
                className="border border-gray-200/10 transition-all duration-1000 hover:bg-accent/5"
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforming Ideas into
              <span className="text-accent"> Digital Realities</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We bridge imagination and innovation, turning visionary concepts
              into groundbreaking technological solutions that reshape
              industries.
            </p>
            <div className="flex items-center space-x-4">
              <Link to="/products">
                <Button variant="gradient" className="flex items-center group">
                  Our Products
                  <ArrowRightIcon
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>
              </Link>
              <Link to="/services" className="text-accent hover:underline">
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Responsive Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <div className="w-full max-w-[600px] md:max-w-[800px] aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={heroImage}
                alt="Technology Innovation Concept"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="bg-secondary">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
              >
                <FeatureCard {...feature} index={index} Icon={feature.icon} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CTA Section with Unique Design */}
      <Section className="bg-secondary relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Amplify Your Digital Potential?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team of experts is ready to transform your boldest
              technological dreams into tangible, innovative solutions.
            </p>
            <Link to="/contact">
              <Button variant="gradient" className="group ">
                Start Your Journey
                <ArrowRightIcon
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
      <Testimonials />
    </>
  );
}

export default Home;
