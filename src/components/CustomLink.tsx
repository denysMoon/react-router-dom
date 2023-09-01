import { Link, useMatch } from "react-router-dom";

interface ICustomLink {
  children: string;
  to: string;
}

export const CustomLink: React.FC<ICustomLink> = ({
  children,
  to,
  ...props
}) => {
  const match = useMatch(to);

  return (
    <Link className={`links ${match ? "active" : ""}`} to={to} {...props}>
      {children}
    </Link>
  );
};
