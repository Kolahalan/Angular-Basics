// src/app/app.ts
import { Component,signal  } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Keep this if you're using routing
import { CommonModule } from '@angular/common'; // Good practice to include for standalone components
import { Header}  from './header/header' 
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root', // This matches the tag in index.html
  standalone: true,      // Confirms it's a standalone component
  imports: [
    CommonModule, // Include CommonModule
    RouterOutlet, // Include RouterOutlet if using Angular routing
    Header, // <--- ADD HeaderComponent to the imports array
    User,
    Tasks
],
  templateUrl: './app.html', // Your main application template
  styleUrl: './app.css'      // Your main application styles
})
export class App {
users= DUMMY_USERS;  

  selectedUserName = signal<{ id: string; name: string } >({ id: '', name: '' });

  onSelectedUser(user: { id: string; name: string }) {
    console.log('Selected user ID:', user.id);
    console.log('Selected user name:', user.name);
    this.selectedUserName.set(user); // ✅ update the signal
  }
}