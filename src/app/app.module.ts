
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from'@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HomeComponent } from './component/home/home.component';
import { GameComponent } from './component/game/game.component';
import { LoginComponent } from './component/login/login.component'; 
import { LayoutComponent } from './component/layout/layout.component';
import { UserComponent } from './component/user/user.component';
import { AddGameComponent } from './admin/add-game/add-game.component';
import { SecondAddGameComponent } from './admin/second-add-game/second-add-game.component';
import { InstructionComponent } from './component/instruction/instruction.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    LoginComponent,
    LayoutComponent,
    AppComponent,
    UserComponent,
    AddGameComponent,
    SecondAddGameComponent,
    InstructionComponent,
    DashboardComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    MatListModule,
  ],
  providers: [],
       
  bootstrap: [AppComponent]
})
export class AppModule { }
