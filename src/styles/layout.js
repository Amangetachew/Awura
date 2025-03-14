// layout.jsx
import './styles/global.css'; // Global styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main> {/* Main content area */}
      <Footer />
    </div>
  );
}