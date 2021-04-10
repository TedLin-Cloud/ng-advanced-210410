import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  num = 0;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.num = +params.get('type');
    });

    this.seolog();
  }

  seolog() {
    console.log(this.route.snapshot.data["seo"]);
  }

  plusOne() {
    //this.router.navigate(['/utilities/color/', this.num + 1])
    // this.router.navigate(['../',this.num +1],{relativeTo:this.route});
    this.router.navigate(['/utilities/color', this.num + 1], {
      queryParamsHandling: 'merge',
      queryParams: {
        page: 1
      }
    })
  }
}
