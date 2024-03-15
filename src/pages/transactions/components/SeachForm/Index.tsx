import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./Styles";

export function SeachForm(){
     return( 
          <SearchFormContainer>
               <input type="text" placeholder="Busque por transações"/>
               <button type="submit">
                              Buscar
                              <MagnifyingGlass />
               </button>
          </SearchFormContainer>
     )
}