export default function PhotonMark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`photon-mark shrink-0 overflow-visible ${className}`}
      width="26"
      height="26"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="photonGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--photon-from)" />
          <stop offset="1" stopColor="var(--photon-to)" />
        </linearGradient>
        <filter id="photonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.6" result="b" />
          <feComposite in="SourceGraphic" in2="b" operator="over" />
        </filter>
      </defs>

      <circle
        cx="24"
        cy="24"
        r="4.5"
        className="fill-violet-600 dark:fill-indigo-400"
        filter="url(#photonGlow)"
      />

      <g fill="none">
        <ellipse
          cx="24"
          cy="24"
          rx="19"
          ry="8"
          transform="rotate(-26 24 24)"
          className="stroke-gray-300 opacity-50 dark:stroke-gray-600"
        />
        <ellipse
          cx="24"
          cy="24"
          rx="19"
          ry="8"
          transform="rotate(46 24 24)"
          className="stroke-gray-300 opacity-50 dark:stroke-gray-600"
        />
        <ellipse
          cx="24"
          cy="24"
          rx="19"
          ry="8"
          transform="rotate(-26 24 24)"
          pathLength={100}
          stroke="url(#photonGrad)"
          filter="url(#photonGlow)"
          className="photon-beam photon-beam-1"
        />
        <ellipse
          cx="24"
          cy="24"
          rx="19"
          ry="8"
          transform="rotate(46 24 24)"
          pathLength={100}
          stroke="url(#photonGrad)"
          filter="url(#photonGlow)"
          className="photon-beam photon-beam-2"
        />
      </g>
    </svg>
  )
}
