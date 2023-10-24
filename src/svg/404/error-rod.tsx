import { SVGProps, Ref, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={97}
    viewBox="0 0 19 97"
    fill="none"
    ref={ref}
  >
    <path
      d="M13.1265 18.1935L5.62646 18.2075L5.77371 97.0075L13.2737 96.9935L13.1265 18.1935Z"
      fill="#37474F"
    />
    <path
      d="M0.299805 93.7V94.6C0.299805 95.9 1.3998 97 2.6998 97H16.4998C17.7998 97 18.8998 95.9 18.8998 94.6V93.7H0.299805Z"
      fill="#37474F"
    />
    <path d="M13.3998 90.1001H5.7998L0.299805 93.7001H18.9998L13.3998 90.1001Z" fill="#455A64" />
    <path
      d="M13.3999 90.1L13.1999 18.2H10.3999L10.5999 90.1L13.2999 93.7V94.6C13.2999 95.9 12.1999 97 10.8999 97H16.5999C17.8999 97 18.9999 95.9 18.9999 94.6V93.7L13.3999 90.1Z"
      fill="url(#paint0_linear_2_5484)"
    />
    <path
      d="M18.4998 9.09999C18.4998 4.09999 14.3998 0 9.3998 0C4.3998 0 0.299805 4.09999 0.299805 9.09999C0.299805 14.1 4.3998 18.2 9.3998 18.2C14.3998 18.2 18.4998 14.1 18.4998 9.09999Z"
      fill="#E53935"
    />
    <path
      d="M9.39975 18.1999C14.3997 18.1999 18.4998 14.0999 18.4998 9.09995C18.4998 7.49995 18.0998 5.99995 17.2998 4.69995L4.99976 17C6.29976 17.7 7.79975 18.1999 9.39975 18.1999Z"
      fill="url(#paint1_linear_2_5484)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2_5484"
        x1={-10.3044}
        y1={48.1345}
        x2={51.6432}
        y2={74.3235}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.00065435} stopColor="white" stopOpacity={0} />
        <stop offset={1} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2_5484"
        x1={11.7009}
        y1={1.2249}
        x2={11.7361}
        y2={19.7445}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.00065435} stopColor="white" stopOpacity={0} />
        <stop offset={1} />
      </linearGradient>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export { ForwardRef as ErrorRod }
