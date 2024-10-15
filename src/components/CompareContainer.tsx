import { FaPlus } from "react-icons/fa";
import { usersPokemonsType } from "../utils/Types";

const CompareContainer = ({
  pokemon = undefined,
  isEmpty = false,
}: {
  pokemon?: usersPokemonsType;
  isEmpty?: boolean;
}) => {
  return (
    <div className="compare-container">
      {isEmpty && (
        <div className="empty">
          <button>
            <FaPlus />
          </button>
          <h3>Add pokemon to Comparison</h3>
        </div>
      )}
    </div>
  );
};

export default CompareContainer;
