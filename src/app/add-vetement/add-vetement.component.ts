import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
  styleUrls: ['./add-vetement.component.css']
})
export class AddVetementComponent implements OnInit {
  newVetement = new Vetement();
  message : string;



constructor(private vetementService: VetementService,private router :Router) {}
  ngOnInit() {
  }
  addVetement(){
    this.vetementService.ajouterVetement(this.newVetement)
    .subscribe(prod => {
    console.log(prod);
    });
    this.router.navigate(['vetement']);
    }
  /*addAnimal(){
   // console.log(this.newAnimal);
   this.animalService.ajouterAnimal(this.newAnimal);
   this.message="animal "+this.newAnimal.nomA+" ajouté avec succée"
    }*/

}
