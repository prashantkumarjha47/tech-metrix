import React, { useContext } from "react";
import AutoComplete from "components/autoComplete/AutoComplete";
import { Context } from "store/context";
import { getDate } from "utils/formatter";
import "./Explorer.scss";

export default function Explorer() {
  const {
    state: { history },
  } = useContext(Context);
  return (
    <div className="main">
      <div className="container">
        <div className="main-inner">
          <div className="search-row">
            <AutoComplete />
          </div>
          <div className="history-list">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {history.map(({ address, time }) => (
                  <tr key={time}>
                    <td>{getDate(time)}</td>
                    <td>{address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
