import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseModalButton,TransactionType,TransactionTypeButton } from "./Styled";
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";

export function NewTransactionModal() {
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
                    <form>
                         <input type="text"
                         placeholder="Nome da transação"
                         required
                         />
                         <input type="number" placeholder="Preço"
                         required />
                         <input type="text" 
                         placeholder="Categoria"
                         required
                         />
                         <TransactionType>
                              <TransactionTypeButton
                              variant="income"
                              >
                                   <ArrowCircleUp 
                                   color="green"
                                   size={32}
                                   />
                                   Entradas
                              </TransactionTypeButton>
                              <TransactionTypeButton
                              variant="outcome"
                              >
                                   <ArrowCircleDown 
                                   size={32}
                                   color="red"
                                   />
                                   Saída
                              </TransactionTypeButton>
                         </TransactionType>

                         <button type="submit">
                              Cadastrar
                         </button>
                    </form>
               </Content>
          </Dialog.Portal>
     )
}