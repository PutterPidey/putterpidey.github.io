import { HakePerson } from "../../../../../Contexts/HakeContext";
import Modal from "../../../../Modal/Modal";
import "./HakeContactModal.css";

type Props = { person: HakePerson };

const HakeContactModal = ({ person }: Props) => {
  return (
    <Modal>
      <div className="hake-contact-modal">
        <form>
          <h2>Redigera person</h2>
          <h3>Förnamn</h3>
          <input placeholder={person.firstName}></input>
          <h3>Efternamn</h3>
          <input placeholder={person.lastName}></input>
          <h3>Telefon</h3>
          <input placeholder={person.phone}></input>
          <h3>E-post</h3>
          <input placeholder={person.email}></input>
          <div className="button-container">
            <button>Confirm</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default HakeContactModal;
