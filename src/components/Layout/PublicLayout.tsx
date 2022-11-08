import Header from './Header';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default PublicLayout;
