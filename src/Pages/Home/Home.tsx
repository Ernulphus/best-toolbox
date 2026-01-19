import ButtonLink from '../../components/ButtonLink/ButtonLink';
import './Home.css';
import { loremIpsum } from '../../constants';

export default function Home() {
  return (
    <div className="slide_up">
      <h1>Team Best Privacy Toolbox</h1>
      <p>
        This website provides resources for anyone looking to improve their personal security and privacy posture.
      </p>
      <p>
        {loremIpsum}
      </p>
      <div className="home-links">
        <ButtonLink to="KnowledgeHub">
          View our knowledge hub
        </ButtonLink>
        <ButtonLink to="Downloads">
          View our privacy tool downloads
        </ButtonLink>
      </div>
    </div>
  )
}