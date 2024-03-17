import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseModalButton } from "./Styled";
import { X } from "@phosphor-icons/react";

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

                         <button type="submit">
                              Cadastrar
                         </button>
                    </form>
               </Content>
          </Dialog.Portal>
     )
}