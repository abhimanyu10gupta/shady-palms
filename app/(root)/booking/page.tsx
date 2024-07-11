import ReserveTable from '@/components/ReserveTable'
import React from 'react'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

const Booking = () => {
  return (
    <div> 
      <ReserveTable />
    </div>
  )
}

export default Booking