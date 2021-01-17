import React from "react";

function AddIcon({ size, color }) {
  return (
    <div>
      <svg viewBox="0 0 24 24" height={size} width={size}>
        <path
          fill="none"
          stroke={color}
          strokeWidth="2"
          d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,18 L12,6 M6,12 L18,12"
        ></path>
      </svg>
    </div>
  );
}

export default AddIcon;
