import React from "react";
import CountUp from "react-countup"; //contador
import "./Data.css";

export default function Data(props) {
  return (
    <div className="data">
      <CountUp
        className="data_number"
        start={0}
        end={props.total}
        duration={2}
        separator=","
      />
      <p className="data__info"> Empresas de tecnología </p>
    </div>
  );
}
