import { CurrencyCircleDollar, Plus } from "@phosphor-icons/react";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./Styles";
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal/Index";

export function Header() {
     return (
          <HeaderContainer>
               <HeaderContent>
                    <CurrencyCircleDollar size={64} color="green" />
                    <Dialog.Root>
                         <NewTransactionButton type="button">Nova transação
                              <Plus />
                         </NewTransactionButton>
                         <NewTransactionModal />
                    </Dialog.Root>

               </HeaderContent>
          </HeaderContainer>
     )
}