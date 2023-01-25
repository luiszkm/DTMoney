import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Input } from './Input'
import { Button } from './Button'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'


export function NewTransactionModal() {

  return (
    <Dialog.Portal className=''>
      <Dialog.Overlay className='fixed inset-0 bg-gray-900 opacity-80' />
      <Dialog.Content className='w-full fixed top-1/2 left-1/2 max-w-[538px] h-[528px] -translate-x-2/4 -translate-y-2/4 bg-gray-800 p-12'>
        <Dialog.Title className='text-gray-100 font-bold antialiased text-xl' >Nova Transação</Dialog.Title>

        <form className=' flex flex-col items-center gap-3 w-full mt-8'>
          <Input placeholder='Descrição' />
          <Input placeholder='Preço' />
          <Input placeholder='Categoria' />

          <RadioGroup.Root className='flex w-full items-center gap-3'>




            <RadioGroup.Item className='w-full rounded-md px-4 py-6 bg-gray-700 flex items-center gap-2 hover:bg-gray-600 focus-within:bg-green-700 
               [&>*:nth-child(odd)]:text-green-300 [&>*:nth-child(even)]:text-gray-300 focus-within:hover:bg-green-700
               [&>*:nth-child(odd)]:focus-within:text-white [&>*:nth-child(even)]:focus-within:text-white '
              value='income'>
              <ArrowCircleUp size={24} className='text-green-300' />
             <span>Entrada</span>
            </RadioGroup.Item>

            <RadioGroup.Item className='w-full rounded-md px-4 py-6 bg-gray-700 flex items-center gap-2 hover:bg-gray-600 focus-within:bg-red-700 
              [&>*:nth-child(odd)]:text-red-300 [&>*:nth-child(even)]:text-gray-300 focus-within:hover:bg-red-700 
                [&>*:nth-child(odd)]:focus-within:text-white [&>*:nth-child(even)]:focus-within:text-white  '
              value='outcome'>

              <ArrowCircleDown size={24} />
              <span >Saída</span>
            </RadioGroup.Item>
          </RadioGroup.Root>

          <Button model='medium' >
            Cadastrar
          </Button>
        </form>

        <Dialog.Close className='absolute top-5 right-6 text-gray-300 hover:text-red-500'>
          <button className='bg-transparent'>
            <X size={20} weight='bold' />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}