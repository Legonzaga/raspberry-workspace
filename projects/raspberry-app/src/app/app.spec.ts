import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router';
import { RpMenuItem } from '../../../lib-raspberry/src/lib/models/rp-menu.types';

describe('App', () => {

  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([])
      ]      
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;

  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('rp-toolbar')?.textContent).toContain('Frontend Angular test');
  });

  it('should check if datasource was provided', () => {

    const testMenu: RpMenuItem[] = [
      { name: 'Dashboard', url: '/dashboard' }
    ]; 

    component.menuItem = testMenu;

    expect(component.menuItem.length).toBeGreaterThanOrEqual(1);
    expect(component.menuItem[0].name).toBe('Dashboard');

    const compiled = fixture.nativeElement as HTMLElement;
    
    const menu = compiled.querySelector('rp-menu');
    expect(menu).toBeTruthy();
  });

});
