import { Typography } from '@/components/ui/typography/typography.tsx'

export const UserHeader = () => {
  const name = 'Ivan'
  const style = { verticalAlign: 'super', borderBottom: 'dashed 1px' }

  return (
    <div>
      <Typography variant={'subtitle_1'} style={style}>
        {name}
      </Typography>
      {/*<div*/}
      {/*  style={{*/}
      {/*    backgroundColor: 'white',*/}
      {/*    borderRadius: '50%',*/}
      {/*    width: '36px',*/}
      {/*    height: '36px',*/}
      {/*    display: 'inline-block',*/}
      {/*  }}*/}
      {/*></div>*/}
    </div>
  )
}
