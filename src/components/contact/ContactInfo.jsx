import PropTypes from 'prop-types';

function ContactInfo({ title, children }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {children}
    </div>
  );
}

ContactInfo.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ContactInfo;