import React from "react";

function App() {
  const [colors, setColors] = React.useState(["#FFD500", "#FF0040"]);

  const handleAddColor = () => {
    setColors([...colors, "#000000"]); // Add a new color with a default value of black
  };

  const handleRemoveColor = () => {
    if (colors.length > 1) {
      setColors(colors.slice(0, -1)); // Remove the last color
    }
  };

  const handleColorChange = (index, event) => {
    const newColors = [...colors]; // Create a copy of the colors array
    newColors[index] = event.target.value; // Update the color at the specific index
    setColors(newColors); // Update state with the new color array
  };

  const colorStops = colors.map((color, index) => `${color} ${index * (100 / (colors.length - 1))}%`).join(", ");
  const backgroundImage = `linear-gradient(to right, ${colorStops})`;

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={handleRemoveColor}>Remove color</button>
        <button onClick={handleAddColor}>Add color</button>
      </div>
      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />
      <div className="colors">
        {colors.map((color, index) => (
          <div key={index} className="color-wrapper">
            <label htmlFor={`color-${index}`}>Color {index + 1}:</label>
            <div className="input-wrapper">
              <input
                id={`color-${index}`}
                type="color"
                value={color}
                onChange={(e) => handleColorChange(index, e)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
