import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../common/Button';

function CTASection({ title, subtitle, ctaText, ctaLink }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
      <p className="text-xl text-white/90 mb-8">{subtitle}</p>
      <Link to={ctaLink}>
        <Button variant="secondary">{ctaText}</Button>
      </Link>
    </div>
  );
}

CTASection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
};

export default CTASection;