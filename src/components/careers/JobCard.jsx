import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Button from '../common/Button';

function JobCard({ title, department, location, type, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-primary p-6 rounded-lg"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="space-x-4 text-gray-400">
            <span>{department}</span>
            <span>•</span>
            <span>{location}</span>
            <span>•</span>
            <span>{type}</span>
          </div>
        </div>
        <Button className="mt-4 md:mt-0">Apply Now</Button>
      </div>
    </motion.div>
  );
}

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default JobCard;