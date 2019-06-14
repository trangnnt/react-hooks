import { useEffect, useRef } from 'react';

export default function useInterval(
  callback: () => void,
  delayMs: number | null,
) {
  // Source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  const savedCallback = useRef<typeof callback>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delayMs == null) return () => {};

    function handleTick() {
      if (savedCallback.current) savedCallback.current();
    }

    const id = setInterval(handleTick, delayMs);
    return () => {
      clearInterval(id);
    };
  }, [delayMs]);
}