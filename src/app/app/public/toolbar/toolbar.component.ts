import {Component, inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {MatSidenav} from "@angular/material/sidenav";
import {MatFormField} from "@angular/material/form-field";
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, MatFormField, MatFormFieldModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  //@ViewChild('sidenav') sidenav!: MatSidenav;


  //http = inject(HttpClient);
  authService = inject(AuthService)

  ngOnInit() : void{
    this.authService.user$.subscribe(user =>{
      if(user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig())
    });
  }

  logout(): void {
    //console.log('logout');
    this.authService.logout();
  }

  closeSidenav(sidenav: MatSidenav) {
    sidenav.close();
  }
}
