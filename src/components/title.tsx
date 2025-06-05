import { Divider, Text } from '@/ui'

type TitleProps = {
  headline: string
}

export const Title = ({ headline }: TitleProps) => (
  <Divider>
    <Text fontSize="2xl" fontWeight="bold" color="fg.default">
      {headline}
    </Text>
  </Divider>
)
