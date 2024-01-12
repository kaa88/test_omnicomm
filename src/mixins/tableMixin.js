import React from "react";
import { defaultactivePage } from "./apiMixin";

const tableMixin = {
  setTable(universities = []) {
    this.setState({
      universities,
      totalItems: universities.length,
      activePage: defaultactivePage,
    });
  },

  renderTable(universities = []) {
    if (!this.state.universities.length) {
      return null;
    }
    return (
      <table>
        <thead>
          <tr>
            <th>University name</th>
            <th>Country code</th>
            <th>Domains</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((u) => (
            <tr key={u.name}>
              <td>{u.name}</td>
              <td>{u.alpha_two_code}</td>
              <td>
                {u.domains.map((d) => (
                  <a key={d} href={`https://${d}`} target="_blank">
                    {" "}
                    {d}{" "}
                  </a>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
};

export default tableMixin;
