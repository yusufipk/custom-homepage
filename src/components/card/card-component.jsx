import "./card-style.scss";

const Card = (props) => {
  return (
    <ul className="card">
      <h3 className="Title">{props.title}</h3>
      {props.list.map((li) => (
        <li key={li} className="text">
          {li}
        </li>
      ))}
    </ul>
  );
};

export default Card;
