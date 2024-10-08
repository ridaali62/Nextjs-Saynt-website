import { useEffect } from 'react';

function UseOnClickOutside(
  ref: React.RefObject<HTMLElement>, 
  handler: (event: MouseEvent | TouchEvent) => void, 
  menuButtonRef?: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Ensure ref.current and menuButtonRef.current are defined
      if (
        !ref?.current || 
        ref.current.contains(event.target as Node) || 
        (menuButtonRef?.current && menuButtonRef.current.contains(event.target as Node))
      ) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, menuButtonRef]);
}

export default UseOnClickOutside;
