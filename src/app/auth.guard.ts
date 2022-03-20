import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Injectable } from "@angular/core";
import jwtDecode from "jwt-decode";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  localData: any = [];
  id: any;
  constructor(private router: Router) {
    var hash = window.location.hash.substr(1);
    var result = hash.split("#").reduce(function (res: any, item: any) {
      var parts = item.split("=");
      res[parts[0]] = parts[1];
      return res;
    }, {});

    console.log(result, "you get profile info or error msg here ....");

    if (result && result.id_token) {
      var tokens: any = {};
      tokens = jwtDecode(result.id_token);
      if (tokens && tokens.preferred_username) {
        console.log(tokens.preferred_username);

        localStorage.setItem("api_token", result.id_token);
        localStorage.setItem("Id", tokens.preferred_username);
        localStorage.setItem("user", JSON.stringify(tokens));
      }
    }

    if (!localStorage.getItem("Id")) {
      this.router.navigate([""]);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.localData = localStorage.getItem("user");
    this.id = localStorage.getItem("Id");
    if (this.localData && this.localData != "" && JSON.parse(this.localData)) {
      const userData = JSON.parse(this.localData);
      console.log("userData", userData);
    }

    return true;
  }
}
