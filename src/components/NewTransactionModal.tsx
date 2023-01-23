import * as Dialog from '@radix-ui/react-dialog'
import { Input } from './Input'
import { Button } from './Button'


export function NewTransactionModal( ) {

  return (
    <Dialog.Portal className=''>
      <Dialog.Overlay className='fixed inset-0 bg-gray-900 opacity-80' />
      <Dialog.Content className='w-full fixed top-1/2 left-1/2 max-w-[538px] h-[528px] -translate-x-2/4 -translate-y-2/4 bg-gray-800 p-12'>
        <Dialog.Title className='text-gray-100 font-bold antialiased text-xl' >Nova Transação</Dialog.Title>

        <form className=' flex flex-col items-center gap-3 w-full mt-8'>
          <Input placeholder='Descrição' />
          <Input placeholder='Preço' />
          <Input placeholder='Categoria'/>
          
          <Button model='medium' >
            Cadastrar
          </Button>
        </form>

        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  )
}