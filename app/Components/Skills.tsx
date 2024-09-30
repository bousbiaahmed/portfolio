import "./Skills.css";
import lang from "/lang.png";
import mongo from "/mongo.png";
import node from "/node.png";
import react from "/react.png";
import sql from "/sql.png";
import java from "/java.png";

function Skills() {
  return (
    <div>
      <h1 className="MY "> MY SkILLS </h1>
      <div className="langim">
        <img src="lang.png" alt="" className="imh" />
        <img src="mongo.png" alt="" className="imh" />
        <img src="react.png" alt="" className="imh" />
        <img src="sql.png" alt="" className="imh" />
        <img src="node.png" alt="" className="imh" />
      </div>
      <img src="java.png" alt="" className="imgh" />
    </div>
  );
}
export default Skills;
