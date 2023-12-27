import "./HakeLanding.css";
import LaundryView from "../../Components/HakeComponents/Views/LaundryView/LaundryView";
import ChoreView from "../../Components/HakeComponents/Views/ChoreView/ChoreView";
import { Apartment, HakePerson, useHake } from "../../Contexts/HakeContext";
import ContactView from "../../Components/HakeComponents/Views/ContactView/ContactView";

import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useMemo } from "react";
import { db } from "../../firebase-config";
import HomeView from "../../Components/HakeComponents/Views/HomeView/HomeView";
import HakeHeader from "../../Components/HakeComponents/HakeHeader/HakeHeader";

const views = {
  HOME: HomeView,
  LAUNDRY: LaundryView,
  CHORE: ChoreView,
  CONTACT: ContactView,
};

const HakeLanding = () => {
  const { view, setApartments, currentChoreIsMowing, setMowingIndex } =
    useHake();
  const CurrentView = useMemo(() => views[view], [view]);

  const usersCollectionRef = collection(db, "hake");
  const mowingCollectionRef = collection(db, "hake-info");

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getDocs(usersCollectionRef);

      setApartments(
        userData.docs.map((a) => {
          const apartment: Apartment = {
            id: a.id,
            people: a.data().people as HakePerson[],
          };
          return apartment;
        })
      );
      if (currentChoreIsMowing) {
        const mowingData = await getDocs(mowingCollectionRef);
        setMowingIndex(mowingData.docs[0].data().index);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HakeHeader />
      <CurrentView />
    </>
  );
};

export default HakeLanding;
