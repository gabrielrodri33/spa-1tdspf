import reactLogo from "../assets/react.svg"

export default function Conteudo(props) {

    let reactLogoAlt = "React Logo";

  return (
    <>
        <section>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nam tenetur mollitia ullam numquam, animi architecto magnam maiores beatae? Quaerat nesciunt rem distinctio voluptas veritatis iure impedit omnis quia perspiciatis!</p>
                <p>Autem voluptates laborum repellat rem, corporis ad. Earum officia vitae quibusdam doloremque repudiandae ducimus mollitia accusamus voluptatem reprehenderit quas dolorum quae, velit pariatur nulla modi assumenda iste minus aspernatur. Dicta.</p>
                <p>Aut voluptate praesentium corporis non explicabo asperiores eos laudantium veniam fuga quidem repudiandae obcaecati illum, dicta nemo excepturi dignissimos distinctio velit cupiditate voluptatibus! Laboriosam harum, ipsa cum temporibus qui suscipit?</p>
                <img src={reactLogo} alt={reactLogoAlt} />
                <img src={props.viteLogoProps} alt={props.viteLogoAltProps} />
            </div>
        </section>
    </>
  )
}
