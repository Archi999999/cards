import { SVGProps, Ref, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={437}
    height={18}
    viewBox="0 0 437 18"
    fill="none"
    ref={ref}
  >
    <path
      d="M436.885 0.592673L0.0852051 1.40796L0.116002 17.908L436.916 17.0927L436.885 0.592673Z"
      fill="#F5D100"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export { ForwardRef as ErrorRibbon }
