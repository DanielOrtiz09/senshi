import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
  urlApi:'http://localhost:8089/000senshi/api/',
  options:{
    headers:new HttpHeaders({'Content-Type':'application/json; charset=UTF-8'})
  }
};
