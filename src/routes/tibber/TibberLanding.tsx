import { useEffect, useState } from "react";

import Button from "../../Components/Button/Button";
import { getMonths } from "../../Helpers/DateHelpers";
import { loginEasee, makeTibberRequest } from "../../Helpers/ServerFunctions";
import "./TibberLanding.css";

type TibberType = { [key: string]: string }[];
const TibberLanding = () => {
  const [tibber, setTibber] = useState<TibberType>();
  const [filterText, setFilterText] = useState<string>("0");
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await makeTibberRequest();
      setTibber(data);
      setDataLoading(false);
    };
    fetchData().catch(console.error);
  }, []);

  const dates = getMonths(new Date("2022-10-01"), new Date());

  if (dataLoading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div className="tibber-page">
      <select
        id="date-input"
        placeholder="Välj månad"
        defaultValue={undefined}
        onChange={() =>
          setFilterText(
            (document.getElementById("date-input") as HTMLSelectElement).value
          )
        }
      >
        {dates.map((date) => {
          const thing = `${date.getFullYear()}-${(
            "0" +
            (date.getMonth() + 1)
          ).slice(-2)}`;

          return (
            <option key={thing} value={thing}>
              {thing}
            </option>
          );
        })}
      </select>
      <Button title="Easee request" onClick={() => loginEasee()} />

      <div className="table-wrapper">
        <table style={{ color: "white" }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Consumption</th>
              <th>Cost</th>
              <th>Unit Price</th>
              <th>Unit Price VAT</th>
            </tr>
          </thead>
          <tbody>
            {tibber &&
              tibber
                .filter((f) => f.from.includes(filterText))
                .map((x) => {
                  const fullDate = x.from;
                  const date = fullDate.split("T")[0];
                  const time = fullDate.split("T")[1].slice(0, 5);

                  return (
                    <tr key={fullDate}>
                      <td>{date}</td>
                      <td>{time}</td>
                      <td>{x.consumption}</td>
                      <td>{x.cost}</td>
                      <td>{x.unitPrice}</td>
                      <td>{x.unitPriceVAT}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TibberLanding;
