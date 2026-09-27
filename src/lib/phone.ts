export function formatPhone(input: string): string {
  let digits = input.replace(/\D/g, '')
  if (!digits) return ''
  if (digits[0] === '8') digits = '7' + digits.slice(1)
  if (digits[0] !== '7') digits = '7' + digits
  digits = digits.slice(0, 11)

  const parts = [digits.slice(1, 4), digits.slice(4, 7), digits.slice(7, 9), digits.slice(9, 11)]
  let result = '+7'
  if (parts[0]) result += ` (${parts[0]}`
  if (parts[0].length === 3) result += ')'
  if (parts[1]) result += ` ${parts[1]}`
  if (parts[2]) result += `-${parts[2]}`
  if (parts[3]) result += `-${parts[3]}`
  return result
}

export function isValidPhone(value: string): boolean {
  return value.replace(/\D/g, '').length === 11
}

export function toTelHref(value: string): string {
  return 'tel:+' + value.replace(/\D/g, '')
}
