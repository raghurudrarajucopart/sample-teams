import { parse, format } from 'date-fns'

export const parser = (dateString: string, formatString: string): Date | string =>
  parse(dateString, convertToUnicodeFormat(formatString), new Date())

export const formatter = (dateObj: Date, formatString: string): string =>
  !dateObj || isNaN(dateObj.getTime()) ? '' : format(dateObj, convertToUnicodeFormat(formatString))

const convertToUnicodeFormat = (formatString: string): string => {
  const regex = /D|Y/g

  let modifiedFormat = formatString.replace(regex, function(match) {
    return match.toLowerCase()
  })

  return modifiedFormat
}

export const DateTimeFormat = (dateObj: Date) => 
	!dateObj ? '' : format(new Date(dateObj), 'MM/dd/yy HH:mm')