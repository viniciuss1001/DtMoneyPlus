import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Index";
import { SeachForm } from "./components/SeachForm/Index";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./style";

export function Transactions() {

     return (
          <>
               <Header />
               <Summary />

               <TransactionsContainer>
                    <SeachForm />
                    <TransactionsTable>
                         <tbody>
                              <tr>
                                   <td width='50%'>Tipo da transação</td>
                                   <td>
                                        <PriceHighLight variant="income">
                                             R$ 17,000
                                        </PriceHighLight>
                                   </td>
                                   <td>Categoria</td>
                                   <td>Data</td>
                              </tr>
                              <tr>
                                   <td width='50%'>Tipo da transação</td>
                                   <td>
                                        <PriceHighLight variant="outcome">
                                        Preço
                                        </PriceHighLight>
                                   </td>
                                   <td>Categoria</td>
                                   <td>Data</td>
                              </tr>
                              <tr>
                                   <td width='50%'>Tipo da transação</td>
                                   <td>Preço</td>
                                   <td>Categoria</td>
                                   <td>Data</td>
                              </tr>
                         </tbody>
                    </TransactionsTable>
               </TransactionsContainer>
          </>
     )
}