import './widgetLg.scss';

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Lastest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTableTr">
          <th className="widgetLgTableTh">Customer</th>
          <th className="widgetLgTableTh">Date</th>
          <th className="widgetLgTableTh">Amount</th>
          <th className="widgetLgTableTh">Status</th>
        </tr>
        <tr className="widgetLgTableTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3582560/pexels-photo-3582560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Robin Andrew</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$2021.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved"></Button>
          </td>
        </tr>
        <tr className="widgetLgTableTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3582560/pexels-photo-3582560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Robin Andrew</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$2021.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved"></Button>
          </td>
        </tr>
        <tr className="widgetLgTableTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3582560/pexels-photo-3582560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Robin Andrew</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$2021.00</td>
          <td className="widgetLgStatus">
            <Button type="Decliend"></Button>
          </td>
        </tr>
        <tr className="widgetLgTableTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3582560/pexels-photo-3582560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Robin Andrew</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$2021.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending"></Button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
