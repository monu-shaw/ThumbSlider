import React from 'react';
import ThumbSlider, { useThumbNav } from './thumbSlider';

export default function Main() {
  const [thumb, linker] = useThumbNav();
  return (
    <>
      <div className="col-12 col-lg-6 mx-auto">
        <ThumbSlider ref={linker} />
      </div>
      <button onClick={() => thumb.next()}>c</button>
      <button onClick={() => thumb.prev()}>d</button>
    </>
  );
}
