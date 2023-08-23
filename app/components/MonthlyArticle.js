export default function MonthlyArticle() {
  return (
    <article className="flex flex-col gap-4 p-8 text-xl text-white xl:p-14">
      <h2 className="text-xl font-bold xl:text-2xl">Monthly Subscription</h2>

      <section className="flex flex-row items-center gap-4">
        <strong className="text-4xl font-bold">$ 29</strong>
        <h3 className="text-base font-normal text-light-gray xl:text-xl">
          per month
        </h3>
      </section>
      <p className="text-lg font-normal lg:text-lg xl:text-xl">
        Full access for less than $1 a day
      </p>
      <button className="rounded-lg bg-bright-yellow py-3 text-lg font-bold shadow-2xl shadow-slate-600 hover:bg-bright-yellow/90 xl:mt-10 xl:py-4 xl:text-xl">
        Sign Up
      </button>
    </article>
  )
}
