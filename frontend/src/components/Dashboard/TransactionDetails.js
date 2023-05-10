import React from "react";

const TransactionDetails = (props) => {
  const {data, wallet, showTXDetails, setShowTXDetails} = props
  let USDollar = new Intl.NumberFormat();
  const date = new Date(data.date)
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return (
    <div
      className="modal fade"
      tabindex="-1"
      id="modalDefault282"
      bis_skin_checked="1"
      style={{opacity: `${showTXDetails ? 1 : 0}`, display: `${showTXDetails ? "block" : "none"}`}}
    >
      <div className="modal-dialog" role="document" bis_skin_checked="1">
        <div className="modal-content" bis_skin_checked="1">
          <div
            className="modal-header bg-primary text-light"
            bis_skin_checked="1"
          >
            <h5 className="modal-title text-light">Transaction Details</h5>
            <div
              className="close text-light"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setShowTXDetails(false)}
            >
              <em className="icon ni ni-cross"></em>
            </div>
          </div>
          <div className="modal-body" bis_skin_checked="1">
            <ul className="buysell-overview-list">
              <li className="buysell-overview-item">
                <span className="pm-currency">
                  <em className="icon ni ni-check-circle-fill"></em>
                  <span>Amount Debited</span>
                </span>
                <span className="pm-title">USD {USDollar.format(data.amount)}</span>
              </li>
              <li className="buysell-overview-item">
                <span className="pm-currency">
                  <em className="icon ni ni-check-circle-fill"></em>
                  <span>Transaction refrence:</span>
                </span>
                <span className="pm-title">{data.ref}</span>
              </li>
              <li className="buysell-overview-item">
                <span className="pm-currency">
                  <em className="icon ni ni-check-circle-fill"></em>
                  <span>Beneficiary Account holder:</span>
                </span>
                <span className="pm-title">
                  Inland Revenue Services , Turkey
                </span>
              </li>
              <li className="buysell-overview-item">
                <span className="pm-currency">
                  <em className="icon ni ni-check-circle-fill"></em>
                  <span>Bank name:</span>
                </span>
                <span className="pm-title">Barclay Bank Ankara-Turkey</span>
              </li>
              <li className="buysell-overview-item">
                <span className="pm-currency">
                  <em className="icon ni ni-check-circle-fill"></em>
                  <span>Date:</span>
                </span>
                <span className="pm-title">{date.getDate()} {monthNames[date.getMonth()]} {date.getFullYear()}, {date.getHours()}:{date.getHours()} {date.getHours() > 12 ? "pm" : "am" }</span>
              </li>

              <li className="buysell-overview-item">
                <span className="pm-currency">
                  <em className="icon ni ni-check-circle-fill"></em>
                  <span>Available Balance:</span>
                </span>
                <span className="pm-title">USD {USDollar.format(wallet.balance)}</span>
              </li>
            </ul>
          </div>
          <div className="modal-footer bg-light" bis_skin_checked="1">
            <span className="sub-text text-primary">
              Proccessed by Florish Bank Digital banking services.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
