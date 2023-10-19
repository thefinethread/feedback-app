import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

const AboutPage = () => {
  return (
    <Card>
      <div className="about flex">
        <h2>About This Project</h2>
        <p>This is a react app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <Link to="/">Back To Home</Link>
      </div>
    </Card>
  );
};

export default AboutPage;
