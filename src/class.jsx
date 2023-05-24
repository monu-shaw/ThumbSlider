import React from 'react';
import ThumbSlider from './App';

export default function Main() {
  const r = React.useRef(null);
  console.log(r);
  return (
    <>
      <ThumbSlider ref={r} />
      <button onClick={() => console.log(r)}>c</button>
    </>
  );
}
