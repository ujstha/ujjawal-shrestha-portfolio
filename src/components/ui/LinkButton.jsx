export const LinkButton = ({ variant, children, ...props }) => {
  return (
    <a
      className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-white/[0.1]${variant === "outline" ? " " : " bg-[linear-gradient(110deg,#00031a,45%,#1e2631,55%,#00031a)] bg-[length:200%_100%] "}px-6 font-medium text-white transition-colors focus:outline-none hover:border-accent focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}
      {...props}
    >
      {children}
    </a>
  )
}
