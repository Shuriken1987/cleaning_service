const introText =  `Vi har bedrivit vår verksamhet sedan 1993 och ständigt växt för att expandera vårt utbud av tjänster
                    för våra kunder. Vad som började som en liten städfirma i Helsingborg har nu expanderat till ett
                    industriledande städföretag med spetskompetens inom industristädning och livsmedels städning. Med
                    flertal kontor runt om i landet och tusentals städuppdrag varje månad, så har vi etablerat oss som
                    en organisation som kan bemöta alla krav som våra kunder ställer på oss.`

const Intro = () => {

    return (
        <section className="intro text-center">
            <h1 className="headline">Städföretaget i hela Sverige</h1>
            <article className="text">
                <h4>{introText}</h4>
            </article>
        </section>
    )
}
export default Intro;