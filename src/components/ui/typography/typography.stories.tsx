import { Story, Meta } from '@storybook/react'

import { Typography, TypographyProps } from '@/components/ui/typography/typography.tsx'

const meta: Meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body_1',
        'subtitle_1',
        'body_2',
        'subtitle_2',
        'caption',
        'overline',
        'link_1',
        'link_2',
      ],
      control: { type: 'radio' },
    },
  },
}

export default meta

type TypographyStoryProps = TypographyProps & {
  children: string
}

const Template: Story<TypographyStoryProps> = args => {
  return (
    <Typography {...args} variant={args.variant}>
      <div style={{ display: 'flex' }}>
        <div style={{ color: 'white', fontSize: '30px', marginRight: '20px' }}>{args.variant}</div>
        <div
          style={{
            whiteSpace: 'pre-line',
          }}
        >
          {args.children}
        </div>
      </div>
    </Typography>
  )
}

// const content = 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH'
const content = `Carosserie Test Zürich
Stauffacherstrasse 31
8004 Zürich, ZH, CH`

export const Default: Story<TypographyStoryProps> = Template.bind({})
Default.args = {
  variant: 'large',
  children: content,
}
