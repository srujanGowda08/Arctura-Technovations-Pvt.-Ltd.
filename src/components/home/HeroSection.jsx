import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../common/Button';

function HeroSection({ title, subtitle, ctaText, ctaLink }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        {title}
        <span className="text-accent"> Technology</span>
      </h1>
      <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
      <Link to={ctaLink}>
        <Button>{ctaText}</Button>
      </Link>
    </motion.div>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
};

export default HeroSection;