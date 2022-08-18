import Paperbase from "./containers/Paperbase";
import DynamicThemeProvider from "./theme/DynamicThemeProvider";

export default function App() {
  return (
    <DynamicThemeProvider>
      <Paperbase />
    </DynamicThemeProvider>
  );
}
