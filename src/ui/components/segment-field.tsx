import { Field, SegmentGroup } from '@chakra-ui/react'

type Options = Array<{ label: React.ReactNode; value: string }>

type BaseFieldProps = {
  name: string
  invalid?: boolean
  disabled?: boolean
}

type SegmentFieldProps = {
  options: Options
  defaultValue?: string
  onChange?: (event: string) => void
} & BaseFieldProps

export function SegmentField(props: SegmentFieldProps) {
  const { name, invalid, disabled, options, defaultValue, onChange } = props
  return (
    <Field.Root orientation="horizontal" invalid={invalid} disabled={disabled}>
      <SegmentGroup.Root
        name={name}
        defaultValue={defaultValue}
        size="sm"
        flex="1"
        onValueChange={e => onChange?.(e.value ?? '')}
        bgColor="white"
      >
        <SegmentGroup.Indicator bgColor="bg.muted" shadow="md" />
        <SegmentGroup.Items items={options} flex="1" justifyContent="center" px="2" />
      </SegmentGroup.Root>
    </Field.Root>
  )
}
