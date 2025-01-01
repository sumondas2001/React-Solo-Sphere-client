
const Test = () => {
     const containerStyle = {
          position: "relative",
          fontSize: "200px",
          whiteSpace: "nowrap",
     };

     const outlineStyle = {
          color: "transparent",
          WebkitTextStroke: "3px red", // Outline effect
          userSelect: "none",
     };

     const frontStyle = {
          color: "blue", // Main text color
     };

     return (
          <div style={containerStyle}>
               <div style={outlineStyle}>Outline Text</div>
               <div style={frontStyle}>Outline Text</div>
          </div>
     );
};

export default Test;
