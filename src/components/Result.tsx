import React from "react";

const Result = ({ final, data }) => {
  // Función para convertir el tiempo de formato 'mm:ss:msms' a milisegundos
  const convertTimeToMilliseconds = (time) => {
    const [minutes, seconds, milliseconds] = time.split(":");
    return parseInt(minutes) * 60 * 1000 + parseInt(seconds) * 1000 + parseInt(milliseconds);
  };

  // Filtrar los resultados por fase
  const eliminatoryResults = data.filter((result) => !result.final);
  const finalResults = data.filter((result) => result.final);

  // Ordenar los resultados por tiempo dentro de cada fase
  eliminatoryResults.sort((a, b) => {
    const timeA = convertTimeToMilliseconds(a.time);
    const timeB = convertTimeToMilliseconds(b.time);
    return timeA - timeB;
  });
  finalResults.sort((a, b) => {
    const timeA = convertTimeToMilliseconds(a.time);
    const timeB = convertTimeToMilliseconds(b.time);
    return timeA - timeB;
  });

  // Función para renderizar una tabla de resultados
  const renderResultsTable = (results, phase) => {
    const tandaGroups = {};

    // Agrupar los resultados por número de tanda
    results.forEach((result) => {
      const tanda = result.group;
      if (!tandaGroups[tanda]) {
        tandaGroups[tanda] = [];
      }
      tandaGroups[tanda].push(result);
    });

    return (
      <div key={phase}>
        {Object.keys(tandaGroups).map((tanda, index) => (
          <div key={index}>
            <table>
              <caption>Tanda {tanda}</caption>
              <thead>
                <tr>
                  <th>Posicion</th>
                  <th>Equipo</th>
                  <th>Tiempo</th>
                </tr>
              </thead>
              <tbody>
                {tandaGroups[tanda].map((result, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{result.team_id}</td>
                    <td>{result.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {renderResultsTable(eliminatoryResults, "Eliminatoria")}
      {renderResultsTable(finalResults, "Final")}
    </div>
  );
};

export default Result;
