import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: /*html*/`
    <section class="todoapp">
      <main class="main">
        <div class="signature">
          <a class="signature__name" href="https://twitter.com/_JorgeBarron" target="_blank">Jorge Barron</a>
          <hr class="divider" />

          <div class="signature__socials">
            <a class="signature__socials-link" href="https://github.com/jorge8168711/ngrx-todo-app" target="_blank">
              <svg class="signature__socials-icon" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#767676" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H14.56C14.24,20.93 14.23,20.32 14.23,20.11L14.24,17.64C14.24,16.8 13.95,16.25 13.63,15.97C15.64,15.75 17.74,15 17.74,11.53C17.74,10.55 17.39,9.74 16.82,9.11C16.91,8.89 17.22,7.97 16.73,6.73C16.73,6.73 15.97,6.5 14.25,7.66C13.53,7.46 12.77,7.36 12,7.35C11.24,7.36 10.46,7.46 9.75,7.66C8.03,6.5 7.27,6.73 7.27,6.73C6.78,7.97 7.09,8.89 7.18,9.11C6.61,9.74 6.26,10.55 6.26,11.53C6.26,15 8.36,15.75 10.36,16C10.1,16.2 9.87,16.6 9.79,17.18C9.27,17.41 7.97,17.81 7.17,16.43C7.17,16.43 6.69,15.57 5.79,15.5C5.79,15.5 4.91,15.5 5.73,16.05C5.73,16.05 6.32,16.33 6.73,17.37C6.73,17.37 7.25,19.12 9.76,18.58L9.77,20.11C9.77,20.32 9.75,20.93 9.43,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" /></svg>
            </a>

            <a class="signature__socials-link" href="https://www.linkedin.com/in/jorgebarrondev/" target="_blank">
              <svg class="signature__socials-icon" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#767676" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" /></svg>
            </a>
          </div>
        </div>

        <app-todo-add></app-todo-add>
        <app-todo-status-bar></app-todo-status-bar>
        <app-todo-list></app-todo-list>
      </main>
    </section>
  `,
  styles: [ /*css*/ `
    .signature {
      margin-bottom: 4em;
      display: flex;
      align-items: center;
    }

    .signature__name {
      font-size: 13px;
      color: #767676;
      text-decoration: none;
      transition: background-color 0.2s cubic-bezier(0.4, 0, 1, 1);
    }

    .divider {
      background-color: var(--text-primary);
      height: 40px;
      width: 1px;
      border: 0;
      opacity: .5;
      margin: 0 .5em;
    }

    .signature__socials {
      flex: 1;
    }

    .signature__socials-link {
      text-decoration: none;
      padding: 10px 0;
      margin-right: .5em;
    }

    .signature__socials-icon {
      fill: #767676;
      opacity: 0.7;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .signature__socials-icon:hover {
      opacity: 1;
    }
  `]
})

export class AppComponent {
  title = 'ngrx-todo-app';
}
