import { HakePerson } from "../../../../../Contexts/HakeContext";
import Edit from "../../../../Icons/Edit";
import Phone from "../../../../Icons/Phone";
import Email from "../../../../Icons/Phone copy";
import Plus from "../../../../Icons/Plus";
import "./Apartment.css";

type Props = {
  id: string;
  people: HakePerson[];
  onEditClick: (person: HakePerson) => void;
};

const AddPersonButton = () => {
  return (
    <div onClick={() => alert("Blah")} className="add-person-button">
      <Plus />
    </div>
  );
};

const Apartment = ({ id, people, onEditClick }: Props) => {
  console.log("PEOPLE POEPLE", people);

  return (
    <div className="hake-apartment">
      <h4>{id}</h4>
      <div style={{ display: "flex", gap: "8px" }}>
        {people.map((person) => (
          <div className="hake-person">
            <div
              className="remove-person-button"
              onClick={() => onEditClick(person)}
            >
              <Edit />
            </div>
            <p>{`${person.firstName} ${person.lastName}`}</p>
            <div style={{ display: "flex" }}>
              <Phone />
              <p>{`${person.phone}`}</p>
            </div>
            <div style={{ display: "flex" }}>
              <Email />
              <p>{`${person.email}`}</p>
            </div>
          </div>
        ))}
        <AddPersonButton />
      </div>
    </div>
  );
};

export default Apartment;
