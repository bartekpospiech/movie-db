import { Divider, Text } from '@/ui'

type TitleProps = {
  headline: string
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm'
}

export const Title = ({ headline, size = '2xl' }: TitleProps) => (
  <Divider>
    <Text fontSize={size} fontWeight="bold" color="fg.default">
      {headline}
    </Text>
  </Divider>
)
