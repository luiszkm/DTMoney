import { Children, ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
  id: string;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: Date;

}

interface TransactionContextProps {
  transactions: Transaction[];
}
interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextProps)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    async function loadTransactions() {
      const response = await fetch("http://localhost:3000/transactions")
      const data = await response.json()
      setTransactions(data)
    }
    loadTransactions()
  }, [])
  return (
    <TransactionsContext.Provider value={
      {
        transactions
      }
    }>
      {children}
    </TransactionsContext.Provider>
  )
}