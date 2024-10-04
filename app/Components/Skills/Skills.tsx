import "./Skills.css";

function Skills() {
  const images=[
      "lang.png",
      "mongo.png",
        "react.png" ,
        "sql.png" ,
        "node.png",
        "java.png",
        "pyth.png",
        "ts.png"


  ]
  return (
    <div>
      <h1 className="MY "> MY SkILLS </h1>
      <div className="imageGallery ">
      {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Developer Image ${index + 1}`}
            className="imageh"
          />
        ))}
        
      </div>
      
    </div>
  );
}
export default Skills;
