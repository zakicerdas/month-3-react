import { useState, useCallback } from "react";

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, toggleValue];
}