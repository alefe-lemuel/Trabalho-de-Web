import { AreaMain } from "./styled";
import { Card01, Card02, Card03, Card04, Card01_aside,Card02_aside,Card03_aside, Card04_aside, Card05_aside}  from "./cards/Cards";

export default () => {
  return(
    <AreaMain>
      <main>
        <section className="container">
          <article className="subcontainer">
            <Card03 />
            <Card02 />
            <Card01 />
            <Card04 />
          </article>
          <aside className="aside">
            <article id="ultimas">
            <h2>Ultimas</h2>
            <Card01_aside />
            <Card02_aside />
            <Card03_aside />
            </article>
            <article>
              <h2 id="politica">politica
              </h2>
              <Card01_aside />
              <Card04_aside />
              <Card05_aside />
            </article>
            <article id="eleicoes">
              <h2>Eleições</h2>
            </article>
          </aside>
        </section>
      </main>
    </AreaMain>
  );
}