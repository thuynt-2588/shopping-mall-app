import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "../Icons";
import "./index.scss";

const Pagination = () => {
  return (
    <ul className="pagination product__pagination">
      <li className="pagination-item">
        <Link to="" className="pagination-item__link">
          <ChevronLeftIcon />
        </Link>
      </li>

      <li className="pagination-item active">
        <Link to="" className="pagination-item__link">
          1
        </Link>
      </li>

      <li className="pagination-item">
        <Link to="" className="pagination-item__link">
          2
        </Link>
      </li>

      <li className="pagination-item">
        <Link to="" className="pagination-item__link">
          3
        </Link>
      </li>

      <li className="pagination-item">
        <Link to="" className="pagination-item__link">
          ...
        </Link>
      </li>

      <li className="pagination-item">
        <Link to="" className="pagination-item__link">
          14
        </Link>
      </li>

      <li className="pagination-item">
        <Link to="" className="pagination-item__link">
          <ChevronRightIcon />
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
