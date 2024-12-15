import PropTypes from 'prop-types';

function Section({ children, className = '', ...props }) {
  return (
    <section className={`section-padding ${className}`} {...props}>
      <div className="container-custom">{children}</div>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;