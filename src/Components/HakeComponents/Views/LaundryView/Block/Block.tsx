import { useCallback, useEffect, useRef, useState } from "react";
import "./Block.css";
type Coordinates = { x: number; y: number };

const Block = () => {
  const [anchor, setAnchor] = useState<Coordinates | null>(null);
  //const [lastPos, setLastPos] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(ref.current?.style.transform);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (anchor && ref.current) {
        const translateString = `translate(${e.clientX - anchor.x}px, ${
          e.clientY - anchor.y
        }px)`;

        const rotateString = `rotate(${e.movementX}deg)`;
        ref.current.style.transform = `${translateString} ${rotateString}`;
      }
    },
    [anchor]
  );
  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      console.log("GRABBED");
      setAnchor({ x: e.clientX, y: e.clientY });
    },
    []
  );
  const onMouseUp = useCallback(() => {
    if (anchor && ref.current) {
      ref.current.style.transform = "";
    }
    console.log("DROPPED");
    setAnchor(null);
  }, [anchor]);

  return (
    <div
      className="block"
      ref={ref}
      onMouseDown={(e) => onMouseDown(e)}
      onMouseUp={() => onMouseUp()}
      onMouseOut={() => onMouseUp()}
      onMouseMove={(e) => onMouseMove(e)}
    ></div>
  );
};

export default Block;
