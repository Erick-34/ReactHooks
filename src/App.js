import React, { useState, useEffect } from "react";

function App() {
  const [repositores, setRepositoris] = useState([]);


  useEffect(async () => {
    const response = await fetch("https://api.github.com/users/Erick-34/repos")
    const data = await response.json()

    setRepositoris(data);
  }, []);

  useEffect(() => {
     const filtered = repositores.filter(repo => repo.favorite)
     
     document.title = `Você têm ${filtered.length} favoritos`
  }, [repositores])

  function handleFavorite(id) {
      const newRepositories = repositores.map(repo => {
         return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
      });

      setRepositoris(newRepositories)
  }
  return (
    <>
      <ul>
        {repositores.map(repo => (
          <li key={repo.id}>
             {repo.name}
             {repo.favorite && <span>(Favorite)</span>}
             <button onClick={() => handleFavorite(repo.id)}>Favorite</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
