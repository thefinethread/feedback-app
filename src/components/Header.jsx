import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ text }) => {
  const headerStyles = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: 'coral',
  };

  return (
    <header style={headerStyles}>
      <Link to="/">
        <h2>{text}</h2>
      </Link>
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
