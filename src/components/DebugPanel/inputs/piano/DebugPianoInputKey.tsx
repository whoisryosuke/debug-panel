import styles from "./DebugPianoInput.module.css";
import { PianoInput } from "@/store/DebugStore";
import { PIANO_KEYS } from "./constants";

type Props = {
  note: keyof PianoInput;
  state: PianoInput;
  handleChange: (inputKey: keyof PianoInput, pressed: boolean) => () => void;
};

const DebugPianoInputKey = ({ note, state, handleChange }: Props) => {
  const blackKey = `${note}#` as keyof PianoInput;
  const hasBlackKey = PIANO_KEYS.includes(blackKey);
  const selected = state[note];
  const handleOff = handleChange(note, false);
  return (
    <div className={styles.KeyContainer}>
      <button
        className={styles.WhiteKey}
        data-selected={selected}
        onMouseDown={handleChange(note, true)}
        onMouseLeave={handleOff}
        onMouseUp={handleOff}
      >
        {note.toUpperCase()}
      </button>

      {hasBlackKey && (
        <button
          className={styles.BlackKey}
          data-selected={state[blackKey]}
          onMouseDown={handleChange(blackKey, true)}
          onMouseLeave={handleChange(blackKey, false)}
          onMouseUp={handleChange(blackKey, false)}
        >
          {note.toUpperCase()}#
        </button>
      )}
    </div>
  );
};

export default DebugPianoInputKey;
