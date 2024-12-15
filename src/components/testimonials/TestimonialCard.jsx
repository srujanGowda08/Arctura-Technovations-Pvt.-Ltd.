import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

function TestimonialCard({ name, position, content, rating, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-primary p-6 rounded-lg"
    >
      <div className="flex text-accent mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="text-gray-300 mb-6">{content}</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-gray-400">{position}</p>
      </div>
    </motion.div>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default TestimonialCard;