import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { Typography } from '@mui/material';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Typography variant="h1">Hello Next.js</Typography>
    </Layout>
  )
}

export default HomePage
