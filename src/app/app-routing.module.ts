import { BadweyProfileComponent } from './badwey-profile/badwey-profile.component';
import { ExtrainingComponent } from './extraining/extraining.component';
import { DRFormComponent } from './drform/drform.component';
import { WriteFormComponent } from './write-form/write-form.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { DepartmentmemberComponent } from './departmentmember/departmentmember.component';
import { CompetitionComponent } from './competition/competition.component';
import { ExternaltrainingComponent } from './externaltraining/externaltraining.component';
import { InternaltrainingComponent } from './internaltraining/internaltraining.component';
import { StudyplanComponent } from './studyplan/studyplan.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TrainingComponent } from './training/training.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { LoginComponent } from './login/login.component';
import { SucessStoriesComponent } from './sucess-stories/sucess-stories.component';
import { DepartmentMembersComponent } from './department-members/department-members.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SuccessstoryComponent } from './successstory/successstory.component';

const routes: Routes = [
{path:'', redirectTo:'home',pathMatch:'full'},
{path:'home', component:HomepageComponent, title:'HomePage'},
{path:'about', component:AboutComponent, title:'AboutPage'},
{path:'departmentmembers', component:DepartmentMembersComponent, title:'DepartmentMembersPage'},
{path:'sucessstories', component:SucessStoriesComponent, title:'portfolioPage'},
{path:'login', component:LoginComponent, title:'LoginPage'},
{path:'project', component:ProjectComponent, title:'ProjectPage'},
{path:'projects', component:ProjectsComponent, title:'ProjectsPage'},
{path:'competitions', component:CompetitionsComponent, title:'CompetitionsPage'},
{path:'competition', component:CompetitionComponent, title:'CompetitionPage'},
{path:'training', component:TrainingComponent, title:'TrainingPage'},
{path:'studyplan', component:StudyplanComponent, title:'studyplanPage'},
{path:'successstory', component:SuccessstoryComponent, title:'successstoryPage'},
{path:'internaltraining', component:InternaltrainingComponent, title:'InternalTrainingPage'},
{path:'externaltraining', component:ExternaltrainingComponent, title:'ExternalTrainingPage'},
{path:'trainingexternal',component:ExtrainingComponent,title:'ExternalTrainingPagePage'},
{path:'departmentmember',component:DepartmentmemberComponent,title:'DrProfilePage'},
{path:'adminform', component:AdminFormComponent, title:'FormPage'},
{path:'form', component:WriteFormComponent, title:'FormPage'},
{path:'drform', component:DRFormComponent, title:'FormPage'},
{path:'drprofile', component:BadweyProfileComponent, title:'DrProfilePage'},
{path:'**', component:NotfoundComponent, title:'NotFoundPage'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{
    scrollPositionRestoration:'enabled'
  })],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
