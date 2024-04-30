import { createContext, useEffect, useState } from "react";

export const ExercicioContext = createContext()

export const ExercicioContextProvider = ({ children }) => {

  const [Exercicios, setExercicios] = useState([])


  useEffect(() => {
    lerExercicios()
  }, [])

  async function lerExercicios() {
    try {
      const response = await fetch("http://localhost:3000/locais");
      const data = await response.json();
      await setExercicios(data);

    }
    catch (error) {
      console.error('Falha ao ler os locais de exercícios', error)
    }
  }


  function cadastrarExercicio(novoExercicio) {
    fetch("http://localhost:3000/locais", {
      method: "POST", // cadastrar
      body: JSON.stringify(novoExercicio),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        alert("Local de exercício cadastrado")
        lerExercicios()
      })
      .catch(() => alert("Erro ao cadastrar local de exercício"))
  }


  function deletarExercicio(id) {
    if (confirm("Deseja realmente deletar esse local?") == true) {

      fetch("http://localhost:3000/locais/" + id, {
        method: "DELETE", // deletar
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(() => {
          alert("Local de exercício deletado com sucesso")
          lerExercicios()
        })
        .catch(() => alert("Erro ao deletar local de exercício"))
    } else {
      return
    }



  }







  return (
    <ExercicioContext.Provider value={{ cadastrarExercicio, deletarExercicio, Exercicios }}>
      {children}
    </ExercicioContext.Provider>
  )


}