import Header from '../components/Header';
import StepOne from '../components/StepOne';
import StepTwo from '../components/StepTwo';
import StepThree from '../components/StepThree';
import Counter from '../components/Counter'

function App() {
  const path = window.location.href;
  const phoneNumber = path.slice(path.indexOf('t=') + 2, path.indexOf('t=') + 3) === 'b' ? '+5491144376262' : '+5491131698711';

  localStorage.setItem('tel', phoneNumber)
  return (
    <> 
    <Header></Header>
    <Counter></Counter>
    <StepOne></StepOne>
    <StepTwo></StepTwo>
    <StepThree></StepThree>
    </>
  );
}

export default App;
