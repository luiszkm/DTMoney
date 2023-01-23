import logoIgnite from '../assets/logo.svg'
import { Button } from './Button'

import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from './NewTransactionModal'



export interface DialogProps extends Dialog.DialogProps {
 
}
export function Header(props :DialogProps) {

  return (
    <div className="w-full flex items-center justify-center  bg-gray-900">
      <header className="w-full max-w-6xl h-52 bg-gray-900 flex items-start justify-between p-6 lg:px-0">
        <img src={logoIgnite} alt="" />
        <Dialog.Root {...props}>
          <Dialog.Trigger asChild>
            <Button model='small'>
              Nova Transação
            </Button>
          </Dialog.Trigger>
          <NewTransactionModal />

        </Dialog.Root>
      </header>
    </div>
  )
}