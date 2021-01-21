import "./card-style.scss";

const Card = (props) => {
  return (
    <div className="card">
      <ul className="list">
        {props.list.map((li) => (
          <li className="text">{li}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
