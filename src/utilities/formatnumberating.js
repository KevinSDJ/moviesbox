export const formatnumber = (number) => {
  if (String(number).replace(/[$.]/g, '').split('').length <= 1) {
    const str = String(number).replace(/[$.]/g, '') + '0'
    return Number(str)
  } else {
    return Number(String(number).replace(/[$.]/g, ''))
  }
}
