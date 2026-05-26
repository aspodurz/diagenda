import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurerMenu } from './configurer.menu.component';

describe('ConfigurerMenu', () => {
  let component: ConfigurerMenu;
  let fixture: ComponentFixture<ConfigurerMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurerMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigurerMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
