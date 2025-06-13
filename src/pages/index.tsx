import dynamic from 'next/dynamic'

import Account from '@components/home/Account'
import { BannerSkeleton } from '@components/home/EventBanners'
import { CreditScoreSkeleton } from '@components/home/CreditScore'
import Spacing from '@shared/Spacing'
import { CardListSkeleton } from '@components/home/CardList'

const EventBanners = dynamic(() => import('@components/home/EventBanners'), {
  //ssr 여부
  ssr: false,
  loading: () => <BannerSkeleton />,
})

const CreditScore = dynamic(() => import('@components/home/CreditScore'), {
  ssr: false,
  loading: () => <CreditScoreSkeleton />,
})

const CardList = dynamic(() => import('@components/home/CardList'), {
  ssr: false,
  loading: () => <CardListSkeleton />,
})

export default function Home() {
  return (
    <>
      <EventBanners />
      {/*자산 영역은 ssr로 사용자에게 빠르게 노출시켜 준다.*/}

      <Account />
      <Spacing size={8} backgroundColor="gray100" />

      <CreditScore />
      <Spacing size={8} backgroundColor="gray100" />

      <CardList />
    </>
  )
}
