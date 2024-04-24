import React, { Fragment } from "react";
import Result from "./Result"

export const Tabs = ({ tabs }) => {
  const [openTab, setOpenTab] = React.useState(1);
  
  return (
    <Fragment>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {tabs.map((tab, index) => (
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center" key={index}>
                <a
                  className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === index + 1
                    ? "text-white bg-600"
                    : "text-600 bg-white")
                  }
                  onClick={() => {
                    setOpenTab(index + 1);
                  }}
                  data-toggle="tab"
                  href={"#link" + (index + 1)}
                  role="tablist"
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
              {tabs.map((tab, index) => (
                <div
                    className={openTab === index + 1 ? "block" : "hidden"}
                    id={"link" + (index + 1)}
                    key={index}
                  >
                    <div>
                    {tab.content.semi.length !== 0 && (
                      <Result final={false} data={tab.content.semi} />
                    )}
                    </div>
                    <div>
                    {tab.content.final.length !== 0 && (
                      <Result final={true} data={tab.content.final} />
                    )}
                    </div>
                  </div>
                )
              )}
              </div>
            </div>
          </div>
        </div>
        </div>
    </Fragment>
  );
};