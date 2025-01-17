import clsx from 'clsx';

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const PageContainer = ({ children, className }: PageContainerProps) => {
  return <div className={clsx('container m-auto', className)}>{children}</div>;
};

export default PageContainer;
