import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} className='text-sm text-gray-400 font-light'>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}