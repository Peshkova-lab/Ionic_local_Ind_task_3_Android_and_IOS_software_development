import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataGetterService } from '../service/data-getter.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName: string;

  constructor(
    private router: Router,
    private dataGetter: DataGetterService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.dataGetter.userExists(this.userName)) {
      this.dataGetter.setUser(this.userName);
      this.router.navigate(['/home']);  
    } else {
      this.userNotExistAlert();
    }
  }

  async userNotExistAlert() {
    const alert = await this.alertController.create({
      header: 'Attention!',
      subHeader: "Auth Error!",
      message: `User ${this.userName} not exists!` +
      ` Wrong username.`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
