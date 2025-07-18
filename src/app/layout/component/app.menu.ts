import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'UI Components',
                items: [
                    { label: 'Departamento', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/departamento'] },
                    { label: 'Incidencia', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/incidencia'] },
                    { label: 'Mantenimiento', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/mantenimiento'] },
                    { label: 'Pago', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/pago'] },
                    { label: 'Paquete', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/paquete'] },
                    { label: 'Recibo', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/recibo'] },
                    { label: 'Residencia', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/residencia'] },
                    { label: 'Residente', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/residente'] },
                    { label: 'Rol', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/rol'] },
                    { label: 'Usuario', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/usuario'] }
                ]
            }
        ];
    }
}
