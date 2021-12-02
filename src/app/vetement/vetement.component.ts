import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vetement',
  templateUrl: './vetement.component.html',
  styleUrls: ['./vetement.component.css']
})
export class VetementComponent implements OnInit {
  //animals : string[]; //un tableau de chînes de caractères
  vetements : Vetement[]; //un tableau de Produit

 /* constructor() { 
   // this.animals = ["michou", "mimi", "macha"];
   this.animals = [
    {numA : 1, nomA : "oreo", couleur : "blanche", dateNais : new Date("01/14/2011")},
    {numA : 2, nomA : "michou",couleur  : "noir", dateNais : new Date("12/17/2010")},
    {numA : 3, nomA :" macha",  couleur: "multicouleur", dateNais : new Date("02/20/2020")}
     ];
  }*/
  constructor(private vetementService: VetementService,private router :Router ) {
    //this.animals = animalService.listeAnimal();
    }
    
    
    

ngOnInit(): void {
  this.vetementService.listeVetement().subscribe(prods => {
  console.log(prods);
  this.vetements = prods;
  });
  }

supprimerVetement(p: Vetement)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.vetementService.supprimerVetement(p.idVetement).subscribe(() => {
      console.log("vetement supprimé");
      this.SuprimerVetementDuTableau(p);
      });
      
    }
SuprimerVetementDuTableau(prod : Vetement) {
      this.vetements.forEach((cur, index) => {
      if(prod.idVetement=== cur.idVetement) {
      this.vetements.splice(index, 1);
      }
      });
      }

}
