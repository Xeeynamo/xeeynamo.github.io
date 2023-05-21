import { Link } from 'react-router-dom'

export default function Who() {
  return (
    <div>
      <h1>Who I am</h1>
      <p>
        I am Luciano, also well known as Xeeynamo.
        I am a Software Enginneer and software is what I create both at work and in my spare time.
        It is one of my favourite activities as it gives me room of expression, creativity and challenge.
      </p>
      <p>
        My area of expertise is back-end development with high proficiency of building small and scalable concurrent servics on the cloud.
        I used to write front-end too, from ReactJS to the now deprecated .NET Desktop Development.
        I like designing and developing what lies under the hood, where ambiguity and technicalities comes to play.
        I am programming-language agnostic and I frequently switch between C, C#, Golang, JavaScript and Python to maintain the mind fresh.
        Recently I am developing interest into LLMs.
      </p>
      <p>
        A hobby I have is reverse engineering. I do it with software and videogames to understand how they work under the hood.
        I can read and write assembly (mainly MIPS and 65C02) and use professional tools like IDA, Ghidra and GNU collection.
        You will find various pubblications in the <Link to="/projects">Projects</Link> section.
        I also like to reverse things other than software like hardware, electronics or even good food.
      </p>
      <p>
        I manage two portfolios fully invested into equities, one in ETFs and the other one in individual stocks.
        For individual stocks I do not expect to consistently beat the market but to learn over time how to capitalise from the best businesses in the world.
        You can peak at my <a href="https://investengine.com/share/portfolio/0703fe9fe62c1c8e029fdba9e0c35033cf44de66/">public ETF portfolio</a>.
      </p>
      <p>
        I love practicing sports. One of the most recent ones I got hooked into that combines physical exercise, videogames and social interactions is <a href="https://www.youtube.com/results?search_query=pump+it+up+tournament">Pump It Up</a>.
        To not be confused with DDR, this Korean-made rythmic game involves focus, technique and pattern recognition.
        I usually play at the arcades in London and I am currently at level S15/D14.
        You can play with an <a href="https://piulin.github.io/piured/">open-source online simulator</a> if you are curious.
      </p>
      <p>
        I am trying to learn how to play the piano, but time constraints do not allow me to practice consistently.
        The artists Nobuo Uemastu, Jon Lord and Jordan Rudess produced my greatest music inspirations. I am a frequent traveler and I plan to keep exploring Europe, East and South Asia. I might visit Centre and South America in the future.
        I recently re-discovered books, especially now that I am trying hard to avoid wasteful distractions.
      </p>
    </div>
  );
}
