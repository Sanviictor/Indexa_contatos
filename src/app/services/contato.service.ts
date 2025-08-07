import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: Contato[] = [];

  private contatosPadrao: Contato[] = [
    { id: 1, nome: 'Ana', telefone: '29 278869420' },
    { id: 2, nome: 'Antônio', telefone: '38 128451235' },
    { id: 3, nome: 'Ágata', telefone: '38 128451235' },
    { id: 4, nome: 'Bruno', telefone: '95 695521583' },
    { id: 5, nome: 'Beatriz', telefone: '25 854986459' },
    { id: 6, nome: 'Carlos', telefone: '94 543197849' },
    { id: 7, nome: 'Cláudia', telefone: '31 176437098' },
    { id: 8, nome: 'Daniel', telefone: '56 613692441' },
    { id: 9, nome: 'Diana', telefone: '16 670764734' },
    { id: 10, nome: 'Eduardo', telefone: '71 962784210' },
    { id: 11, nome: 'Eliana', telefone: '94 601212586' },
    { id: 12, nome: 'Fabio', telefone: '21 613882845' },
    { id: 13, nome: 'Giovana', telefone: '82 836752948' },
    { id: 14, nome: 'Henrique', telefone: '16 326607223' },
    { id: 15, nome: 'Helena', telefone: '58 696978253' },
    { id: 16, nome: 'Igor', telefone: '46 316441802' },
    { id: 17, nome: 'Isabela', telefone: '81 103125769' },
    { id: 18, nome: 'João', telefone: '76 316563452' },
    { id: 19, nome: 'Juliana', telefone: '86 121042222' },
    { id: 20, nome: 'Kleber', telefone: '16 333519686' },
    { id: 21, nome: 'Karina', telefone: '74 580566400' },
    { id: 22, nome: 'Lucas', telefone: '89 371256434' },
    { id: 23, nome: 'Lúcia', telefone: '65 716464295' },
    { id: 24, nome: 'Marcelo', telefone: '45 973219600' },
    { id: 25, nome: 'Mariana', telefone: '59 324639597' },
    { id: 26, nome: 'Nelson', telefone: '66 918277590' },
    { id: 27, nome: 'Paulo', telefone: '88 337812653' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const contatosLocalStorageString = localStorage.getItem('contatos');
      const contatosLocalStorage = contatosLocalStorageString
        ? JSON.parse(contatosLocalStorageString)
        : null;

      this.contatos = contatosLocalStorage || this.contatosPadrao;

      // Atualizar o localStorage caso esteja vazio
      if (!contatosLocalStorageString) {
        localStorage.setItem('contatos', JSON.stringify(this.contatos));
      }
    } else {
      // fallback em ambiente não-browser
      this.contatos = this.contatosPadrao;
    }
  }

  obterContatos(): Contato[] {
    return this.contatos;
  }

  salvarContatos(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('contatos', JSON.stringify(this.contatos));
    }
  }
}
