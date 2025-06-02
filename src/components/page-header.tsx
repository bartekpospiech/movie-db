import { Heading, Stack, type StackProps, Text } from '@/ui'

export type PageHeaderProps = {
  headline: string
  description: string
  children?: React.ReactNode
} & StackProps

export const PageHeader = ({ headline, description, children, ...rootProps }: PageHeaderProps) => {
  return (
    <Stack gap={{ base: '6', md: '8' }} {...rootProps}>
      <Stack gap={{ base: '5', md: '6' }}>
        <Stack gap={{ base: '3', md: '4' }}>
          <Heading as="h1" textStyle={{ base: '5xl', md: '6xl' }}>
            {headline}
          </Heading>
        </Stack>
        <Text color="fg.muted" textStyle={{ base: 'lg', md: 'xl' }} maxW="3xl">
          {description}
        </Text>
      </Stack>
      {children}
    </Stack>
  )
}
