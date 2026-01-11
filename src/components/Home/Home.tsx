import ButtonLink from '../ButtonLink/ButtonLink';
import './Home.css';
import { Link } from "react-router"

export default function Home() {
  return (
    <div>
      <h1>Team Best Privacy Toolbox</h1>
      <p className="slide_up">
        This website provides resources for anyone looking to improve their personal security and privacy posture.
      </p>
      <div className="home-links">
        <ButtonLink to="KnowledgeHub">
          View our knowledge hub.
        </ButtonLink>
        <ButtonLink to="Downloads">
          View our privacy tool downloads.
        </ButtonLink>
      </div>
    </div>
  )
}