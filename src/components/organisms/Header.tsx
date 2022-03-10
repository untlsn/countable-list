import { AiOutlinePlusCircle } from 'react-icons/ai';
import { IoSettingsSharp } from 'react-icons/io5';

const Header = () => {
  return (
    <div className="h-header">
      <header className="fixed top-0 left-0 w-screen bg-main-fuchsia h-header flex items-center px-8 text-white justify-between z-100">
        <h1 className="text-4xl font-semibold space-x-4">
          <a href="/">
            ToCount
          </a>
        </h1>
        <nav className="text-3xl space-x-4">
          <a href="/points/add">
            <AiOutlinePlusCircle />
          </a>
          <a href="/settings">
            <IoSettingsSharp />
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
