import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseModalButton, TransactionType, TransactionTypeButton } from "./Styled";
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import * as z from 'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
     description: z.string(),
     price: z.number(),
     category: z.string(),
     type: z.enum(['income', 'outcome']),

})
type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {

     const {
          control,
          register,
          handleSubmit,
          formState: { isSubmitting }
     } = useForm<newTransactionFormInputs>({
          resolver: zodResolver(newTransactionFormSchema)
     })

     function handleCreateNewTransaction(data: newTransactionFormInputs) {
          console.log(data)
     }

     return (
          <Dialog.Portal>
               <Overlay />
               <Content>
                    <Dialog.Title>
                         Nova Transação
                    </Dialog.Title>
                    <CloseModalButton>
                         <X />
                    </CloseModalButton>
                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                         <input type="text"
                              placeholder="Nome da transação"
                              required
                              {...register('description')}
                         />
                         <input type="number" placeholder="Preço"
                              required
                              {...register('price', { valueAsNumber: true })}
                         />
                         <input type="text"
                              placeholder="Categoria"
                              required
                              {...register('category')}
                         />
                         <Controller
                              control={control}
                              name="type"
                              render={({field}) => {
                                   return (
                                        <TransactionType onValueChange={field.onChange} value={field.value}>
                                             <TransactionTypeButton
                                                  variant="income"
                                                  value="income"

                                             >
                                                  <ArrowCircleUp
                                                       color="green"
                                                       size={32}
                                                  />
                                                  Entradas
                                             </TransactionTypeButton>
                                             <TransactionTypeButton
                                                  variant="outcome"
                                                  value="outcome"
                                             >
                                                  <ArrowCircleDown
                                                       size={32}
                                                       color="red"
                                                  />
                                                  Saída
                                             </TransactionTypeButton>
                                        </TransactionType>
                                   )
                              }}
                         />

                         <button type="submit" disabled={isSubmitting}>
                              Cadastrar
                         </button>
                    </form>
               </Content>
          </Dialog.Portal>
     )
}