import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeng-formulario';

  // campos do formulário:
  nome = '';

  sobrenome ='';

  cadastrar() {
    alert('Pessoa Fisica ' + this.nome + ' cadastrada');
    }
}
