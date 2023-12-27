import { useState } from "react";
import { HakePerson, useHake } from "../../../../Contexts/HakeContext";
import Apartment from "./Apartment/Apartment";
import "./ContactView.css";
import HakeContactModal from "./HakeContactModal/HakeContactModal";

const ContactView = () => {
  const { apartments } = useHake();
  const [personToEdit, setPersonToEdit] = useState<HakePerson | null>(null);

  const onEditClick = (person: HakePerson) => {
    setPersonToEdit(person);
  };

  return (
    <>
      <div>
        <div className="hake-apartments">
          {apartments.map((a) => (
            <Apartment
              key={a.id}
              id={a.id}
              people={a.people}
              onEditClick={onEditClick}
            />
          ))}
        </div>
      </div>
      {personToEdit && <HakeContactModal person={personToEdit} />}
    </>
  );
};

export default ContactView;
