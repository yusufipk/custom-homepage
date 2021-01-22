import "./card-style.scss";

const Card = (props) => {
  return (
    <ul className="card">
      {props.list.map((li) => (
        <li key={li} className="text">
          {li}
        </li>
      ))}
    </ul>
  );
};

export default Card;
