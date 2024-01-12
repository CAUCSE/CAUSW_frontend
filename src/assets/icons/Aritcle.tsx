export const Article: React.FC<{ active: boolean }> = ({ active, ...props }) => {
  const color = active ? '#A3A1A1' : '#3F4040';

  return (
    <svg
      width="19"
      height="24"
      viewBox="0 0 19 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5378 4.99999V19H3.60049V4.99999H15.5378ZM15.5378 3.99994L3.60049 3.99999C2.7798 3.99999 2.60571 3.89999 2.60571 4.99999V19C2.60571 20.1 2.7798 20 3.60049 20H15.5378C16.3585 20 16.5326 20.1 16.5326 19V4.99999C16.5326 3.89999 16.3585 3.99994 15.5378 3.99994Z"
        fill={color}
      />
      <rect x="4.59528" y="7" width="9.94778" height="1" fill={color} />
      <rect x="4.59528" y="13" width="9.94778" height="1" fill={color} />
      <rect x="4.59528" y="16" width="4.97389" height="1" fill={color} />
      <rect x="4.59528" y="9" width="9.94778" height="1" fill={color} />
      <rect x="4.59528" y="11" width="9.94778" height="1" fill={color} />
    </svg>
  );
};
