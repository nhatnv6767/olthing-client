import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SEO from '@components/seo'
import Header from '@layout/Header'

export default function HomeShop () {
  return (
    <>
      <SEO pageTitle={'Home Shop'}/>
      <Header/>
    </>
  )
}
