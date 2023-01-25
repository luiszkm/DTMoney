

export function ConvertCents(price: number) {
  const priceConverted = Number(price / 100)

  return priceConverted.toLocaleString('pt-br', { minimumFractionDigits: 2 })

}