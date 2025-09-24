import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface Agente {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  perfis: string[];
  dataCriacao: string;
}

const ELEMENT_DATA: Agente[] = [
  {
    id: 1,
    nome: 'Matheus Ferreira Lima',
    cpf: '123.456.789-10',
    email: 'matheus.lima@dellavolpe.com.br',
    senha: '1234321',
    perfis: ['0'],
    dataCriacao: '24/08/2025'
  }
];

@Component({
  selector: 'app-agente-list',
  standalone: true,
  styleUrls: ['./agente-list.css'],
  templateUrl: './agente-list.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
})
export class AgenteList implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nome', 'email', 'dataCriacao'];
  dataSource = new MatTableDataSource<Agente>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
