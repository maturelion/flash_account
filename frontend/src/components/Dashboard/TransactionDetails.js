import React from "react";

const TransactionDetails = (props) => {
  return (
    <div
      className="modal fade"
      tabindex="-1"
      id="modalDefault282"
      bis_skin_checked="1"
    >
      <div className="modal-dialog" role="document" bis_skin_checked="1">
        <div className="modal-content" bis_skin_checked="1">
          <div
            className="modal-header bg-primary text-light"
            bis_skin_checked="1"
          >
            <h5 className="modal-title text-light">Transaction Details</h5>
            <a
              href="/personal-banking/dashboard.php?viewSource=4uwVoHdaMMQi0pGzB24FqiRTjxrY5RNyek3udOlqkIoOVYwzrKP7fsW4DzKndCVKpqXE#"
              className="close text-light"
              data-dismiss="modal"
              aria-label="Close"
            >
              <em className="icon ni ni-cross"></em>
            </a>
          </div>
          <div className="modal-body" bis_skin_checked="1">
            <ul className="buysell-overview-list">
              <li className="buysell-overview-item">
                <span className="pm-currency">
                  <em className="icon ni ni-check-circle-fill"></em>
                  <span>Amount Debited</span>
                </span>
                <span className="pm-title">USD 130020</span>
              </li>
              <li className="buysell-overview-item">
                <span className="pm-currency">
                  <em className="icon ni ni-check-circle-fill"></em>
                  <span>Transaction refrence:</span>
                </span>
                <span className="pm-title">FLO/NRNAKMJOM-0622</span>
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
                <span className="pm-title">13 Jun 2022, 4:44 pm</span>
              </li>

              <li className="buysell-overview-item">
                <span className="pm-currency">
                  <em className="icon ni ni-check-circle-fill"></em>
                  <span>Available Balance:</span>
                </span>
                <span className="pm-title">USD 177,854,397</span>
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
