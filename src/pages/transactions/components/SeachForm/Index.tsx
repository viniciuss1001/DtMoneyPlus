import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./Styles";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../../context/TransactionsContext";

const searchFormSchema = z.object({
     query: z.string()
})
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SeachForm(){

     const {fetchTransactions} = useContext(TransactionsContext)

     const {
          register, 
          handleSubmit,
          formState: {isSubmitting}
     } = useForm<SearchFormInputs>({
          resolver: zodResolver(searchFormSchema)
     })

     async function handleSearchTransactions(data: SearchFormInputs){
          await fetchTransactions(data.query)
          console.log(data.query)
     }

     return( 
          <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
               <input type="text" placeholder="Busque por transações"
               {...register('query')}
               />
               <button type="submit" disabled={isSubmitting}>
                              Buscar
                              <MagnifyingGlass />
               </button>
          </SearchFormContainer>
     )
}