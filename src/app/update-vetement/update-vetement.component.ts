import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VetementService } from '../services/vetement.service';
import { Vetement } from '../model/vetement.model';
@Component({
selector: 'app-update-vetement',
templateUrl: './update-vetement.component.html',
styles: []
})
export class UpdateVetementComponent implements OnInit {
currentVetement = new Vetement();
constructor(private activatedRoute: ActivatedRoute,
  private vetementService: VetementService,
  private router :Router,

  
  ) { }
  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
  this.vetementService.consulterVetement(this.activatedRoute.snapshot.params.id).
 subscribe( prod =>{ this.currentVetement = prod; } ) ;

  } 
  updateVetement()
{ //console.log(this.currentProduit);
  this.vetementService.updateVetement(this.currentVetement).subscribe(prod => {
    this.router.navigate(['vetements']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    
}


}