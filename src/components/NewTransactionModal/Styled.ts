import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
position: fixed;
width: 100vw;
height: 100vh;
inset: 0;
background: rgba(0, 0, 0, 0.75);
`
export const Content = styled(Dialog.Content)`
z-index: 1000;
min-width: 32rem;
width: 50vw;
height: 55vh;
border-radius: 6px;
padding: 2.5rem 3rem;
background: ${props => props.theme['gray-800']};

position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
     
     form{
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;

          input{
               border-radius    : 6px;
               border: 0;
               background-color: ${props => props.theme['gray-900']};
               color:  ${props => props.theme['gray-300']};
               padding: 1rem;
               &::placeholder{
                    color:  ${props => props.theme['gray-500']};
               }
          }
          button[type='submit']{
                    height:58px;
               border: 0;
               background-color:  ${props => props.theme['gray-600']};
               color:  ${props => props.theme['white']};
               font-weight: bold;
               padding: 0 1.25rem;
               border-radius: 6px;
               margin-top: 1.5rem;
               cursor: pointer;

               &:hover{
                    background:  ${props => props.theme['green-500']};
                    transition: background-color 0.2s, color 0.2s;
               }
          }
     }
`

export const CloseModalButton = styled(Dialog.Close)`
background: transparent;
cursor: pointer;
position: absolute;
border: 0;
outline: none;
top: 1.5rem;
right: 1.5rem;

border-radius: 6px;
padding: 1rem;
color: #fff;

&:hover{
     color:  ${props => props.theme['green-500']};
}

`

export const TransactionType = styled(RadioGroup.Root)`
     display: flex;
     grid-template-columns: repeat(2,1fr);
     gap: 1rem;
     margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
     variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item) <TransactionTypeButtonProps>`
     background:  ${props => props.theme['gray-700']};
     padding: 1rem;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 0.5rem;
     border-radius: 4px;
     cursor: pointer;
     border: 0;
     color: ${props => props.theme['white']};
     width: 50%;

     &:hover{
          background: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};
          color:  ${props => props.theme['white']};
     }
     &[data-state='checked']{
          background: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};
     }

`