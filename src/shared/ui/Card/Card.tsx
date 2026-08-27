import styles from "./Card.module.scss";
import type { HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

type Props = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  title: string;
  description?: string;
  image: string;
};

const Card = ({ title, description, image, className, ...props }: Props) => {
  return (
    <div className={clsx(styles.card, className)} {...props}>
      <img className={styles.image} src={image} alt="" />

      {(title || description) && (
        <div className={styles.overlay}>
          {title && <h3 className={styles.title}>{title}</h3>}

          {description && <p className={styles.description}>{description}</p>}
        </div>
      )}
    </div>
  );
};

export default Card;
