import { SVGProps, Ref, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    ref={ref}
  >
    <path
      d="M11.7066 14C11.6 14.0004 11.4949 13.9753 11.4 13.9267L7.99996 12.1467L4.59996 13.9267C4.48956 13.9847 4.36508 14.0106 4.24068 14.0015C4.11628 13.9923 3.99695 13.9484 3.89625 13.8748C3.79555 13.8012 3.71752 13.7008 3.67104 13.585C3.62456 13.4693 3.61148 13.3428 3.6333 13.22L4.29996 9.46667L1.5533 6.8C1.4676 6.71449 1.40681 6.60725 1.37745 6.4898C1.34809 6.37235 1.35126 6.24912 1.38663 6.13334C1.42527 6.01485 1.49635 5.90957 1.5918 5.82944C1.68725 5.74931 1.80325 5.69754 1.92663 5.68L5.72663 5.12667L7.39996 1.70667C7.45455 1.59396 7.53979 1.4989 7.6459 1.43239C7.75202 1.36587 7.87473 1.3306 7.99996 1.3306C8.1252 1.3306 8.24791 1.36587 8.35402 1.43239C8.46014 1.4989 8.54537 1.59396 8.59996 1.70667L10.2933 5.12L14.0933 5.67334C14.2167 5.69087 14.3327 5.74265 14.4281 5.82278C14.5236 5.90291 14.5947 6.00819 14.6333 6.12667C14.6687 6.24245 14.6718 6.36568 14.6425 6.48313C14.6131 6.60058 14.5523 6.70782 14.4666 6.79334L11.72 9.46L12.3866 13.2133C12.4104 13.3383 12.398 13.4675 12.3507 13.5856C12.3035 13.7038 12.2234 13.8059 12.12 13.88C11.9992 13.9646 11.8539 14.0068 11.7066 14ZM7.99996 10.7333C8.10683 10.7306 8.21255 10.7559 8.30663 10.8067L10.82 12.14L10.34 9.33334C10.3213 9.22617 10.3292 9.11607 10.3629 9.01265C10.3966 8.90923 10.4551 8.81563 10.5333 8.74L12.5333 6.78667L9.7333 6.37334C9.63062 6.35267 9.53426 6.30809 9.45202 6.24323C9.36979 6.17837 9.30399 6.09504 9.25996 6L7.99996 3.5L6.73996 6C6.69173 6.09581 6.62109 6.17856 6.53405 6.24123C6.447 6.3039 6.34612 6.34465 6.23996 6.36L3.43996 6.77334L5.43996 8.72667C5.51815 8.80229 5.57664 8.8959 5.61034 8.99932C5.64404 9.10274 5.65192 9.21284 5.6333 9.32L5.1533 12.0933L7.66663 10.76C7.77313 10.7204 7.88853 10.7112 7.99996 10.7333Z"
      fill="#E6AC39"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export { ForwardRef as Star }
