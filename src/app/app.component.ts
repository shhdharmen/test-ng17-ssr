import { Component, OnInit, PLATFORM_ID, inject } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = "test-ssr";
  http = inject(HttpClient);
  platformID = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      this.http.get("/api").subscribe((d) => console.log(d));
    }
  }
}
