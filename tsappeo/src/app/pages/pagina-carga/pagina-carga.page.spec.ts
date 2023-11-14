import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaCargaPage } from './pagina-carga.page';

describe('PaginaCargaPage', () => {
  let component: PaginaCargaPage;
  let fixture: ComponentFixture<PaginaCargaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaCargaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


      // The ngOnInit method should call the siguientePagina method after 3 seconds, which should navigate to the '/login' route.
      it('should call siguientePagina and navigate to '/login' after 3 seconds', function() {
        spyOn(component, 'siguientePagina');
        spyOn(component.router, 'navigate');
  
        component.ngOnInit();
  
        expect(component.siguientePagina).toHaveBeenCalled();
        expect(component.router.navigate).toHaveBeenCalledWith(['/login']);
      });
});
