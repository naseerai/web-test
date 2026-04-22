import React from "react";

const Skeleton = ({ width, height, borderRadius = "12px", margin = "0" }) => {
  return (
    <div style={{
      width: width,
      height: height,
      borderRadius: borderRadius,
      margin: margin,
      background: "linear-gradient(90deg, #f0f0f0 25%, #e6e6e6 50%, #f0f0f0 75%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.5s infinite linear",
    }} />
  );
};

// Add the keyframe animation to the document
const style = document.createElement('style');
style.textContent = `
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;
document.head.append(style);

export default Skeleton;