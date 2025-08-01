import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from './search-bar/search-bar';
import { Menu } from './menu/menu';
import { NoteService } from './service/note';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBar, Menu],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'keep Google';
  isMenuOpen = false;

  constructor(private noteservice : NoteService){}

  onMenuToggled(isOpen: boolean) {
    this.isMenuOpen = isOpen;
  }
}
