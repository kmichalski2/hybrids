import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesListComponent} from './ui/games-list/games-list.component';
import {HttpGetGamesService} from "./infrastructure/http-get-games.service";
import {HttpClientModule} from "@angular/common/http";
import {MyGamesListComponent} from "./ui/my-games-list/my-games-list.component";
import {RouterModule, Routes} from "@angular/router";
import {CardComponent} from "./ui/card/card.component";
import {TabsComponent} from "./ui/tabs/tabs.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes: Routes = [{
  path: 'games', component: GamesListComponent,
}, {
  path: 'my-games', component: MyGamesListComponent
}
]

@NgModule({
  declarations: [GamesListComponent, MyGamesListComponent, CardComponent, TabsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  exports: [
    GamesListComponent
  ],
  providers: [
    HttpGetGamesService,
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class GamesModule {
}


