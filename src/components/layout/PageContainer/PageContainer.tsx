import styles from "./PageContainer.module.css";

export type PageContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div
      className={`${styles["page-container"]} top-0 mx-auto mt-48 w-full bg-none p-4 leading-8 sm:mt-16 dark:bg-soft-black`}
    >
      {children}
    </div>
  );
}
