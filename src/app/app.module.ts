import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavigationComponent } from './components/template/navigation/navigation.component';
import { HomeComponent } from './views/home/home.component';
import { RouterModule } from '@angular/router';
import { PessoaComponent } from './views/pessoa/pessoa.component';
import { ForDirective } from './directives/for.directive';
import { MenuComponent } from './components/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ImportarPlanilhaComponent } from './views/importar-planilha/importar-planilha.component';
import { VendaComponent } from './views/venda/venda.component';
import { TrocaComponent } from './views/troca/troca.component';
import { CadastroPessoaComponent } from './views/cadastro-pessoa/cadastro-pessoa.component';
import { CadastroProdutoComponent } from './views/cadastro-produto/cadastro-produto.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    ForDirective,
    HomeComponent,
    MenuComponent,
    VendaComponent,
    TrocaComponent,
    HeaderComponent,
    FooterComponent,
    PessoaComponent,
    DashboardComponent,
    NavigationComponent,
    CadastroPessoaComponent,
    CadastroProdutoComponent,
    ImportarPlanilhaComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
