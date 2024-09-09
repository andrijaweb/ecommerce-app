import { Link } from "react-router-dom";

type LogoProps = {
  isDark?: boolean;
};

const Logo = ({ isDark = false }: LogoProps) => {
  const src = isDark ? "/logo-dark.svg" : "/logo-light.svg";

  return (
    <Link className="inline-block my-auto h-9" to="/">
      <img src={src} alt="logo" className="w-full h-full" />
    </Link>
  );
};

export default Logo;
