import "./ProjectBox.css";

type Props = {
  side: "left" | "right";
  title: string;
  description: string;
  onClick: () => void;
};
const ProjectBox = ({ side, title, description, onClick }: Props) => {
  return (
    <div
      id="test"
      className={`project-box-wrapper`}
      style={{ alignItems: `${side === "left" ? "flex-start" : "flex-end"}` }}
    >
      <div className={`project-box project-box-${side}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a onClick={onClick}>LINK</a>
      </div>
    </div>
  );
};

export default ProjectBox;
