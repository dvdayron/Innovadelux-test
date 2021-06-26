import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

/**********************************************************************
 -COMPONENT IMPORTS
 **********************************************************************/
import {AppComponent} from './app.component';
import {LayoutComponent} from './pages/layout/layout.component';
import {ClockExampleComponent} from './pages/clock-example/clock-example.component';
import {WizardExampleComponent} from './pages/wizard-example/wizard-example.component';
import {CalendarExampleComponent} from './pages/calendar-example/calendar-example.component';
import { ClockComponent } from './components/clock/clock.component';
import { ChronometerComponent } from './components/chronometer/chronometer.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { 
        path: '', 
        redirectTo: 'clock-example', 
        pathMatch: 'full' 
      },
      {
        path: 'clock-example',
        component: ClockExampleComponent
      },
      {
        path: 'wizard-example',
        component: WizardExampleComponent
      },
      {
        path: 'calendar-example',
        component: CalendarExampleComponent
      },
    ],
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ClockExampleComponent,
    WizardExampleComponent,
    CalendarExampleComponent,
    ClockComponent,
    ChronometerComponent,
    CountdownComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
