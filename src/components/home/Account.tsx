import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Button from '@shared/Button'
import Spacing from '@shared/Spacing'
import Image from 'next/image'
import {
  ACCOUNT_BUTTON,
  ACCOUNT_MESSAGE,
  ACCOUNT_STATUS,
} from '@constants/account'

function Account() {
  const hasAccount = true

  // 계좌가 있는 경우
  if (hasAccount) {
    return (
      <div style={{ padding: 24 }}>
        <Flex justify="space-between" align="center">
          <Flex direction="column">
            <Text typography="t6" color="gray600">
              올라프 회원님의 자산
            </Text>
            <Spacing size={2} />
            <Text typography="t3" bold={true}>
              7,000원
            </Text>
          </Flex>
          <Button>분석</Button>
        </Flex>
      </div>
    )
  }

  // 계좌가 없는 경우 ( + 개설중 )
  const accountStatus = ACCOUNT_STATUS.PROCESSING

  const title =
    accountStatus === ACCOUNT_STATUS.PROCESSING
      ? ACCOUNT_MESSAGE.PROCESSING
      : ACCOUNT_MESSAGE.NOT

  const buttonLabel =
    accountStatus === ACCOUNT_STATUS.PROCESSING
      ? ACCOUNT_BUTTON.PROCESSING
      : ACCOUNT_BUTTON.NOT

  return (
    <div style={{ padding: 24 }}>
      <Flex justify="space-between">
        <Flex direction="column">
          <Text bold={true} style={{ whiteSpace: 'pre-wrap' }}>
            {title}
          </Text>
          <Spacing size={8} />
          <Button>{buttonLabel}</Button>
        </Flex>
        <Image
          src="https://cdn4.iconfinder.com/data/icons/business-and-finance-colorful-free-hand-drawn-set/100/money_dollars-512.png"
          alt=""
          width={80}
          height={80}
        />
      </Flex>
    </div>
  )
}

export default Account
