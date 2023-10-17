import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {
  // conditional class
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

  // conditional styling
  // return (
  //   <div
  //     className="card"
  //     style={{
  //       backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
  //       color: reverse ? '#fff' : '#111',
  //     }}
  //   >
  //     {children}
  //   </div>
  // );
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
