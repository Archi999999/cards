import { SVGProps, Ref, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={186}
    height={13}
    viewBox="0 0 186 13"
    fill="none"
    ref={ref}
  >
    <path
      d="M183 0.600098H3.50006C2.00006 0.600098 0.800049 1.80008 0.800049 3.30008V10.3001C0.800049 11.8001 2.00006 13.0001 3.50006 13.0001H183C184.5 13.0001 185.7 11.8001 185.7 10.3001V3.30008C185.7 1.80008 184.5 0.600098 183 0.600098Z"
      fill="#455A64"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export { ForwardRef as ErrorRectangle }
