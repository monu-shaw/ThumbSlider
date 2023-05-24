import React from 'react';
import ThumbSlider from './App';

export default function Main() {
  const r = React.useRef(null);
  console.log(r);
  return (
    <>
      <ThumbSlider ref={r} />
      <button onClick={() => r.current.next()}>c</button>
    </>
  );
}
