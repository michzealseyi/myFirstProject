//PASSING OF COMPONENT USING THE CHILDREN PROP

import { ReactNode } from "react";

//react arrow function component export(rafce)
interface Props {
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

//below is an example of what will be typed into d div section at App.tsx
//<Alert>Hello World</Alert>
