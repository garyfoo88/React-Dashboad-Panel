import React from "react";
import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revenue</span>
        <div className="featured-money-container">
          <span className="feature-money">$6,432</span>
          <span className="feature-money-rate">
            -1.2 <ArrowDownward />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="feature-money">$2,000</span>
          <span className="feature-money-rate">
            -1.2 <ArrowDownward />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="feature-money">$2,000</span>
          <span className="feature-money-rate">
            11.2 <ArrowUpward />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
