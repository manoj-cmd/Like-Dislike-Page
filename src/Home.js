import React from "react";
import { Link } from "react-router-dom";
function Hmoe() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.pexels.com/photos/863963/pexels-photo-863963.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <Link to="/Like" className="btn btn-primary">
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.pexels.com/photos/1199543/pexels-photo-1199543.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/Dislike" className="btn btn-primary">
                <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hmoe;
