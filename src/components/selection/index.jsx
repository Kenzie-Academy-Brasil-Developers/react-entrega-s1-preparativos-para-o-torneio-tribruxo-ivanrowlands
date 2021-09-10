import CardCharacters from "./../selected";
import { useState } from "react";
import "./style.css";

function ResultPage({ characters }) {
  const [selectedWizards, setSelectedWizards] = useState([]);

  const randomNumber = () => {
    return Math.floor(Math.random() * 11);
  };

  const choiceStudent = (characters, randomNumber) => {
    let students = [];

    while (students.length < 3) {
      let allStudents = [...characters];
      let student = allStudents[randomNumber()];
      let house = student.house;

      students.find((person) => person.house === house)
        ? (students = [...students])
        : (students = [...students, student]);
    }

    setSelectedWizards([...students]);
  };

  const addWizardsChampions = (randomNumber, characters) => {
    !characters === []
      ? console.log("esperar")
      : choiceStudent(characters, randomNumber);
  };

  const resetStudents = () => {
    setSelectedWizards([]);
  };

  return (
    <>
      <CardCharacters selectedWizards={selectedWizards} />
      <button
        className="btn-start"
        onClick={() => addWizardsChampions(randomNumber, characters)}
      >
        Selecionar campeões
      </button>
      <button className="btn-back" onClick={() => resetStudents()}>
        voltar
      </button>
    </>
  );
}

export default ResultPage;
