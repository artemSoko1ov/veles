import styles from "./Section.module.scss";
import clsx from "clsx";
import type { HTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  title: string;
  description?: string;
};

const Section = ({ title, description, className, id, children, ...props }: Props) => {
  return (
    <section className={className} id={id} {...props}>
      <div className={clsx(styles.inner, "container")}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
