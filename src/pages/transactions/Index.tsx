import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Index";
import { SeachForm } from "./components/SeachForm/Index";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./style";
import {TransactionsContext} from '../../../context/TransactionsContext'

export function Transactions() {
const {transactions} = useContext(TransactionsContext)
     return (
          <>
               <Header />
               <Summary />

               <TransactionsContainer>
                    <SeachForm />
                    <TransactionsTable>
                         <tbody>
                              {transactions.map((transaction) => {
                                   return (
                                        <tr key={transaction.id}>
                                             <td width='50%'>{transaction.description}</td>
                                             <td>
                                                  <PriceHighLight variant={transaction.type}>
                                                       R$ {transaction.price}
                                                  </PriceHighLight>
                                             </td>
                                             <td>
                                                  {transaction.category}
                                             </td>
                                             <td>{transaction.createdAt}</td>
                                        </tr>
                                   )
                              })}
                         </tbody>
                    </TransactionsTable>
               </TransactionsContainer>
          </>
     )
}