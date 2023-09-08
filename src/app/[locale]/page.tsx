'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Index() {
  const t = useTranslations()
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{t('home.welcomeMessage', { name: 'Joakim' })}</h1>
      <input
        type="number"
        min={0}
        value={count}
        onChange={(ev) => setCount(parseInt(ev.target.value))}
      />
      <p>{t('products.productCount', { count })}</p>
    </>
  )
}
