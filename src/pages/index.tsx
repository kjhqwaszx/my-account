import dynamic from 'next/dynamic'

import Account from '@components/home/Account'
import { BannerSkeleton } from '@components/home/EventBanners'

const EventBanners = dynamic(() => import('@components/home/EventBanners'), {
  //ssr 여부
  ssr: false,
  loading: () => <BannerSkeleton />,
})

export default function Home() {
  return (
    <>
      <EventBanners />
      {/*자산 영역은 ssr로 사용자에게 빠르게 노출시켜 준다.*/}
      <Account />
    </>
  )
}
