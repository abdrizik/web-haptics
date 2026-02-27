import styles from "./styles.module.scss";

import { useWebHaptics } from "web-haptics/react";
import { defaultPatterns } from "web-haptics";
import { useState } from "react";

export const Demo = () => {
  const { trigger } = useWebHaptics({ debug: true });
  const [intensity, setIntensity] = useState(0.5);

  return (
    <div className={styles.demo}>
      <div className={styles.buttons}>
        {Object.entries(defaultPatterns).map(([name, pattern]) => (
          <button
            key={name}
            onClick={() =>
              trigger(pattern, {
                intensity,
              })
            }
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.intensityControl}>
        <label htmlFor="intensity">
          Intensity: {Math.round(intensity * 100)}%
        </label>
        <input
          id="intensity"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={intensity}
          onChange={(e) => setIntensity(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};
