import ContextProvider from "./components/context/ContextProvider";
import InvoicePage from "./pages/InvoicePage";

const Main = () => {
  return (
    <>
      <ContextProvider>
        <InvoicePage />
      </ContextProvider>
    </>
  );
};

export default Main;
