import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Button } from './Button'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from 'react-hook-form';
import { api } from '../lib/axios';
import { useContext } from 'react';
import { TransactionsContext } from '../contexts/transactionContext';


const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),

})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {createTransaction} = useContext(TransactionsContext)


  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting }
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, category, price, type } = data

    try {
      await createTransaction({
        description,
        price,
        category,
        type,
      })

      reset()

    } catch (error) {
      console.log(error);

    }
  }

  return (
    <Dialog.Portal className=''>
      <Dialog.Overlay className='fixed inset-0 bg-gray-900 opacity-80' />
      <Dialog.Content className='w-full fixed top-1/2 left-1/2 max-w-[538px] h-[528px] -translate-x-2/4 -translate-y-2/4 bg-gray-800 p-12'>
        <Dialog.Title className='text-gray-100 font-bold antialiased text-xl' >Nova Transação</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}
          className=' flex flex-col items-center gap-3 w-full mt-8'>
          <input className="p-4 w-full bg-gray-900 rounded-md outline-none text-gray-300 placeholder:text-gray-500 focus:outline-green-300"
            placeholder='Descrição'
            {...register('description')}
          />
          <input className="p-4 w-full bg-gray-900 rounded-md outline-none text-gray-300 placeholder:text-gray-500 focus:outline-green-300"
            placeholder='Preço'
            {...register('price', { valueAsNumber: true })}
          />
          <input className="p-4 w-full bg-gray-900 rounded-md outline-none text-gray-300 placeholder:text-gray-500 focus:outline-green-300"
            placeholder='Categoria'
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <RadioGroup.Root className='flex w-full items-center gap-3'
                  onValueChange={field.onChange}
                  value={field.value}
                >

                  <RadioGroup.Item className='w-full rounded-md px-4 py-6  flex items-center gap-2  
       data-[state=checked]:bg-green-700  data-[state=unchecked]:bg-gray-700 data-[state=unchecked]:hover:bg-gray-600
       [&>*:nth-child(odd)]:text-green-300 [&>*:nth-child(even)]:text-gray-300 
       [&>*:nth-child(odd)]:focus-within:text-white [&>*:nth-child(even)]:focus-within:text-white '
                    value='income' >
                    <ArrowCircleUp size={24} className='text-green-300' />
                    <span>Entrada</span>
                  </RadioGroup.Item>

                  <RadioGroup.Item className='w-full rounded-md px-4 py-6  flex items-center gap-2
                  data-[state=checked]:bg-red-700  data-[state=unchecked]:bg-gray-700 data-[state=unchecked]:hover:bg-gray-600
      [&>*:nth-child(odd)]:text-red-300 [&>*:nth-child(even)]:text-gray-300 focus-within:hover:bg-red-700 
        [&>*:nth-child(odd)]:focus-within:text-white [&>*:nth-child(even)]:focus-within:text-white  '
                    value='outcome'>

                    <ArrowCircleDown size={24} />
                    <span >Saída</span>
                  </RadioGroup.Item>
                </RadioGroup.Root>
              )
            }}
          />

          <Button disabled={isSubmitting}
            model='medium' >
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