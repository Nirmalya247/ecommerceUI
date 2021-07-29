import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    public defaultPages = [
        { title: 'Home', url: '/home', icon: 'home', id: 'home' },
    ];
    public products = [
        { title: 'Electronics', icon: '', id: 'electronics', sub: [
            { title: 'Mobile', icon: '', url: '/mobile' }
        ] }
    ];
    isRemainder = 0;
    selectedId = 'home';
    constructor() { }
}
