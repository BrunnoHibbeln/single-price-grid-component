import JoinArticle from './components/JoinArticle'
import MonthlyArticle from './components/MonthlyArticle'
import WhyUsArticle from './components/WhyUsArticle'

export default function Home() {
  return (
    <main className="mx-8 grid w-full grid-flow-row overflow-hidden rounded-xl bg-white shadow-xl shadow-slate-400 duration-500 xl:w-3/5 xl:grid-rows-2 2xl:w-2/5">
      <section className="bg-white xl:col-span-2">
        <JoinArticle />
      </section>
      <section className="bg-cyan">
        <MonthlyArticle />
      </section>
      <section className="bg-cyan/90">
        <WhyUsArticle />
      </section>
    </main>
  )
}
