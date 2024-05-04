import React from "react";

const AllYearsResult = ({ leagues, distinctYears }) => {
    return (
        <div className="h-full">
            <div className="w-full px-20 mr-20 pt-10 flex flex-row-reverse">
                <select name="yearSelect">
                {
                    distinctYears.map((year) => (
                        <option value={year}>{year}</option>
                    ))
                }
                </select>
            </div>
        </div>   
    )
}

export default AllYearsResult;
