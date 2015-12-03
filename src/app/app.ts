import {bootstrap, Component} from 'angular2/angular2';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{second}}</h1>
  `
})
class AppComponent {
  public second: string = 'second';
}

bootstrap(AppComponent);
