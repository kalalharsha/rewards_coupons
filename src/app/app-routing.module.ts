import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component'; 
import { GameComponent } from './component/game/game.component'; 
import { LoginComponent } from './component/login/login.component';
import { UserComponent } from './component/user/user.component';
import { InstructionComponent } from './component/instruction/instruction.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminGuard } from './services/admin.guard.service'; 
import { AddGameComponent } from './admin/add-game/add-game.component';
import { SecondAddGameComponent } from './admin/second-add-game/second-add-game.component';
const routes: Routes = [
  {
  path: 'game',
  component: GameComponent,
  },
  {
  path: 'login',
  component:LoginComponent
  },
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'home',
  component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
    },
  {
    path: 'instruction',
    component: InstructionComponent
    },
    {
      path: 'admin',
      component: InstructionComponent,
      canActivate: [AdminGuard],
      children: [
        {
          path: 'addgame',
          component: AddGameComponent,
        },
        {
          path: 'secondaddgame',
          component: SecondAddGameComponent,
        },
        
      ],
    }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
