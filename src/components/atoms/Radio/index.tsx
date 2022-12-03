import clsx from "clsx";
import { OrderByDirection } from "firebase/firestore";
import "./index.scss";

type Props = {
  selected: string;
  onRadioChange: (value: string) => void;
  item: {
    label: string;
    value: string | number | OrderByDirection;
    field: string;
  };
  onSortChange: (
    field: string,
    value: string | number | OrderByDirection
  ) => void;
};

const Radio: React.FC<Props> = ({
  selected,
  onRadioChange,
  item,
  onSortChange,
}) => {
  const handleRadio = () => {
    onRadioChange(item.label);
    onSortChange(item.field, item.value);
  };

  return (
    <div className="radio-container" onClick={handleRadio}>
      <div
        className={`radio-outer-circle ${
          item.label !== selected && "unselected"
        }`}
      >
        <div
          className={`radio-inner-circle ${
            item.label !== selected && "unselected-circle"
          }`}
        />
      </div>
      <div className="radio-label">{item.label}</div>
    </div>
  );
};

export default Radio;
