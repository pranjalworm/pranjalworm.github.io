import { parseISO, format } from 'date-fns'
import styles from './date.module.css'

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString} className={styles.dateWrapper}>{format(date, 'LLLL d, yyyy')}</time>
}