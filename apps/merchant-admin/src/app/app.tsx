import { CustomButton } from '@softpos/shared-components';
import './app.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <CustomButton buttonText="wagih from merchant-admin" />
      <NxWelcome title="merchant-admin" />
    </>
  );
}

export default App;
