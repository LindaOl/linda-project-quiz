import { Quiz } from "./components/Quiz"

export const App = () => {
  return <div className="app-wrapper">
    <header>
      <h2>Wellness survey</h2>
      <h1>Quick Fitness Check-In</h1>
      <h3>Tell us about your exercise habits.</h3>
    </header>

    <Quiz />

  </div>
};
