import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurepipesComponent } from './purepipes/purepipes.component';
import { MaterialModule } from '../material/material.module';
import { HighlightPipe } from './pipes/highlight.pipe';
import { DirectiveComponent } from './directive/directive.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';




@NgModule({
  declarations: [
    PurepipesComponent,
    HighlightPipe,
    DirectiveComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    PurepipesComponent,
    DirectiveComponent,
    ParentComponent,
    ChildComponent
  ]
})
export class BlockModule { }
