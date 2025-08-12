// common/SpinnerLoader.js
import "./spinner-loader.css";
export default function SpinnerLoader() {
  return (
    <div className="inset-0 z-50 backdrop-blur-sm spinner-container">
      {/* <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" /> */}
      <div className="spinner-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="106"
          height="20"
          fill="#fff"
          viewBox="0 0 170 25.16"
        >
          <path
            fill="#E4002B"
            d="M13.49 0h29.68L28.94 16h-7.32L30.9 5.56H8.58L13.47 0"
          />
          <path
            fill="#E4002B"
            d="M29.71 25.16H0l14.25-16h7.35l-9.33 10.46h22.35z"
          />
          <path d="M62.27 6.16H49.64l3.14-3.5h17.69L56.3 19h13.17l-2.28 3.5H48.1zM77.7 22.5a5.84 5.84 0 0 1-5.83-5.83V8.49a5.62 5.62 0 0 1 1.71-4.12 5.62 5.62 0 0 1 4.12-1.71h8.17A5.62 5.62 0 0 1 90 4.37a5.62 5.62 0 0 1 1.7 4.12v8.17a5.84 5.84 0 0 1-5.83 5.83Zm-2.33-5.83A2.33 2.33 0 0 0 77.7 19h8.17a2.33 2.33 0 0 0 2.33-2.33V8.49a2.33 2.33 0 0 0-2.33-2.33H77.7a2.33 2.33 0 0 0-2.33 2.33ZM101.17 22.5a5.84 5.84 0 0 1-5.83-5.83V8.49A5.62 5.62 0 0 1 97 4.37a5.62 5.62 0 0 1 4.12-1.71h8.17a5.62 5.62 0 0 1 4.12 1.71 5.62 5.62 0 0 1 1.71 4.12v8.17a5.84 5.84 0 0 1-5.83 5.83Zm-2.33-5.83a2.33 2.33 0 0 0 2.33 2.33h8.17a2.33 2.33 0 0 0 2.33-2.33V8.49a2.33 2.33 0 0 0-2.33-2.33h-8.17a2.33 2.33 0 0 0-2.33 2.33ZM143.52 2.66h3.5v19.83h-3.5zM161.83 6.16V22.5h-3.5V6.16h-8.17v-3.5H170v3.5zM136.21 2.66l-6.89 6.69-6.88-6.69h-3.62V22.5h3.5V7.19l7 6.64 7-6.64V22.5h3.5V2.66z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
          <g
            fill="var(--primary-1)"
            className="animated-three-dots_svg__nc-loop-dots-3-32-icon-f"
          >
            <circle cx="4" cy="16" r="3" />
            <circle cx="16" cy="16" r="3" />
            <circle cx="28" cy="16" r="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}
