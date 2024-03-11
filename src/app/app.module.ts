import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SucessStoriesComponent } from './sucess-stories/sucess-stories.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { DepartmentMembersComponent } from './department-members/department-members.component';
import { AboutComponent } from './about/about.component';
import { TrainingComponent } from './training/training.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudyplanComponent } from './studyplan/studyplan.component';
import { SuccessstoryComponent } from './successstory/successstory.component';
import { InternaltrainingComponent } from './internaltraining/internaltraining.component';
import { ExternaltrainingComponent } from './externaltraining/externaltraining.component';
import { CompetitionComponent } from './competition/competition.component';
import { DepartmentmemberComponent } from './departmentmember/departmentmember.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { WriteFormComponent } from './write-form/write-form.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { DRFormComponent } from './drform/drform.component';
import { ExtrainingComponent } from './extraining/extraining.component';
import { BadweyProfileComponent } from './badwey-profile/badwey-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    SucessStoriesComponent,
    CompetitionsComponent,
    DepartmentMembersComponent,
    AboutComponent,
    TrainingComponent,
    NotfoundComponent,
    StudyplanComponent,
    SuccessstoryComponent,
    InternaltrainingComponent,
    ExternaltrainingComponent,
    CompetitionComponent,
    DepartmentmemberComponent,
    ProjectsComponent,
    ProjectComponent,
    WriteFormComponent,
    AdminFormComponent,
    DRFormComponent,
    ExtrainingComponent,
    BadweyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
