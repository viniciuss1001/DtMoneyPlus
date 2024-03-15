
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./styles";


export function Summary(){

     return(
     <SummaryContainer>
          <SummaryCard>
               <header>
                    <span>Entradas</span>
                    <ArrowCircleUp width={32} color="green"/>
               </header>
               <strong>17,000</strong>
          </SummaryCard>
          <SummaryCard>
               <header>
                    <span>Saídas</span>
                    <ArrowCircleDown color="orange" />
               </header>
               <strong>17,000</strong>
          </SummaryCard>
          <SummaryCard variant="green">
               <header>
                    <span>Total</span>
                    <CurrencyDollar />
               </header>
               <strong>17,000</strong>
          </SummaryCard>

     </SummaryContainer>
     )
}