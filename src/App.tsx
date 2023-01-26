import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Transactions } from "./components/Transactions";
import { TabBar } from "./components/TabBar";
import { TransactionsProvider } from "./contexts/transactionContext";
import { SearchForm } from "./components/SearchForm";


export function App() {


  return (
    <TransactionsProvider>
      <div className="min-h-screen flex flex-col items-center mx-auto my-0 w-full bg-gray-800 relative">
        <Header />
        <div className="max-w-6xl w-full">
          <Summary />
            <SearchForm />
          <Transactions />
          <TabBar />
        </div>
      </div >
    </TransactionsProvider>
  )
}


