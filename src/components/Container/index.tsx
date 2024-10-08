import { ReactNode } from "react";

interface ContainerProps {
  bg?: "primary" | "secondary" | null;
  children: ReactNode;
}

const Container = ({ bg, children }: ContainerProps) => {
  return (
    <section
      className={`
            text-primary-text-color flex flex-col 
            items-center space-y-14 px-5 py-10
            ${bg === "secondary" ? "bg-secondary-color" : "bg-primary-color"}
        `}
    >
      {children}
    </section>
  );
};

export default Container;
