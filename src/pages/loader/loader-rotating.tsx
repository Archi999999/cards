import { RotatingLines } from 'react-loader-spinner'

import styles from './loader.module.scss'

export const LoaderRotating = () => {
  return (
    <div className={styles.loading}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  )
}
