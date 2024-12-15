import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import { FaCode, FaCloud, FaMobile, FaDatabase, FaLock, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: 'Custom Software Development',
    description: 'Tailored software solutions to meet your specific business needs.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure and migration services.',
  },
  {
    icon: <FaMobile />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications.',
  },
  {
    icon: <FaDatabase />,
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with advanced analytics.',
  },
  {
    icon: <FaLock />,
    title: 'Cybersecurity',
    description: 'Protect your business with enterprise-grade security solutions.',
  },
  {
    icon: <FaChartLine />,
    title: 'Digital Transformation',
    description: 'Strategic consulting to modernize your business processes.',
  },
];

function Services() {
  return (
    <>
      <Section className="bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300">
            Comprehensive technology solutions to drive your business forward
          </p>
        </motion.div>
      </Section>

      <Section className="bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary p-6 rounded-lg"
            >
              <div className="text-accent text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}

export default Services;