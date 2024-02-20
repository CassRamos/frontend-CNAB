import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const response = await axios.get("http://localhost/8080/transactions");
    setTransactions(response);
    console.log(response.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <div>
        <h1>CNAB import</h1>
      </div>
      <div>
        <span>Choose File</span>
        <input type="file" accept=".txt" />
        <button>Upload File</button>
      </div>

      <div>
        <h2>Transactions</h2>
        <ul>
          <li>
            <table>
              <thead>
                <tr>
                  <th>Card</th>
                  <th>CPF</th>
                  <th>Date</th>
                  <th>Shop Owner</th>
                  <th>Time</th>
                  <th>Shop Name</th>
                  <th>Transaction Type</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
