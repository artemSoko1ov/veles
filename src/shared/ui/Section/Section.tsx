import styles from './Section.module.scss';
import clsx from "clsx";
import type {HTMLAttributes, PropsWithChildren} from "react";

type Props = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  title: string;
  description?: string;
};

const Section = ({
                   title,
                   description,
                   className,
                   id,
                   children,
                   ...props
                 }: Props) => {
  return (
    <section
      className={clsx(styles.section, className)}
      id={id}
      {...props}
    >
      <div className={clsx(styles.inner, "container")}>
        <div className={styles.head}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;