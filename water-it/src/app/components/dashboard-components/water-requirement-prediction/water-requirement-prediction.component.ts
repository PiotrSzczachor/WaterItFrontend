import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SelectionService } from 'src/app/services/selection.service';

@Component({
  selector: 'app-water-requirement-prediction',
  templateUrl: './water-requirement-prediction.component.html',
  styleUrls: ['./water-requirement-prediction.component.css']
})
export class WaterRequirementPredictionComponent implements OnInit {

  prediction$!: Observable<any> | undefined;

  constructor(private http: HttpClient, private authService: AuthService, private selectionService: SelectionService) { }

  ngOnInit(): void {
    this.getPrediction();
  }

  getPrediction(): void {
    this.prediction$ = this.http.get<any>(environment.apiUrl + `water-requirement?fieldId=${this.selectionService.selectedFieldId}`);
  }
}
