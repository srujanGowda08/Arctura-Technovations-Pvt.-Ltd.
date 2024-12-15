import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Button from '../common/Button';

function ProductCard({ name, description, features, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-primary p-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold mb-3">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature) => (
          <li key={feature} className="text-gray-400 flex items-center">
            <span className="text-accent mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button variant="primary">Learn More</Button>
    </motion.div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductCard;