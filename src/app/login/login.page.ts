import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  async ingresar() {
    var f = this.formularioLogin.value;

    // Obtener el usuario del localStorage
    var usuarioStr = localStorage.getItem('usuario');

    if (usuarioStr) {
      // Si se encontró el usuario en el localStorage, parsearlo
      var usuario = JSON.parse(usuarioStr);

      // Verificar las credenciales del usuario
      if (usuario.nombre == f.nombre && usuario.password == f.password) {
        console.log('Ingresado');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar']
        });

        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Usuario no encontrado',
        message: 'No se encontraron datos de usuario. Regístrate primero.',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }
}
