import React from 'react'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
    </div>
  )
}

Dashboard.propTypes = {}

export default React.memo(Dashboard)
