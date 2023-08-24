import JoinArticle from './components/JoinArticle'
import MonthlyArticle from './components/MonthlyArticle'
import WhyUsArticle from './components/WhyUsArticle'

export default function Home() {
  return (
    <main className="mx-8 grid w-full overflow-hidden rounded-xl bg-white shadow-xl shadow-slate-400 duration-500 lg:flex lg:h-min lg:w-[58rem] lg:grid-rows-2 lg:flex-col">
      <section>
        <JoinArticle />
      </section>
      <section className="lg:flex lg:flex-row">
        <MonthlyArticle />
        <WhyUsArticle />
      </section>
    </main>
  )
}
