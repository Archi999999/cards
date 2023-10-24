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
      d="M64.9999 36.7C59.7999 47.9 52.6999 47.9001 50.3999 47.9001C44.7999 47.9001 40.0999 44.4001 36.5999 37.4001C32.2999 29.0001 30.0999 16.4001 30.0999 0.900055C30.0999 0.700055 30.0999 0.500049 30.0999 0.300049H0.399902C0.399902 0.400049 0.399902 0.600058 0.399902 0.700058C0.599902 22.6001 5.09991 40.9001 13.4999 53.5001C22.1999 66.6001 34.5999 73.5001 49.3999 73.5001C65.6999 73.5001 78.9999 66.4001 87.8999 53.1001C96.1999 40.5001 100.5 22.7 100.7 0.300049H70.9999C70.8999 15.9 68.7999 28.5 64.9999 36.7Z"
      fill="#A280FF"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export { ForwardRef as ErrorZeroDown }
