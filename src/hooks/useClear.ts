import { useEffect } from 'preact/hooks';

const useClear = (onClear: () => void) => useEffect(() => onClear, []);

export default useClear;
