import { createContext, ReactNode, useState, useEffect } from "react";

interface Transaction {
     id: number,
     description: string,
     type: 'income' | 'outcome',
     price: number,
     category: string,
     createdAt: string
}

interface TransactionsContextType {
     transactions: Transaction,
     fetchTransactions: () => Promise<void>
}

interface TransactionsProviderProps {
     children: ReactNode;
}




export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
     //call for the api
     const [transactions, setTransactions] = useState<Transaction[]>([])


     async function fetchTransactions(query?: string) {
          const response = await fetch('http://localhost:3000/transactions')
          const data = await response.json()
          setTransactions(data)
     }

     useEffect(() => {
          fetchTransactions()
     }, [])
     return (
          <TransactionsContext.Provider value={{
               transactions,
               fetchTransactions,
          }}>
               {children}
          </TransactionsContext.Provider>
     )
}