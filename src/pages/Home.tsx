import CounterDisplay from '../components/CounterDisplay/CounterDisplay';
import About from '../components/About/About';

const Home = () => {
  return (
    <div data-testid="home-component">
      <CounterDisplay />
      <About />
    </div>
  );
};

export default Home;
