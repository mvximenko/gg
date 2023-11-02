import { useState } from 'react';

const useImageOnLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageOnLoad = () => {
    setIsLoaded(true);
  };

  const css = {
    fade: {
      opacity: isLoaded ? 1 : 0,
      transition: 'opacity 300ms ease-in 0ms',
    },
  };

  return { handleImageOnLoad, css };
};

export default useImageOnLoad;
