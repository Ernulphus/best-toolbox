import './Card.css';

interface cardProps {
    children?: React.ReactNode,
}

export default function Card({children} : cardProps) {
  return (
    <div className="card">
      {children}
    </div>
  )
}