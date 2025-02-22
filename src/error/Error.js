import HeaderError from "../headerfooter/HeaderLog";
import "../error/Error.scss";
import Error from "../error/NotFound";

const NotFound = () => {
  return (
    <div>
      <HeaderError />

      <Error/>
    </div>
  );
};

export default NotFound;
