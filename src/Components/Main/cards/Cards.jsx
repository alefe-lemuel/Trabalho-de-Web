import ImagemJogadores from './download.jpg'
import ImagemJogo from './cyberpunk-2077.png'
import WillSmith from './p13-220329-309.jpg'
import Cats from './cats.jpg'
import Lovecraft from './lovecraft.jpg'
import Saitama from './saitama-goku.jpg'
import Michael from './michael-jackson.webp'
import EAJ from './eaj2.jpg'
import Trofeu from './trofeu.jpg'

export const Card01 = () => {
  return(
    <article className="card">
      <figure>
        <img className='image' src={ImagemJogadores}/>
      <h2 className="h2">Renato Russo virou professor</h2>
      <p className='paragrafo'>Renato Russo foi encontrado lecionando em Jundiaí: "Decidi expandir meus conhecimentos", respondeu Renato Russo ao ser perguntado o motivo de escolher ensinar em uma área tão distante da música.</p>
      </figure>
    </article>
  )
}

export const Card02 = () => {
  return(
    <article className="card">
      <figure>
        <img className='image' src={ImagemJogo}/>
      <h2 className="h2">O sucesso da CD Projekt</h2>
      <p className='paragrafo'>Cyberpunk 2077, novo jogo da empresa CD Projekt venceu o Game of the Year, o sucesso de lançamento foi muito elogiado pela crítica por sua excelente gameplay e história...</p>
      </figure>
    </article>
  )
}
export const Card03 = () => {
  return(
    <article className="card">
      <figure>
        <img className='image' src={WillSmith}/>
      <h2 className="h2">Will Smith leva tapa de Chris Rock</h2>
      <p className='paragrafo'>O astro Will Smith estava discursando quando de repente Chris Rock surgiu e o atacou, o motivo parece ter sido uma piada que Will fez ao se referir a Chris Rock como "Suco de fruta"</p>
      </figure>
    </article>
  )
}
export const Card04 = () => {
  return(
    <article className="card">
      <figure>
        <img className='image' src={Cats}/>
      <h2 className="h2">Cats ganha Oscar de melhor filme</h2>
      <p className='paragrafo'>O belíssimo filme aplaudido de pé por duas horas e treze segundos na França e aclamado pela crítica, venceu 8 Oscars na noite, sendo dentre um deles, o de Melhor Filme.</p>
      </figure>
    </article>
  )
}

export const Card01_aside = () => {
  return(
    <article className="card_aside">
      <figure>
        <img className='image_aside' src={Lovecraft}/>
      <h2 className="h2_aside">Lovecraft se une ao movimento Black Lives Matter</h2>
      <p className='paragrafo_aside'>O famoso autor de livros infantis, H.P.Lovecraft anunciou no Twitter sua repúdia a brutalidade policial à comunidade negra: "Não devemos normalizar esse tipo de comportamento, temos que lutar"; O escritor já se mostrou bastante presente em movimentos sociais nos últimos anos.</p>
      </figure>
    </article>
  )
}

export const Card02_aside = () => {
  return(
    <article className="card_aside">
      <figure>
        <img className='image_aside' src={Saitama}/>
      <h2 className="h2_aside">Saitama enfrenta Goku em novo trailer da Marvel</h2>
      <p className='paragrafo_aside'>Nova produção do estúdio Marvel da Disney após a compra do Japão, o trailer mostra o tão aguardado duelo com dezenas de vídeos na internet que imaginam como seria esse confronto. Atualmente o trailer já possui 1 bilhão de visualizações.</p>
      </figure>
    </article>
  )
}

export const Card03_aside = () => {
  return(
    <article className="card_aside">
      <figure>
        <img className='image_aside' src={Michael}/>
      <h2 className="h2_aside">Michael Jackson derrota Harry Styles em luta de Boxe</h2>
      <p className='paragrafo_aside'>O desafio de quem levaria a coroa de rei do pop, é vencido pela décima segunda vez seguida por Michael Jackson, o astro permanece invicto após a luta contra Harry Styles. Harry segue com uma série de derrotas mesmo sendo vencedor por três anos seguintes do "Framboesa de Ouro" de pior ator.</p>
      </figure>
    </article>
  )
}

export const Card04_aside = () => {
  return(
    <article className="card_aside">
      <figure>
        <img className='image_aside' src={EAJ}/>
      <h2 className="h2_aside">Alunos do EAJ fazem manifestação</h2>
      <p className='paragrafo_aside'>Por 2 horas os alunos fecharam a BR-226 com cartazes exigindo ônibus de luxo para o transporte dos estudantes, a manifestação se encerrou quando foi perguntado aos alunos se eles sabiam se 10 era menor igual a 9. Nenhum deles respondeu, e foram embora envergonhados.</p>
      </figure>
    </article>
  )
}

export const Card05_aside = () => {
  return(
    <article className="card_aside">
      <figure>
        <img className='image_aside' src={Trofeu}/>
      <h2 className="h2_aside">Site Fake News vence pela terceira vez o prêmio de site mais compartilhado no Whatsapp</h2>
      <p className='paragrafo_aside'>Nosso site atingiu altos picos durante a época da Eleição 2022, e estamos felizes de continuar trazendo notícias curtas e verídicas para deixar seu dia cada vez mais informado </p>
      </figure>
    </article>
  )
}