import { SVGProps, Ref, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={109}
    height={143}
    viewBox="0 0 109 143"
    fill="none"
    ref={ref}
  >
    <path
      d="M102.1 80.9001H89.8999V6.1001V0.100098H83.8999H64.8999H61.7999L59.9999 2.7001L1.99991 85.8001L0.899902 87.4001V89.3001V100.9V106.9H6.8999H61.2999V136.3V142.3H67.2999H83.8999H89.8999V136.3V106.9H102.1H108.1V100.9V86.9001V80.9001H102.1ZM36.1999 80.9001L61.2999 46.0001V80.9001H36.1999Z"
      fill="#A280FF"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export { ForwardRef as ErrorFour }
