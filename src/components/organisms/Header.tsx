import { AiOutlinePlusCircle } from 'react-icons/ai';

const Header = () => {
  return (
    <div class="h-16">
      <header class="fixed top-0 left-0 w-screen bg-main-fuchsia h-16 flex items-center px-8 text-white justify-between">
        <h1 class="text-4xl font-semibold">
          <a href="/">
            ToCount
          </a>
        </h1>
        <nav>
          <a href="/points/add">
            <AiOutlinePlusCircle className="text-3xl" />
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
