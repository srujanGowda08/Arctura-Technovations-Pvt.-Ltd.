import Section from "../components/common/Section";
import { motion } from "framer-motion";
import aboutus from "../assets/aboutus.png";

function About() {
  return (
    <>
      <Section className="bg-gradient-to-b from-gray-800 to-gray-900 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            enim provident dolor. Aliquid officiis blanditiis ratione dolores
            libero, officia voluptatem dicta eveniet illo repellat laudantium.
            Sequi quibusdam deserunt saepe cum!
          </p>
        </motion.div>
      </Section>

      <Section className="bg-gradient-to-t from-gray-900 to-gray-800 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <img
            src={aboutus}
            alt="About Us"
            className="rounded-xl shadow-lg mx-auto mb-8 w-full max-w-md"
          />
          <p className="text-gray-400 text-lg leading-relaxed">
            At Arctura Technovations, we thrive on collaboration and innovation.
            Our commitment to excellence drives us to build solutions that
            inspire and transform the way businesses operate in a digital era.
          </p>
        </motion.div>
      </Section>

      <Section className="bg-gray-800 py-12">
        <div className="container mx-auto grid gap-12 md:grid-cols-2 items-start">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our mission is to empower researchers, academics, and innovators
              by providing comprehensive support to publish and share their
              knowledge effectively across the globe.
            </p>
            <p className="text-gray-400 text-lg mt-4">
              We believe in fostering creativity and enabling collaboration to
              tackle the challenges of tomorrow with innovative solutions.
            </p>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Vision
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              To become the leading global partner for innovators and ensure
              every groundbreaking idea receives recognition and protection.
            </p>
            <p className="text-gray-400 text-lg mt-4">
              We strive to create a future where innovation thrives, and every
              idea has the power to change the world for the better.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
}

export default About;
