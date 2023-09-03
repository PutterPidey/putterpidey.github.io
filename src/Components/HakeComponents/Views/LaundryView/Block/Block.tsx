import { useCallback, useEffect, useRef, useState } from "react";
import "./Block.css";
type Coordinates = { x: number; y: number };

const Block = () => {
  const [anchor, setAnchor] = useState<Coordinates | null>(null);
  const [lastPos, setLastPos] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {}, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      console.log("aSASD");
      if (anchor && ref.current) {
        console.log("Last Pos", lastPos);
        const translateString = `translate(${e.clientX - anchor.x}px, ${
          e.clientY - anchor.y
        }px)`;

        setLastPos(e.clientX);
        console.log(lastPos);
        const rotateString = "rotate(2deg)";
        ref.current.style.transform = `${translateString} ${rotateString}`;
      }
    },
    [anchor, lastPos]
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
