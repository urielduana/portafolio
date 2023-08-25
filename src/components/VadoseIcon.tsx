interface Props {
  size?: number;
}

function VadoseIcon({ size = 36 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 42.333 42.333"
    >
      <g>
        <g
          fillOpacity="1"
          stroke="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4.5"
          display="inline"
          paintOrder="markers stroke fill"
          transform="translate(-2.72 -140.407)"
        >
          <rect
            width="42.337"
            height="42.333"
            x="2.717"
            y="140.407"
            fill="#000"
            strokeWidth="0.305"
            display="inline"
            rx="4.46"
            ry="4.695"
          ></rect>
          <g fill="#f2f2f2" strokeWidth="0.206">
            <path d="M37.268 150.51a2.285 2.285 0 00-3.126.818L22.245 171.65a2.285 2.285 0 00.817 3.126 2.285 2.285 0 003.126-.817l11.897-20.323a2.285 2.285 0 00-.817-3.126z"></path>
            <path d="M11.603 149.914a2.285 2.285 0 00-1.018.318 2.285 2.285 0 00-.79 3.134l4.415 7.39-.003.002 2.76 4.62a2.285 2.285 0 003.133.79 2.285 2.285 0 00.79-3.134l-.524-.876.003-.002-6.65-11.134a2.285 2.285 0 00-2.116-1.108zm6.868 17.177l-.353.208.009.015z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default VadoseIcon;
