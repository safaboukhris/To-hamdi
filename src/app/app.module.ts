import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { ReinitialisationDuMotDePasseComponent } from './reinitialisation-du-mot-de-passe/reinitialisation-du-mot-de-passe.component';
import { ConfirmationDeCommandeComponent } from './confirmation-de-commande/confirmation-de-commande.component';
import { SupFooterComponent } from './sup-footer/sup-footer.component';
import { ConfirmationDexpeditionComponent } from './confirmation-dexpedition/confirmation-dexpedition.component';
import { FactureCommandeComponent } from './facture-commande/facture-commande.component';
import { RetourCommandeComponent } from './retour-commande/retour-commande.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { CarteVisite2Component } from './carte-visite2/carte-visite2.component';
import { CarteVisiteNoirComponent } from './carte-visite-noir/carte-visite-noir.component';
import { CarteVisiteNoir2Component } from './carte-visite-noir2/carte-visite-noir2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTitleComponent,
    ReinitialisationDuMotDePasseComponent,
    ConfirmationDeCommandeComponent,
    SupFooterComponent,
    ConfirmationDexpeditionComponent,
    FactureCommandeComponent,
    RetourCommandeComponent,
    CarteVisiteComponent,
    CarteVisite2Component,
    CarteVisiteNoirComponent,
    CarteVisiteNoir2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
