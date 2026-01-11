import { Link } from "react-router";
import './ButtonLink.css';

interface ButtonLinkProps {
  to: string,
  className?: string,
  children?: React.ReactNode,
}

export default function ButtonLink({
  to,
  className,
  children
}: ButtonLinkProps) {
  return (
    <Link className={`${className} button-link`} to={to} >
      {children}
    </Link>
  );
}