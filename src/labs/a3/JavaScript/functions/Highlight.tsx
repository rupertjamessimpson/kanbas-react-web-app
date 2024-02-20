import { ReactNode } from "react";

function Highlight({children}: {children: string}) {
  return (
    <span style={{ backgroundColor: "Yellow", color: "Red"}}>{children}</span>
  );
}

export default Highlight;