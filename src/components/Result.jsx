import React, { Fragment } from "react";

const Result = ({ final, data }) => {
    return (
        <Fragment>
            {final ? (
                <h1>Final</h1>
            ) : (
                <h1>Eliminatoria</h1>
            )}
            <ul>
            {data.map((result) => (
                <li>
                    <p>{result.team_id} / {result.time} / {result.distance}</p>
                </li>
            ))}
            </ul>
        </Fragment>
    );
}

export default Result;
