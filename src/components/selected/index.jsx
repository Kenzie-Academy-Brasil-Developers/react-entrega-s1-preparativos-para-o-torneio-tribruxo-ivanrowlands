import CardDescription from "../description";
import "./style.css";

function CardCharacters({ selectedWizards }) {
  return (
    <div className="CardCharacteres-container">
      {selectedWizards.map((person, index) => (
        <div key={index}>
          <CardDescription person={person} />
        </div>
      ))}
    </div>
  );
}

export default CardCharacters;
