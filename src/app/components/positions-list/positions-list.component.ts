import { Component, Input } from '@angular/core';
import { Position } from 'src/app/models/EMPUser';
import { PositionService } from 'src/app/services/position.service';

@Component({
  selector: 'app-positions-list',
  templateUrl: './positions-list.component.html',
  styleUrls: ['./positions-list.component.scss']
})
export class PositionsListComponent {
  @Input() position: Position[] = [];
  positions: Position[] = [];

  constructor(private positionService: PositionService) {}

  ngOnInit(): void {
    this.positionService.getPositions().subscribe(
      posi => this.positions = posi,
      error => console.error('Error fetching positions', error)
    );
  }

  deletePosition(position: Position): void {
    this.positionService.deletePosition(position.positionId).subscribe(
      () => this.positions = this.positions.filter(posi => posi.positionId !== position.positionId),
      error => console.error('Error deleting employee', error)
    );
  }
}
