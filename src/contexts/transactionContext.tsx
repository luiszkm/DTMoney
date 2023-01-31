import { ReactNode, createContext, useEffect, useState, useCallback } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: string;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: Date;
}
interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'

}

interface TransactionContextProps {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}
interface TransactionProviderProps {
  children: ReactNode
}



export const TransactionsContext = createContext({} as TransactionContextProps)



export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])


  const fetchTransactions = useCallback(
    async (query?: string) => {
      const response = await api.get(`/transactions`, {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query
        }
      })

      setTransactions(response.data)
    }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, category, price, type } = data
      try {
        const response = await api.post('/transactions', {
          description,
          price,
          category,
          type,
          createdAt: new Date(),
        })
        setTransactions(prevState => [response.data, ...prevState])
      } catch (error) {
        console.log(error);

      }
    }, [])
  useEffect(() => {

    fetchTransactions()
  }, [])
  return (
    <TransactionsContext.Provider value={
      {
        transactions,
        fetchTransactions,
        createTransaction,
      }
    }>
      {children}
    </TransactionsContext.Provider>
  )
}