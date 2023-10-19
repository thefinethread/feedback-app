import { Link } from 'react-router-dom';
import { RiQuestionLine } from 'react-icons/ri';

const AboutIconLink = () => {
  return (
    <div className="about-page-link">
      <Link to="/about">
        <RiQuestionLine />
      </Link>
    </div>
  );
};

export default AboutIconLink;
