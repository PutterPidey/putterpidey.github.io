import "./Modal.css";
type Props = { children: React.ReactNode };
const Modal = ({ children }: Props) => {
  return (
    <>
      <div className="modal-background">
        <div className="modal-foreground">{children}</div>
      </div>
    </>
  );
};

export default Modal;
