import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <div className="p-2 flex gap-2 mb-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to='/profile' className="[&.active]:font-bold">
        Profile
      </Link>
    </div>
  );
}
