import { SVGProps, Ref, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={101}
    height={74}
    viewBox="0 0 101 74"
    fill="none"
    ref={ref}
  >
    <path
      d="M88.8999 20.2001C80.2999 7.0001 67.5999 0.100098 51.9999 0.100098C36.5999 0.100098 23.6999 7.0001 14.4999 20.1001C5.49994 32.9001 0.799951 51.3001 0.699951 73.3001H30.3999C30.4999 57.6001 32.7999 44.8001 37.2 36.3001C40.7999 29.3001 45.4999 25.7001 50.8999 25.7001C58.4999 25.7001 71.2999 31.8001 71.2999 72.7001C71.2999 72.9001 71.2999 73.1001 71.2999 73.3001H101C101 72.8001 101 72.4001 101 71.9001C101.1 50.1001 96.9999 32.6001 88.8999 20.2001Z"
      fill="#A280FF"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export { ForwardRef as ErrorZeroUp }
