import { Component } from '@angular/core';

@Component({
    template: `
        <p>Home Component</p>
        <button (click)='toggleLoad()'>Toggle Ladda</button>
        <button (click)='toggleDisabled()'>Toggle disabled state</button>
        <hr>
        <button [ladda]="loading" data-style="zoom-in" data-spinner-size="30" data-spinner-color="red" data-spinner-lines="10">Click me</button>
        <button [disabled]="disabled" [ladda]="loading">Click me</button>
    `
})
export class HomeComponent {
    loading: boolean = true;
    disabled: boolean = true;
    
    toggleLoad() {
        this.loading = !this.loading;
    }
    
    toggleDisabled() {
        this.disabled = !this.disabled;
    }
}
