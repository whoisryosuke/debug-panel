import { DebugButton } from "@/store/DebugStore";
import sharedStyles from "../DebugInputShared.module.css";
import styles from "./DebugButtonInput.module.css";

type Props = DebugButton;

const DebugButtonInput = ({ id, data }: Props) => {
  return (
    <div className={sharedStyles.FormField}>
      <label htmlFor={id}>{id}</label>
      <button name={id} className={styles.Button} onClick={data.value}>
        {data.text}
      </button>
    </div>
  );
};

export default DebugButtonInput;
