import reactLogo from './assets/react.svg';
import './styles/globals.scss';

function App() {
  return (
    <div className='App'>
      <div className='flex h-screen flex-col items-center justify-center'>
        <div className='flex gap-5'>
          <a
            href='https://vitejs.dev'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src='/vite.svg'
              className='logo rounded-full'
              alt='Vite logo'
            />
          </a>
          <a
            href='https://reactjs.org'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={reactLogo}
              className='logo react animate-spin rounded-full'
              alt='React logo'
            />
          </a>
        </div>

        <h1 className='m-5 text-2xl font-bold'>
          Hello From <span className='text-blue-400 underline decoration-solid'>Vite</span>
          &nbsp;and&nbsp;
          <span className=' text-emerald-400 underline decoration-wavy'>TailwindCSS</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
