import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'

export const LoaderLinear = () => {
  return (
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress color="inherit" />
    </Stack>
  )
}
