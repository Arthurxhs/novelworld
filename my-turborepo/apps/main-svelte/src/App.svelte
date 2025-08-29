

<div class="main-container">
  <header>
    <h1>NovelWorld</h1>
    <nav>
      <button>Inicio</button>
      <button>Generos</button>
      <button>Iniciar</button>
    </nav> 
  </header>
  <main>
    <section>
      <h2>Novelas Populares</h2>
      <div class="novel-container">
        <div class="novela">
          <div class="uno contenido-novela"><h3>Novela</h3></div>
          <div class="dos contenido-novela"><p>Descripcion</p></div>
        </div>
        <div class="novela">novela</div>
        <div class="novela">novela</div>
        <div class="novela">novela</div>
        <div class="novela">novela</div>
        <div class="novela">novela</div>
      </div>
    </section>
  </main>
  <footer></footer>
</div>

<style>

  .main-container {
    margin: 0;
  }

  h1 {
    margin: 0;
  }


  header {
    position: fixed;
    top:0 ;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    alight-items: center;
    justify-content: space-between;
    padding: 10px 25px;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: end;
    space-x: 10px;
  }

  main {
    width: 80vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section {
    height: 70%;
    width: 95%;
    display: flex;
    flex-direction: column;
  }

  .novel-container {
    display:flex;
    flex-direction: row;
    width: 100%;
    height: 70%;
    gap: 10px;
  }
/*tener en cuenta que siempre que hago un div con 100% se le suma el paddin y el margin por eso debemos usar la propiedad */
  .novela {
    background: black;
    flex: 1;
    padding: 10px;
    height: 100%;
    width: auto;
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    gap: 5px;
  }

  .novela:hover {
    background: red;
  }

  .contenido-novela {
  }

  .uno {
    width: 100%
    height 10%
    padding: 0;
    margin: 0;
  }

  .dos {
    font-size: smaller;
    margin-top: 15px;
    width: 100%
    height: 90%
  }
</style>