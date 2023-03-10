// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { CustomButton } from '@softpos/shared-components';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <CustomButton buttonText="Wagih from super-admin" />
      <NxWelcome title="super-admin" />
    </>
  );
}

export default App;
