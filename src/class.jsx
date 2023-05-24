import React from 'react';
import ThumbSlider, { useThumbNav } from './thumbSlider';

export default function Main() {
  const [thumb, linker] = useThumbNav();
  return (
    <>
      <ThumbSlider ref={linker} />
      <button onClick={() => thumb.next()}>c</button>
      <button onClick={() => thumb.prev()}>d</button>
    </>
  );
}
