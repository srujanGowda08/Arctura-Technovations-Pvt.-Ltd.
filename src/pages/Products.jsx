import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const products = [
  {
    name: 'CloudManager Pro',
    description: 'Enterprise cloud management and optimization platform.',
    features: ['Resource monitoring', 'Cost optimization', 'Security compliance'],
  },
  {
    name: 'DataSense Analytics',
    description: 'Advanced data analytics and visualization tool.',
    features: ['Real-time analytics', 'Custom dashboards', 'AI-powered insights'],
  },
  {
    name: 'SecureGuard',
    description: 'Comprehensive cybersecurity solution.',
    features: ['Threat detection', 'Network monitoring', 'Incident response'],
  },
];

function Products() {
  return (
    <>
      <Section className="bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-300">
            Innovative solutions designed for modern businesses
          </p>
        </motion.div>
      </Section>

      <Section className="bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature) => (
                  <li key={feature} className="text-gray-400 flex items-center">
                    <span className="text-accent mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="primary">Learn More</Button>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}

export default Products;