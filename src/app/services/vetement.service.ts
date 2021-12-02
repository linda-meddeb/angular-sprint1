import { Injectable } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
providedIn: 'root'
})
export class VetementService {
  apiURL: string = 'http://localhost:8080/vetements/api';

vetements : Vetement[]; //un tableau de Produit
//animal : Animal;
constructor(private http : HttpClient) {
/*this.animals = [
  {numA : 1, nomA : "oreo", couleur : "blanche", dateNais : new Date("01/14/2011")},
  {numA : 2, nomA : "michou",couleur  : "noir", dateNais : new Date("12/17/2010")},
  {numA : 3, nomA :" macha",  couleur: "multicouleur", dateNais : new Date("02/20/2020")}

];*/
}
listeVetement(): Observable<Vetement[]>{
  return this.http.get<Vetement[]>(this.apiURL);
  }
  
/*listeAnimals():Animal[] {
  return this.animals;
}*/
ajouterVetement( prod: Vetement):Observable<Vetement>{
  return this.http.post<Vetement>(this.apiURL, prod, httpOptions);
  }
  supprimerVetement(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }
  
/*ajouterAnimal( prod: Animal){
this.animals.push(prod);
}
supprimerAnimal( prod: Animal){
  //supprimer le produit prod du tableau produits
  const index = this.animals.indexOf(prod, 0);
  if (index > -1) {
  this.animals.splice(index, 1);
  }*/
  //ou Bien
  /* this.produits.forEach((cur, index) => {
  if(prod.idProduit === cur.idProduit) {
  this.produits.splice(index, 1);
  }
  }); */
 // }
  /*consulterAnimal(id:number): Animal{
    this.animal = this.animals.find(p => p.numA == id);
    return this.animal;
    }*/
    consulterVetement(id: number): Observable<Vetement> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Vetement>(url);
      }
  
    trierVetements(){
      this.vetements = this.vetements.sort((n1,n2) => {
      if (n1.idVetement > n2.idVetement) {
      return 1;
      }
      if (n1.idVetement < n2.idVetement) {
      return -1;
      }
      return 0;
      });
      }
      updateVetement(p:Vetement)
      {
      // console.log(p);
      return this.http.put<Vetement>(this.apiURL, p, httpOptions);

      }
    
}
