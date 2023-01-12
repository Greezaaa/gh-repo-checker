import { Component } from '@angular/core'
import { AppComponent } from 'src/app/app.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  title: string = AppComponent.title
}
