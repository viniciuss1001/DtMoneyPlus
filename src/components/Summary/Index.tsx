
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useSummary } from "../../hooks/useSummary";

export function Summary(){
     const summary = useSummary()
     return(
     <SummaryContainer>
          <SummaryCard>
               <header>
                    <span>Entradas</span>
                    <ArrowCircleUp width={32} color="green"/>
               </header>
               <strong>
                {summary.income}
               </strong>
          </SummaryCard>
          <SummaryCard>
               <header>
                    <span>Saídas</span>
                    <ArrowCircleDown color="orange" />
               </header>
               <strong>
                {summary.outcome}
               </strong>
          </SummaryCard>
          <SummaryCard variant="green">
               <header>
                    <span>Total</span>
                    <CurrencyDollar />
               </header>
               <strong>{summary.total}</strong>
          </SummaryCard>

     </SummaryContainer>
     )
}