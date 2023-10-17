import PropTypes from 'prop-types';

const Header = ({ text }) => {
  const headerStyles = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: 'coral',
  };

  return (
    <header style={headerStyles}>
      <h2>{text}</h2>
    </header>
  );
};

Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
