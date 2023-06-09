import React from 'react';
import { Ts } from './utils/useThumbNav';
const i = [
  'https://media.istockphoto.com/id/1206044821/vector/preview-sign-preview-round-ribbon-sticker-preview-tag.jpg?s=170667a&w=0&k=20&c=g3-oFlMvlfeUMDCdAueNCDcKlQQucnD-xOSEY58ksdM=',
  'https://hype4.academy/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F117250%2F1200x630%2Fdecb8358e2%2Fhero-1.png&w=375&q=75',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQIL9HvrYslQfiPG-RX6BQuSAvcWMBlMZmE5dtv1_06QRUF7DNoj63Xeg1FBWGJysROg&usqp=CAU',
];
const ThumbSlider = React.forwardRef(
  (
    {
      main = 'col-12 bg-dark',
      thumb = 'col-12 d-flex',
      dim = {
        main: { height: '400px', width: '100%', objectFit: 'content' },
        thumb: { height: '25%', width: '25%' },
      },
      imgList = i,
    },
    ref
  ) => {
    const imgRef = React.useRef();
    const [p, setP] = React.useState(0);
    const [v, setV] = React.useState(0);
    const utilFunction = {
      next: () => setV((p) => (imgList.length > +p + 1 ? +p + 1 : p)),
      prev: () => setV((p) => (+p - 1 > -1 ? +p - 1 : p)),
    };
    ref.current = utilFunction;
    React.useEffect(() => {
      imgRef.current.style.transform = 'translateX(-4500px)';
      imgRef.current.style.opacity = '0';
      const de = setTimeout(() => {
        setP(v);
        imgRef.current.style.transform = 'translateX(4500px)';
      }, 150);
      return () => clearTimeout(de);
    }, [v]);
    React.useEffect(() => {
      setTimeout(() => {
        imgRef.current.style.transform = 'translateX(0px)';
        imgRef.current.style.opacity = '1';
      }, 300);
    }, [p]);
    return (
      <>
        <div className={'row m-0'}>
          <div className={`${main} overflow-hidden`} style={{}}>
            <img
              src={imgList[p]}
              style={{
                ...dim.main,
                transition: 'transform 0.5s, opacity 0.1s',
              }}
              ref={imgRef}
            />
          </div>
          <div className={thumb}>
            {imgList.map((i, iIndex) => (
              <img
                src={i}
                onClick={() => setP(iIndex)}
                width={dim.thumb.width}
                onMouseEnter={() => setV(iIndex)}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
);
export { Ts as useThumbNav };
export default ThumbSlider;
