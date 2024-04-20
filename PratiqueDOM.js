
class InstrumentoMusical {
    constructor(nome) {
      if (new.target === InstrumentoMusical) {
        throw new Error("Não é possível instanciar uma classe abstrata.");
      }
      this.nome = nome;
    }
  

    tocar() {
      throw new Error("O método tocar deve ser implementado pelas classes filhas.");
    }
  }
  

  class Violao extends InstrumentoMusical {
    tocar() {
      return "Tocando acordes no violão.";
    }
  }
  

  class Piano extends InstrumentoMusical {
    tocar() {
      return "Tocando notas no piano.";
    }
  }

  class Flauta extends InstrumentoMusical {
    tocar() {
      return "Tocando melodias na flauta.";
    }
  }

  const violao = new Violao("Violão");
  const piano = new Piano("Piano");
  const flauta = new Flauta("Flauta");

  console.log(flauta.nome + ": " + flauta.tocar());
  console.log(violao.nome + ": " + violao.tocar());
  console.log(piano.nome + ": " + piano.tocar());
  