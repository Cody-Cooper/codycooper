export default function PageTitle({ children }) {
  return (
    <h1 className="align-center text-4xl lowercase leading-[1] tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h1>
  )
}
