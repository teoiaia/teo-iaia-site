export default function Home() {
  return (
    <main style={{fontFamily:"sans-serif", background:"#fff", color:"#111"}}>
      <div style={{display:"flex", minHeight:"100vh", padding:"40px", gap:"40px"}}>

        <div style={{flex:1}}>
          <p style={{letterSpacing:"2px", fontSize:"12px", color:"#666"}}>
            TEO IAIA · Fotografia analogica e ricerca visiva
          </p>

          <h1 style={{fontSize:"48px", marginTop:"20px"}}>
            TEO IAIA
          </h1>

          <blockquote style={{marginTop:"20px", borderLeft:"2px solid #ccc", paddingLeft:"10px", color:"#555"}}>
            “Non fai solo una fotografia con una macchina fotografica. Tu metti nella fotografia tutte le immagini che hai visto, i libri che hai letto, la musica che hai sentito e le persone che hai amato.”
            <br/>
            <small>— Ansel Adams</small>
          </blockquote>

          <div style={{marginTop:"30px"}}>
            <a href="#portfolio" style={{marginRight:"10px"}}>Portfolio</a>
            <a href="#contatti">Contatti</a>
          </div>
        </div>

        <div style={{flex:1}}>
          <img src="/hero.jpg" style={{width:"100%"}}/>
        </div>

      </div>

      <section id="portfolio" style={{padding:"40px"}}>
        <h2>Portfolio</h2>
        <p>Polaroid · Analogico · Progetti</p>
      </section>

      <section id="bio" style={{padding:"40px"}}>
        <h2>Bio</h2>
        <p>
          Fotografo attivo dal 2013, il lavoro si sviluppa attorno a fotografia analogica,
          Polaroid e ricerca visiva.
        </p>
      </section>

      <section id="contatti" style={{padding:"40px", background:"#111", color:"#fff"}}>
        <h2>Contatti</h2>
        <p>teodoroiaia@gmail.com</p>
      </section>

    </main>
  );
}
