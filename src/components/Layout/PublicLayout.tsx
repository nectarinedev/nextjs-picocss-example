import Header from './Header';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PublicLayout;
