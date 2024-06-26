import React from "react";
import { getTimeInMilliseconds } from "../helpers/getTimeInMilliseconds";

const Result = ({ final, data }) => {
  const eliminatoryResults = data.filter((result) => !result.final);
  const finalResults = data.filter((result) => result.final);

  eliminatoryResults.sort((a, b) => {
    const timeA = getTimeInMilliseconds(a.time);
    const timeB = getTimeInMilliseconds(b.time);
    return timeA - timeB;
  });

  finalResults.sort((a, b) => {
    const timeA = getTimeInMilliseconds(a.time);
    const timeB = getTimeInMilliseconds(b.time);
    return timeA - timeB;
  });

  const renderResultsTable = (results, phase) => {
    const tandaGroups = {};

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
