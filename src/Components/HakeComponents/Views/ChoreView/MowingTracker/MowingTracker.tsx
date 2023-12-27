import { doc, setDoc } from "@firebase/firestore";
import { useCallback } from "react";
import { HakePerson, useHake } from "../../../../../Contexts/HakeContext";
import { db } from "../../../../../firebase-config";
import "./MowingTracker.css";

const addS = (input: string) => {
  return input.charAt(input.length - 1).toLowerCase() === "s"
    ? input
    : input + "s";
};

const getMowingString = (people: HakePerson[]) => {
  if (!people.length) return "den tomma lägenhetens 😬";
  return people.map((p) => p.firstName).join(" och ");
};

const MowingTracker = () => {
  const { mowingIndex, setMowingIndex, apartments } = useHake();

  const write = useCallback(() => {
    console.log(mowingIndex);
    if (mowingIndex === null) return;
    setMowingIndex(mowingIndex + 1);
    const x = async () => {
      await setDoc(doc(db, "hake-info", "mowing"), {
        index: mowingIndex + 1,
      });
    };

    x();
  }, [mowingIndex, setMowingIndex]);

  if (mowingIndex === null) return <div>Loading...</div>;

  const mowingString = addS(
    getMowingString(apartments[mowingIndex % 6].people)
  );

  const buttonPronoun =
    apartments[mowingIndex % 6].people.length === 1 ? "Jag" : "Vi";

  return (
    <>
      <div className="mowing-tracker">
        <h2>Det är...</h2>
        <h1>{mowingString}</h1>
        <h2>tur att klippa gräset</h2>
        <button onClick={write}>{`${buttonPronoun} har gjort det nu!`}</button>
      </div>
    </>
  );
};

export default MowingTracker;
