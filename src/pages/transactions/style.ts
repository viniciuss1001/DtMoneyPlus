import styled from "styled-components";

export const TransactionsContainer = styled.div`
      width: 100%;
      max-width: 1120px;
      margin: 4rem auto 0;
      padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
      width: 100%;
      border-collapse: separate;
      border-spacing: 0 1.2rem;



      td{
           padding: 1.25rem 2rem;
           background: ${props => props.theme['gray-600']};

           &:first-child{
               border-top-left-radius: 8px;
               border-bottom-left-radius: 8px;
           }
           &:last-child{
               border-top-right-radius: 8px;
               border-bottom-right-radius: 8px;
           }
      }


`

interface PriceHighLightProps {
      variant: 'income' | 'outcome';
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
      color: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-300']}

`