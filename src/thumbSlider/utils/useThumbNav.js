import React from 'react';

export const Ts = () => {
  const ref = React.useRef();
  const [val, setVal] = React.useState();
  React.useEffect(() => {
    setVal(ref.current);
  }, [ref]);
  return [val, ref];
};
