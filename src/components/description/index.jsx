import "./style.css";

function CardDescription({ person }) {
  return (
    <section className="CardDescription-card">
      <h1 className="CardDescription-house">{person.house}</h1>
      <img
        className={person.house}
        src={person.image}
        alt={person.name}
        width="120px"
        height="150px"
      ></img>
      <h3 className="CardDescription-name">{person.name}</h3>
      <h4 clasName="CardDescription-actor">{person.actor}</h4>
    </section>
  );
}

export default CardDescription;
