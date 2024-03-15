import { CurrencyCircleDollar, Plus } from "@phosphor-icons/react";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./Styles";

export function Header(){
     return(
          <HeaderContainer>
               <HeaderContent>
                    <CurrencyCircleDollar size={64} color="green"/>
                    <NewTransactionButton type="button">Nova transação
                         <Plus />
                    </NewTransactionButton>
               </HeaderContent>
          </HeaderContainer>
     )
}