import React, { useEffect, useState } from "react";
import { Container, TableCss, TableHeader, TableRow,TableCell } from "./Style";


type Character = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [];
  url: string;
  created: string;
};

const App = () => {
  const [requestApi, setRequestApi] = useState<Array<Character>>([])
  const [pesquisa, setPesquisa] = useState<string>("")

  useEffect(() => {
    const fetchApiRicks = async () => {
      const result = await (
        await fetch(`https://rickandmortyapi.com/api/location?type=${pesquisa}`)
      ).json();
      setRequestApi(result.results);
    }
    fetchApiRicks();
  }, [pesquisa])

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPesquisa(event.target.value);
  }

  return (
    <Container>
      <div>
      <label htmlFor="filtro">Filtrar Planetas</label>
      <select name="filtro" value={pesquisa} onChange={handleSelectChange}>
        <option value=''>All</option>
        <option value="planet">Planet</option>
        <option value="cluster">Cluster</option>
        <option value="Space station">Space Station</option>
        <option value="microverse">Microverse</option>
        <option value="TV">TV</option>
        <option value="resort">Resort</option>
        <option value="Fantasy town">Fantasy town</option>
      </select>
      </div>

      <TableCss>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Tipo</TableHeader>
            <TableHeader>Dimensão</TableHeader>
            <TableHeader>Nº Habitantes</TableHeader>
          </tr>
        </thead>
        <tbody>
          {requestApi.map(({ id, name, type, dimension, residents }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{type}</TableCell>
              <TableCell>{dimension}</TableCell>
              <TableCell>{residents.length}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableCss>
      </Container>
  );
};

export default App;
