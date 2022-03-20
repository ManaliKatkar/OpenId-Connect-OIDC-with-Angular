import { Component, OnInit } from "@angular/core";
import { OidcService } from "../oidc.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-login-to-page",
  templateUrl: "./login-to-page.component.html",
  styleUrls: ["./login-to-page.component.scss"],
})
export class LoginToPageComponent implements OnInit {
  constructor(private service: OidcService) {}
  profileForm = new FormGroup({});
  ngOnInit() {}

  public loginToPage(): void {
    this.service.login();
  }

  onSubmit() {
    this.service.login();
  }
}
